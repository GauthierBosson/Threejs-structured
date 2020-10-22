import { BoxBufferGeometry, Mesh, MeshStandardMaterial } from "three";

function createCube() {
  const geometry = new BoxBufferGeometry(2, 2, 2);

  const material = new MeshStandardMaterial({ color: "purple" });

  const cube = new Mesh(geometry, material);

  /**
   * POUR LES ROTATIONS
   * L'unité des rotatios est en radians
   * utiliser degToRad pour convertir des deg en rad
   * const rotatex = MathUtils.degToRad(90)
   */
  cube.rotation.set(-0.5, -0.1, 0.8);

  return cube;
}

export { createCube };
