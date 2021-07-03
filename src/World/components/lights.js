import { DirectionalLight, PointLight, SpotLight, RectAreaLight } from 'https://unpkg.com/three@0.127.0/build/three.module.js';

export default function createLights() {
  const light = new DirectionalLight('white', 8);

  light.position.set(10, 10, 10)


  return light;
}