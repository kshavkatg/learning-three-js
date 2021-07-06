import { 
  DirectionalLight,
  AmbientLight,
  HemisphereLight
 } from 'https://unpkg.com/three@0.127.0/build/three.module.js';

export default function createLights() {
  const ambientLight = new  HemisphereLight(
  'white', // bright sky color
  'darkslategrey', // dim ground color
  5, // intensity
);

  const light = new DirectionalLight('white', 8);

  light.position.set(10, 10, 10)


  return {light, ambientLight};
}