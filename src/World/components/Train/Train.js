import { Group, MathUtils } from 'https://unpkg.com/three@0.127.0/build/three.module.js';
import createMeshes from './meshes.js';

const wheelSpeed = MathUtils.degToRad(30)

export default class Train extends Group {
  constructor() {
    super();

    this.meshes = createMeshes();

    this.add(
      this.meshes.nose,
      this.meshes.cabin,
      this.meshes.chimney,
      this.meshes.wheel,
      this.meshes.smallWheelCenter,
      this.meshes.smallWheelFront,
      this.meshes.bigWheel,
    );
  }

  tick(delta) {
    this.meshes.bigWheel.rotation.y += wheelSpeed * delta;
    this.meshes.wheel.rotation.y += wheelSpeed * delta;
    this.meshes.smallWheelCenter.rotation.y += wheelSpeed * delta;
    this.meshes.smallWheelFront.rotation.y += wheelSpeed * delta;
  }
}