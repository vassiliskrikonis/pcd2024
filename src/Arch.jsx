import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

const material = new THREE.MeshStandardMaterial();

export function Arch({ castShadow = false, ...props }) {
  const { nodes } = useGLTF("./model.glb");
  const columnsMeshIds = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
  const roofMeshIds = ["18", "18_1", "18_2", "18_3", "18_4", "18_5"];

  return (
    <group {...props} dispose={null}>
      {columnsMeshIds.map((idx) => (
        <mesh
          key={'column' + idx}
          castShadow={castShadow}
          geometry={nodes[`mesh_${idx}`].geometry}
          material={material}
        />
      ))}
      {roofMeshIds.map((idx) => (
        <mesh
          key={'roof' + idx}
          castShadow={castShadow}
          geometry={nodes[`mesh_${idx}`].geometry}
          material={material}
        />
      ))}
    </group>
  );
}

useGLTF.preload("/model.glb");
