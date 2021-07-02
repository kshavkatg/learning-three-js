import { BoxBufferGeometry, Mesh, MeshBasicMaterial } from 'https://unpkg.com/three@0.127.0/build/three.module.js';

export default function createCube() {
  const geometry = new BoxBufferGeometry(2, 2, 2);

  const material = new MeshBasicMaterial();

  const cube = new Mesh(geometry, material)

  return cube;
}