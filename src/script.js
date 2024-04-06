import './style.css';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import gsap from 'gsap';

// Canvas
const canvas = document.querySelector('canvas');

// Scene
const scene = new THREE.Scene();

// Camera
const camera = new THREE.PerspectiveCamera(
  45, // Field of View
  window.innerWidth / window.innerHeight, // Aspect Ratio
  0.1, // Near
  1000 // Far
);

// Initial position of the camera
camera.position.set(-4.9, 4.4, 1.9);
camera.rotation.set(-0.9, -0.8, -0.8);

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(window.innerWidth, window.innerHeight);

let position = 0;

// gltf Loader
const gltfLoader = new GLTFLoader();
gltfLoader.load('/model/swedish-royal/scene.gltf', (gltf) => {
  console.log('Our model here!', gltf);
  const model = gltf.scene;
  scene.add(model);

  window.addEventListener('mouseup', function () {
    switch (position) {
      case 0:
        cameraMovement(-6.0, 1.72, 1.34);
        cameraRotation(-2.75, -1.24, -2.77);
        position = 1;
        break;

      case 1:
        cameraMovement(0.48, 2.09, -2.11);
        cameraRotation(-3.12, 0.22, 3.13);
        position = 2;
        break;

      

      

      case 2:
        // Rotate the camera 90 degrees horizontally
        gsap.to(camera.rotation, {
          y: camera.rotation.y + (Math.PI / 2), // Rotate 90 degrees
          duration: 3,
        });
        position = 3;
        break;

      case 3:
        // Rotate the camera another 90 degrees horizontally
        gsap.to(camera.rotation, {
          y: camera.rotation.y + (Math.PI / 2), // Rotate another 90 degrees
          duration: 3,
        });
        position = 4;
        break;

      case 4:
        // Rotate the camera another 90 degrees horizontally
        gsap.to(camera.rotation, {
          y: camera.rotation.y + (Math.PI / 2), // Rotate another 90 degrees
          duration: 3,
        });
        position = 5;
        break;

      case 5:
        // Rotate the camera another 90 degrees horizontally to complete the 360-degree view
        gsap.to(camera.rotation, {
          y: camera.rotation.y + (Math.PI / 2), // Rotate another 90 degrees
          duration: 6,
        });
        position = 0; // Reset position to loop through the gallery
        break;
       case 6:
         
    }
  });
});

// Functions to move and rotate the camera
function cameraMovement(x, y, z) {
  gsap.to(camera.position, {
    x,
    y,
    z,
    duration: 3,
  });
}

function cameraRotation(x, y, z) {
  gsap.to(camera.rotation, {
    x,
    y,
    z,
    duration: 3,
  });
}

// Animation and loop
const animate = () => {
  renderer.render(scene, camera);
};

renderer.setAnimationLoop(animate);

animate();
