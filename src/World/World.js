import createCamera from "./components/camera.js";
import createMeshGroup from "./components/meshGroup.js";
import createScene from "./components/scene.js";
import createRenderer from "./systems/renderer.js";
import createControls from "./systems/controls.js";
import Resizer from "./systems/Resizer.js";
import createLights from "./components/lights.js";
import Loop from "./systems/Loop.js"
import Train from "./components/Train/Train.js";
import loadBirds from "./components/birds/birds.js";

import {
  createAxesHelper,
  createGridHelper,
} from "./components/helpers.js";


// module scooped variables
let camera;
let renderer;
let scene;
let loop;
let controls;

export class World {
  constructor(container) {
    camera = createCamera();
    scene = createScene();
    renderer = createRenderer();
    controls = createControls(camera, renderer.domElement);
    loop = new Loop(camera, scene, renderer)
    container.append(renderer.domElement)

    const train = new Train();
    const {light, ambientLight} = createLights();

    loop.updatables.push(controls, train)

    scene.add(
      train,
      light, ambientLight, 
      createAxesHelper(), 
      createGridHelper()
      );

    const resizer = new Resizer(container, camera, renderer);
  }

  async init() {
    const { parrot, flamingo, stork } = await loadBirds();

    controls.target.copy(parrot.position);

    scene.add(parrot, flamingo, stork)
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