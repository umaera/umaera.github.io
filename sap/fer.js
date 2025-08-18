(function(){
    const canvas = document.getElementById('glcanvas');
    const renderer = new THREE.WebGLRenderer({canvas:canvas,antialias:false,alpha:false});
    renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5));

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1,1,1,-1,0,1);

    const geometry = new THREE.PlaneGeometry(2,2);

    const frag = `
    precision highp float;
    uniform float u_time;
    uniform vec2 u_resolution;
    uniform vec2 u_mouse;
    uniform vec3 u_c1;
    uniform vec3 u_c2;
    uniform vec3 u_c3;

    float hash(vec2 p){p = fract(p*vec2(123.34,345.45)); p+=dot(p,p+34.345); return fract(p.x*p.y);}
    float noise(in vec2 p){
      vec2 i = floor(p); vec2 f = fract(p);
      float a = hash(i);
      float b = hash(i+vec2(1.0,0.0));
      float c = hash(i+vec2(0.0,1.0));
      float d = hash(i+vec2(1.0,1.0));
      vec2 u = f*f*(3.0-2.0*f);
      return mix(a,b,u.x)+ (c-a)*u.y*(1.0-u.x) + (d-b)*u.x*u.y;
    }

    float fbm(vec2 p){
      float v=0.0; float a=0.5;
      for(int i=0;i<5;i++){
        v += a*noise(p);
        p *= 2.0; a *= 0.5;
      }
      return v;
    }

    void main(){
      vec2 uv = gl_FragCoord.xy / u_resolution.xy;
      vec2 st = uv - 0.5;
      st.x *= u_resolution.x / u_resolution.y;

      float t = u_time * 0.5;

      float n = fbm(st*3.0 + vec2(t*0.15, t*0.1));
      float warp = fbm(st*6.0 + n*2.0 + vec2(sin(t*0.7), cos(t*0.4))*0.5);
      vec2 displaced = st + normalize(st)*warp*0.12;

      float slice = smoothstep(0.02,0.0, abs(sin((st.y + t*0.8)*40.0 + noise(st*700.0)*6.0)) );
      float band = step(0.92,fract(n*10.0 + t*0.3));

      float rShift = 0.006 * (noise(displaced*40.0 + vec2(t*3.0)) - 0.5);
      float gShift = 0.003 * (noise(displaced*30.0 + vec2(t*2.1)) - 0.5);
      float bShift = -0.005*(noise(displaced*20.0 + vec2(t*4.2)) - 0.5);

      vec2 ru = uv + vec2(rShift,0.0);
      vec2 gu = uv + vec2(gShift,0.0);
      vec2 bu = uv + vec2(bShift,0.0);

      float rn = fbm((ru-0.5)*6.0 + vec2(t*0.2));
      float gn = fbm((gu-0.5)*6.0 + vec2(t*0.2+10.0));
      float bn = fbm((bu-0.5)*6.0 + vec2(t*0.2+20.0));

      vec3 col = rn * u_c1 + gn * u_c3 + bn * u_c2;

      float scan = sin((gl_FragCoord.y+u_time*180.0)*0.8) * 0.04;
      col += scan * 0.6;

      float speck = step(0.9996, fract(sin(dot(gl_FragCoord.xy ,vec2(12.9898,78.233))) * 43758.5453));
      col += speck * 1.0;

      col = mix(col, col*1.6, band*0.85);

      float v = smoothstep(0.8,0.15,length(st));
      col *= mix(0.7,1.0,v);

      col = floor(col*12.0)/12.0;

      col = pow(col, vec3(0.95));

      gl_FragColor = vec4(col,1.0);
    }
    `;

    const vert = `
    precision highp float;
    attribute vec3 position;
    void main(){ gl_Position = vec4(position,1.0); }
    `;

    const material = new THREE.RawShaderMaterial({
      uniforms:{
        u_time:{value:0}, u_resolution:{value:new THREE.Vector2(window.innerWidth,window.innerHeight)}, u_mouse:{value:new THREE.Vector2(0,0)},
        u_c1:{value:new THREE.Color(getComputedStyle(document.documentElement).getPropertyValue('--neon-cyan') || '#00f0ff')},
        u_c2:{value:new THREE.Color(getComputedStyle(document.documentElement).getPropertyValue('--folly-red') || '#ff1654')},
        u_c3:{value:new THREE.Color(getComputedStyle(document.documentElement).getPropertyValue('--smooth-purple') || '#8a5cff')}
      },
      vertexShader:vert,
      fragmentShader:frag
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    function resize(){
      const w = window.innerWidth, h = window.innerHeight;
      renderer.setSize(w,h);
      material.uniforms.u_resolution.value.set(w,h);
    }
    window.addEventListener('resize', resize, {passive:true});
    resize();

    const title = document.getElementById('title');
    const slices = Array.from(title.querySelectorAll('.slice'));
    function jitterTitle(t){
      for(let i=0;i<slices.length;i++){
        const s = slices[i];
        const off = Math.sin(t*0.001*(1.2 + i*0.3) + i*2.1) * (2 + i*2);
        const rot = Math.cos(t*0.0006 + i) * (1.5 - i*0.5);
        s.style.transform = `translateY(${off}px) rotate(${rot}deg)`;
        if(Math.random() < 0.003) s.style.opacity = 0.3 + Math.random()*0.9;
      }
    }

    let last = performance.now();
    function render(now){
      const dt = (now - last)/1000; last = now;
      material.uniforms.u_time.value = now * 0.001;
      jitterTitle(now);
      renderer.render(scene,camera);
      requestAnimationFrame(render);
    }
    requestAnimationFrame(render);

    title.style.filter = 'drop-shadow(0 0 14px rgba(0,240,255,0.12))';
    title.classList.add('flicker');

    function webglOk(){ try{ const gl = canvas.getContext('webgl2') || canvas.getContext('webgl') || canvas.getContext('experimental-webgl'); return !!gl;}catch(e){return false}};
    if(!webglOk()){
      const p = document.getElementById('subtitle');
      p.textContent = 'Your browser does not support WebGL — static fallback.';
      canvas.style.display='none';
    }

  })();

  // get service styles
  document.querySelectorAll('.result-sub-link').forEach(el => {
  el.innerHTML = el.innerHTML.replace(
    'true',
    '<span class="status-true">true</span>'
  );
    el.innerHTML = el.innerHTML.replace(
    'false',
    '<span class="status-false">false</span>'
  );
});

  function OpenServices(){
    document.getElementById('resultsbuttonOpen').style.display = 'none';
    document.getElementById('resultsbuttonClose').style.display = 'block';
    document.getElementById('results').style.top = '63%';
    document.getElementById('results').style.width = '70%';
    document.getElementById('title').style.top = '18%';
    document.getElementById('otherResults').style.display = 'block';
  }

    function CloseServices(){
    document.getElementById('resultsbuttonOpen').style.display = 'block';
    document.getElementById('resultsbuttonClose').style.display = 'none';
    document.getElementById('results').style.top = '90%';
    document.getElementById('results').style.width = '20%';
    document.getElementById('title').style.top = '50%';
    document.getElementById('otherResults').style.display = 'none';
  }
