import { MeshStandardMaterial } from 'https://unpkg.com/three@0.127.0/build/three.module.js';

export default function createMaterials() {
  const body = new MeshStandardMaterial({
    color: 'firebrick',
    flatShading: true,
  })

  const detail = new MeshStandardMaterial({
    color: 'darkslategray',
    flatShading: true,
  })

  return { body, detail }
}