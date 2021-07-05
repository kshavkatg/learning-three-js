import createCamera from "./components/camera.js";
import createCube from "./components/cube.js";
import createScene from "./components/scene.js";
import createRenderer from "./systems/renderer.js";
import Resizer from "./systems/Resizer.js";
import createLights from "./components/lights.js";
import Loop from "./systems/Loop.js"

// module scooped variables
let camera;
let renderer;
let scene;
let loop;

export class World {
  constructor(container) {
    camera = createCamera();
    scene = createScene();
    renderer = createRenderer();
    loop = new Loop(camera, scene, renderer)
    container.append(renderer.domElement)

    const cubes = createCube();
    const light = createLights();

    loop.updatables.push(cubes, camera)

    scene.add(cubes, light);

    const resizer = new Resizer(container, camera, renderer);
  }

  render() {
    renderer.render(scene, camera)
  }

  start() {
    loop.start()
  }

  stop() {
    loop.stop()
  }
}