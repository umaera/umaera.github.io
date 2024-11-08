const scene = new THREE.Scene();
        scene.background = new THREE.Color("#2F0B17");

        const loader = new THREE.TextureLoader();

        const canvas = document.getElementById('webglCanvas');
        const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);

        const earthTexture = loader.load('../icons/textures/earth_texture_night.jpg');
        const earthSpecularMap = loader.load('../icons/textures/8k_earth_specular_map.jpg');

        const earthGeometry = new THREE.SphereGeometry(5, 32, 32);
        const earthMaterial = new THREE.MeshPhongMaterial({
            map: earthTexture,
            specularMap: earthSpecularMap,
            specular: new THREE.Color(0x333333),
            shininess: 15
        });
        const earth = new THREE.Mesh(earthGeometry, earthMaterial);
        scene.add(earth);


        const cloudsTexture = loader.load('../icons/textures/8k_earth_clouds.jpg');
        const cloudsGeometry = new THREE.SphereGeometry(5.05, 32, 32);
        const cloudsMaterial = new THREE.MeshBasicMaterial({
            map: cloudsTexture,
            transparent: true,
            opacity: 0.2
        });
        const clouds = new THREE.Mesh(cloudsGeometry, cloudsMaterial);
        earth.add(clouds);

        const moonTexture = loader.load('../icons/textures/moon_texture.jpg');
        const moonGeometry = new THREE.SphereGeometry(1.3, 32, 32);
        const moonMaterial = new THREE.MeshBasicMaterial({ map: moonTexture });
        const moon = new THREE.Mesh(moonGeometry, moonMaterial);
        moon.position.set(22, -3, 0);
        earth.add(moon);

        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.set(6, 2, 3);
        camera.rotation.z += -0.7;

        const animate = function () {
            requestAnimationFrame(animate);
            earth.rotation.y += 0.0009;
            moon.rotation.y += 0.0001;
            clouds.rotation.y += 0.0009;
            renderer.render(scene, camera);
        };

        animate();