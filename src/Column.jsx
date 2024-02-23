import { useGLTF } from "@react-three/drei";
import { useControls } from "leva";
import { useMemo } from "react";
import * as THREE from "three";

export function Column({ castShadow = false, envMapIntensity, ...props }) {
  const { nodes } = useGLTF("./model.glb");
  const controls = useControls("Column", {
    color: "#2725ff",
  });

  const material = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: controls.color,
        envMapIntensity,
      }),
    [controls, envMapIntensity]
  );

  const meshes = Array.from({ length: 50 }, (_, index) => (
    <mesh
      key={index}
      castShadow={castShadow}
      geometry={nodes[index ? `mesh_3_${index}` : "mesh_3"].geometry}
      material={material}
    />
  ));

  return (
    <group {...props} dispose={null}>
      {meshes}
    </group>
  );
}
