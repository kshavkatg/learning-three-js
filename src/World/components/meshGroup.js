import { 
  Group, 
  SphereBufferGeometry, 
  Mesh, 
  MeshStandardMaterial,
  MathUtils,
  TextureLoader
} from 'https://unpkg.com/three@0.127.0/build/three.module.js';

function createMaterial() {
  const textureLoader = new TextureLoader();

  const texture = textureLoader.load(
    '/assets/textures/uv-test-col.png',
  )
  console.log(texture)
  const material = new MeshStandardMaterial({ map: texture })

  return material
}

export default function createMeshGroup() {
  const group = new Group();

  const geometry = new SphereBufferGeometry( 0.05, 16, 16 )
  const material = new MeshStandardMaterial({
    color: 'indigo',
  });

  const protoSphere = new Mesh(geometry, material)

  for (let i = 0; i < 1; i += 0.05) {
    const sphere = protoSphere.clone();

    // position the spheres on around a circle
    sphere.position.x = Math.cos(2 * Math.PI * i);
    sphere.position.y = Math.sin(2 * Math.PI * i);
    sphere.position.z = i * -5;
    group.add(sphere);
  }

  group.scale.multiplyScalar(2);

  const radiansPerSecond = MathUtils.degToRad(60);

  group.tick = (delta) => {
    group.rotation.z += delta * radiansPerSecond;
  }

  return group;
}