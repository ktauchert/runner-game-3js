import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import Box from "./geometries/Box";

let window_width = window.innerWidth;
let window_height = window.innerHeight;

// needed: scene, camera, renderer

// SCENE
const scene = new THREE.Scene();

// CAMERA
const camera = new THREE.PerspectiveCamera(
  75,
  window_width / window_height,
  0.1,
  1000
);
camera.position.z = 5;
camera.position.y = 2;
camera.position.x = 2;

camera.lookAt(0, 0, 0);

// LIGHT
const light = new THREE.DirectionalLight(0xffffdd, 10);
light.position.z = 2;
light.position.y = 5;
light.position.x = -2;
light.castShadow = true;
scene.add(light);

// RENDERER
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.shadowMap.enabled = true;
renderer.setSize(window_width, window_height);

document.body.appendChild(renderer.domElement);

const orbitControls = new OrbitControls(camera, renderer.domElement);

const cube = new Box([1, 1, 1], [0, 0, 0], "standard");
cube.setShadow();
scene.add(cube.mesh);

const plane = new Box([10, 0.2, 40], [0, -1.01, 0], "standard", 0x0000ff);
plane.setShadow(["receive"]);
scene.add(plane.mesh);

// ANIMATION
function animate() {
  requestAnimationFrame(animate);

  // animate Cube
  cube.rotateX();
  cube.rotateY();

  renderer.render(scene, camera);
}

animate();
/**
 * Functions
 */
const onWindowResize = () => {
  console.log("resizing");
  window_width = window.innerWidth;
  window_height = window.innerHeight;
};

document.addEventListener("resize", onWindowResize);
