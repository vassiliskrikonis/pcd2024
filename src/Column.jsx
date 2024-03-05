import { useGLTF } from "@react-three/drei";
import { useControls } from "leva";
import { useMemo } from "react";
import * as THREE from "three";

export function Column({ castShadow = false, envMapIntensity, ...props }) {
  const { nodes } = useGLTF("/column.glb");
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

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow={castShadow}
        geometry={nodes.Mesh_29.geometry}
        material={material}
      />
    </group>
  );
}

useGLTF.preload("/column.glb");
