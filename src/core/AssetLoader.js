import * as THREE from 'three';

const TEXTURE_MANIFEST = {
  chickenFly1: 'sprites/T_Char_Chicken_Flying1.png',
  chickenFly2: 'sprites/T_Char_Chicken_Flying2.png',
  egg: 'sprites/T_Egg_Static_01.png',
  cloudLarge: 'sprites/T_Env_Cloud_Large.png',
  cloudMedium: 'sprites/T_Env_Cloud_Medium.png',
  cloudSmall: 'sprites/T_Env_Cloud_Small.png',
  mountainsNear: 'sprites/T_Env_Mountains_Near.png',
  mountainsFar: 'sprites/T_Env_Mountains_Far.png',
  grass01: 'sprites/T_Env_Grass_01.png',
  bush01: 'sprites/T_Env_Bush_01.png',
  hut01: 'sprites/T_Env_Hut_01.png',
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
