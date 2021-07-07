import { GLTFLoader } from 'https://unpkg.com/three@0.127.0/examples/jsm/loaders/GLTFLoader.js';
import { setupModel } from './setupModel.js';

export default async function loadBirds() {
  const loader = new GLTFLoader();

  const [parrotData, flamingoData, storkData] = await Promise.all([
    loader.loadAsync('./assets/models/Parrot.glb'),
    loader.loadAsync('./assets/models/Flamingo.glb'),
    loader.loadAsync('./assets/models/Stork.glb'),
  ])

  console.log('Squaawk!', parrotData)

  const parrot = setupModel(parrotData);
  parrot.position.set(0, 0, 2.5)

  const flamingo = setupModel(flamingoData);
  flamingo.position.set(7.5, 0, -10)

  const stork = setupModel(storkData);
  stork.position.set(0, -2.5, -10)

  return {
    parrot,
    flamingo,
    stork,
  }
}