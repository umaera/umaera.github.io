const scene = new THREE.Scene();
scene.background = new THREE.Color("#2F0B17");
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        const textureLoader = new THREE.TextureLoader();
        const moonTexture = textureLoader.load('./icons/textures/pinkmoon.jpg');

        const geometry = new THREE.SphereGeometry(1, 32, 32);
        const material = new THREE.MeshBasicMaterial({ map: moonTexture });
        const moon = new THREE.Mesh(geometry, material);

        scene.add(moon);

        camera.position.z = 5;

        function animate() {
            requestAnimationFrame(animate);

            moon.rotation.y += 0.01;

            renderer.render(scene, camera);
        }

        animate();

        window.addEventListener('resize', () => {
            renderer.setSize(window.innerWidth, window.innerHeight);
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
        });