import "./style.css"
import * as THREE from "three"
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

// DOM & sizes
const canvas = document.querySelector('.webgl');
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
};

// cursor 

const cursor = {
    x: 0,
    y: 0
};

window.addEventListener('mousemove', (e) => {
    cursor.x = e.clientX / sizes.width - 0.5;
    cursor.y = -(e.clientY / sizes.height - 0.5);
})


//Create Three.js Scene
const scene = new THREE.Scene();


// Create Object
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: '#8FE4F4' })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)


//Create Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.set(0, 0, 4)


scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true


// Renderer

const renderer = new THREE.WebGLRenderer({
    canvas: canvas
});

renderer.setSize(sizes.width, sizes.height);
renderer.setClearColor("#006868", .8);
renderer.render(scene, camera);


//Animate


const clock = new THREE.Clock();


const tick = () => {

    const elapsedTime = clock.getElapsedTime();

    // Update objects
    mesh.rotation.y = elapsedTime;


    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}



tick()