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



const cylinder = new THREE.Mesh(geometry, material);
scene.add(cylinder);



//Create Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 5;

scene.add(camera)


// Renderer

const renderer = new THREE.WebGLRenderer({
    canvas: canvas
});

renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);