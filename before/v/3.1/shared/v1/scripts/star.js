// Scene, Camera, Renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Starfield
const starCount = 800;
const starGeometry = new THREE.BufferGeometry();
const starPositions = new Float32Array(starCount * 3);

for (let i = 0; i < starCount; i++) {
  starPositions[i * 3 + 0] = (Math.random() - 0.5) * 100; // X
  starPositions[i * 3 + 1] = (Math.random() - 0.5) * 100; // Y
  starPositions[i * 3 + 2] = Math.random() * -100;        // Z
}

starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
const starMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.2});
const starMesh = new THREE.Points(starGeometry, starMaterial);
scene.add(starMesh);

window.speed = 0;
window.speedDelta = 0;


function animate() {
  requestAnimationFrame(animate);

  speed += speedDelta;
  speed = Math.max(0.1, Math.min(speed, 5)); 

  speedDelta *= 0.9;

  const positions = starGeometry.attributes.position.array;
  for (let i = 0; i < starCount; i++) {
    positions[i * 3 + 2] += speed; 
    if (positions[i * 3 + 2] > -5 ) { // position delete
      positions[i * 3 + 0] = (Math.random() - 0.5) * 100; // X
      positions[i * 3 + 1] = (Math.random() - 0.5) * 100; // Y
      positions[i * 3 + 2] = Math.random() * -100;        // Z
    }
  }

  starGeometry.attributes.position.needsUpdate = true;
  renderer.render(scene, camera);
}

camera.position.z = 5;
animate();
window.addEventListener('resize', () => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  renderer.setSize(width, height);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
});
