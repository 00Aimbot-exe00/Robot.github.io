import { LIGHT_NODE_NAMES, GRAY, BLACK } from "./DualSense.data";
import { SetMaterialsColor, SceneNode } from "./DualSense.types";

export const setMaterialsColor: SetMaterialsColor = (scene) => {
  scene.traverse((child) => {
    const node = child as SceneNode;

    if (node.material) {
      if (LIGHT_NODE_NAMES.includes(node.material.name)) {
        node.material.color.set(GRAY);
      } else {
        node.material.color.set(BLACK);
      }
    }
  });
};
