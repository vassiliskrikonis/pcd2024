import { useTexture } from "@react-three/drei";
import { useControls } from "leva";

export function Floor(props) {
  const map = useTexture("Textures/moss-300-mm-architextures_grid-01.jpeg");
  const controls = useControls("Floor", {
    environmentIntensity: 0.1,
  });

  return (
    <group {...props}>
      <mesh receiveShadow position-y={0} rotation-x={-Math.PI * 0.5} scale={30}>
        <planeGeometry />
        <meshStandardMaterial
          color="greenyellow"
          envMapIntensity={controls.environmentIntensity}
          map={map}
        />
      </mesh>
    </group>
  );
}
