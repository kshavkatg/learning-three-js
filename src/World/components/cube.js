import { Group, BoxBufferGeometry, Mesh, MeshStandardMaterial } from 'https://unpkg.com/three@0.127.0/build/three.module.js';

export default function createCube() {
  const geometry = new BoxBufferGeometry( 2, 2, 2 )

  const material = new MeshStandardMaterial({color: 'purple'});

  const cube = new Mesh(geometry, material)
  cube.position.set(1, 1, 0)
  const cube2 = new Mesh(geometry, material)
  cube2.position.set(-1, -1, 0)


  const group = new Group();
  group.add(cube)
  group.add(cube2)
  group.rotation.set(-0.5, -0.1, 0.8)

  group.tick = () => {
    // increase the cube's rotation each frame
    group.rotation.z += 0.01;
    group.rotation.x += 0.01;
    group.rotation.y += 0.01;
  }

  return group;
}