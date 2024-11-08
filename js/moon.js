const scene = new THREE.Scene();
scene.background = new THREE.Color("#2F0B17");
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        // Textura da lua
        const textureLoader = new THREE.TextureLoader();
        const moonTexture = textureLoader.load('./icons/textures/pinkmoon.jpg');

        // Geometria da lua (esfera)
        const geometry = new THREE.SphereGeometry(1, 32, 32);
        const material = new THREE.MeshBasicMaterial({ map: moonTexture });
        const moon = new THREE.Mesh(geometry, material);

        // Adicionando a lua à cena
        scene.add(moon);

        // Posicionar a câmera
        camera.position.z = 5;

        // Função de animação
        function animate() {
            requestAnimationFrame(animate);

            // Girar a lua
            moon.rotation.y += 0.01;

            // Renderizar a cena
            renderer.render(scene, camera);
        }

        // Iniciar animação
        animate();

        // Ajustar o tamanho do renderizador quando redimensionar a janela
        window.addEventListener('resize', () => {
            renderer.setSize(window.innerWidth, window.innerHeight);
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
        });