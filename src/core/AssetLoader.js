import * as THREE from 'three';

const TEXTURE_MANIFEST = {
  chickenFly1: 'sprites/T_Char_Chicken_Flying1.png',
  chickenFly2: 'sprites/T_Char_Chicken_Flying2.png',
  egg: 'sprites/T_Egg_Static_01.png',
};

const textures = {};

export const AssetLoader = {
  async loadAll() {
    const loader = new THREE.TextureLoader();
    const entries = Object.entries(TEXTURE_MANIFEST);

    await Promise.all(
      entries.map(
        ([key, path]) =>
          new Promise((resolve, reject) => {
            loader.load(
              path,
              (tex) => {
                tex.minFilter = THREE.LinearFilter;
                tex.magFilter = THREE.LinearFilter;
                tex.colorSpace = THREE.SRGBColorSpace;
                textures[key] = tex;
                resolve();
              },
              undefined,
              reject,
            );
          }),
      ),
    );

    return textures;
  },

  get(key) {
    return textures[key];
  },

  textures,
};
