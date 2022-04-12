import "./style.css"
import * as THREE from "three"

// DOM & sizes
const canvas = document.querySelector('.webgl');
const sizes = {
    width: 800,
    height: 600
};


//Create Three.js Scene
const scene = new THREE.Scene();


// Create Object

const geometry = new THREE.CylinderGeometry(1, 1, 1, 32);
const material = new THREE.MeshBasicMaterial({
    color: '#8FE4F4'
});



const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

mesh.position.x = 1;
mesh.position.y = 2;
mesh.position.z = -2;

mesh.rotation.x = Math.PI * 0.25;
mesh.rotation.y = Math.PI * 0.25;


//Create Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;

scene.add(camera)

console.log(mesh.position.length())
console.log(mesh.position.distanceTo(camera.position))
console.log(mesh.position.normalize())

/**
 * Axes Helper
 */
const axesHelper = new THREE.AxesHelper(3)
scene.add(axesHelper)

// Renderer

const renderer = new THREE.WebGLRenderer({
    canvas: canvas
});

renderer.setSize(sizes.width, sizes.height);
renderer.setClearColor("#006868", .8)
renderer.render(scene, camera);