import { Mesh } from 'https://unpkg.com/three@0.127.0/build/three.module.js';
import createGeometries from './geometries.js';
import createMaterials from './materials.js';

export default function createMeshes() {
  const geometries = createGeometries();
  const materials = createMaterials();

  const cabin = new Mesh(geometries.cabin, materials.body)
  cabin.position.set(1.5, 1.4, 0)

  const chimney = new Mesh(geometries.chimney, materials.detail)
  chimney.position.set(-2, 1.9, 0);

  const nose = new Mesh(geometries.nose, materials.body)
  nose.position.set(-1, 1, 0);
  nose.rotation.z = Math.PI / 2;

  const wheel = new Mesh(geometries.wheel, materials.detail)
  wheel.position.y = 0.5;
  wheel.rotation.x = Math.PI / 2;

  const smallWheelCenter = wheel.clone();
  smallWheelCenter.position.x = -1;

  const smallWheelFront = wheel.clone();
  smallWheelFront.position.x = -2;

  const bigWheel = wheel.clone();
  bigWheel.scale.set(2, 1.25, 2)
  bigWheel.position.set(1.5, 0.9, 0)

  return {
    cabin,
    chimney,
    nose,
    wheel,
    smallWheelCenter,
    smallWheelFront,
    bigWheel,
  }
}