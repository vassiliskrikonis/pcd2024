import { useGLTF, useTexture } from "@react-three/drei";
import { folder, useControls } from "leva";
import { useEffect, useMemo } from "react";
import * as THREE from "three";

export function Arch({ castShadow = false, ...props }) {
  const { nodes } = useGLTF("./model.glb");
  const columnsMeshIds = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
  const roofMeshIds = ["18", "18_1", "18_2", "18_3", "18_4", "18_5"];

  const controls = useControls(
    "Arch",
    {
      texture: folder({ offset: { x: 0, y: 1 } }),
      roofMetalness: { value: 1, min: 0, max: 1 },
      roofRoughness: { value: 0.4, min: 0, max: 1 },
      columnColor: "#ffef00",
      columnMetalness: { value: 1, min: 0, max: 1 },
      columnRoughness: { value: 0.3, min: 0, max: 1 },
    },
    { collapsed: true }
  );
  const texture = useTexture(
    "./Textures/Screenshot 2023-12-11 at 21.22.50.png"
  );
  const roofMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial(
        {
          metalness: controls.roofMetalness,
          roughness: controls.roofRoughness,
          map: texture,
        },
        [controls, texture]
      )
  );
  const columnMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        metalness: controls.columnMetalness,
        roughness: controls.columnRoughness,
        color: controls.columnColor,
        envMapIntensity: controls.envMapIntensity,
      }),
    [controls]
  );

  useEffect(() => {
    texture.offset.set(controls.offset.x, controls.offset.y);
  }, [texture, controls]);

  return (
    <group {...props} dispose={null}>
      {columnsMeshIds.map((idx) => (
        <mesh
          key={"column" + idx}
          castShadow={castShadow}
          geometry={nodes[`mesh_${idx}`].geometry}
          material={columnMaterial}
        />
      ))}
      {roofMeshIds.map((idx) => (
        <mesh
          key={"roof" + idx}
          castShadow={castShadow}
          geometry={nodes[`mesh_${idx}`].geometry}
          material={roofMaterial}
        />
      ))}
    </group>
  );
}
