import "./style.css"
import * as THREE from "three"


// DOM & sizes
const canvas = document.querySelector('.webgl');
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
};


//Create Three.js Scene
const scene = new THREE.Scene();


// Create Object
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: '#8FE4F4' })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)



//Create Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.set(0, 0, 5)


scene.add(camera)



// Renderer

const renderer = new THREE.WebGLRenderer({
    canvas: canvas
});

renderer.setSize(sizes.width, sizes.height);
renderer.setClearColor("#006868", .8)
renderer.render(scene, camera);


/**
 * Animate
 */

let time = Date.now();
console.log(`time:${time}`);


const tick = () => {

    const currentTime = Date.now();
    const deltaTime = currentTime - time;

    time = currentTime;


    // Update objects
    mesh.rotation.y += 0.01 * deltaTime;

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()