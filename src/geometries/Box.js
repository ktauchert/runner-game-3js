import {
  BoxGeometry,
  Mesh,
  MeshBasicMaterial,
  MeshStandardMaterial,
} from "three";

class Box {
  #geometry;
  #material;
  mesh;

  constructor(
    [width, height, depth],
    [x, y, z],
    material = "basic",
    color = 0x00ff00
  ) {
    this.height = height;
    this.width = width;
    this.depth = depth;

    this.material = material;
    this.color = color;

    this.#geometry = new BoxGeometry(this.width, this.height, this.depth);

    if (this.material === "basic") {
      this.#material = new MeshBasicMaterial({ color });
    }
    if (this.material === "standard") {
      this.#material = new MeshStandardMaterial({ color });
    }

    this.mesh = new Mesh(this.#geometry, this.#material);

    this.setPositionX(x);
    this.setPositionY(y);
    this.setPositionZ(z);
  }

  setShadow = (args = ['cast', 'receive']) => {
    this.mesh.castShadow = args.includes('cast');
    this.mesh.receiveShadow = args.includes('receive');
  }

  rotateX = (rotate_x = 0.01) => {
    this.mesh.rotation.x += rotate_x;
  };
  rotateY = (rotate_y = 0.01) => {
    this.mesh.rotation.y += rotate_y;
  };
  rotateZ = (rotate_z = 0.01) => {
    this.mesh.rotation.z += rotate_z;
  };

  setPositionX = (x) => {
    this.x = x;
    this.mesh.position.x = x;
  };
  setPositionY = (y) => {
    this.y = y;
    this.mesh.position.y = y;
  };
  setPositionZ = (z) => {
    this.z = z;
    this.mesh.position.z = z;
  };
  setHeight = (height) => {
    this.height = height;
  };
  setWidth = (width) => {
    this.width = width;
  };
  setDepth = (depth) => {
    this.depth = depth;
  };
}

export default Box;
