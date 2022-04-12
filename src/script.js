import "./style.css"
import * as THREE from "three"
import gsap from "gsap"

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

const clock = new THREE.Clock();


const tick = () => {

    const elapsedTime = clock.getElapsedTime();

    // Update objects
    // mesh.rotation.y = elapsedTime;

    // Update objects
    // mesh.position.x = Math.cos(elapsedTime)
    // mesh.position.y = Math.sin(elapsedTime)

    // Update objects
    // camera.position.x = Math.cos(elapsedTime)
    // camera.position.y = Math.sin(elapsedTime)
    // camera.lookAt(mesh.position)


    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}



// tick()

gsap.to(mesh.position, { duration: 1, delay: 1, y: 2, yoyo: true, repeat: -1 })
    // gsap.to(mesh.position, { duration: 1, delay: 2, x: 0, repeat: -1 })
const tick2 = () => {
    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick2)
}

tick2()