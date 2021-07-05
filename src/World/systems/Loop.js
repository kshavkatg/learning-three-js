import { Clock } from 'https://unpkg.com/three@0.127.0/build/three.module.js';

const clock = new Clock();

export default class Loop {
  constructor(camera, scene, renderer) {
    this.camera = camera;
    this.scene = scene;
    this.renderer = renderer;
    this.updatables = [];
  }

  start() {
    this.renderer.setAnimationLoop(() => {
      // tell every animated object to tick forward one frame
      this.tick();

      this.renderer.render(this.scene, this.camera)
    })
  }

  stop() {
    this.setAnimationLoop(null)
  }

  tick() {
    const delta = clock.getDelta();

    for ( const object of this.updatables) {
      object.tick(delta);
    }
  }
}