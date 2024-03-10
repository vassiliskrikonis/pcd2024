import { Box, useTexture } from "@react-three/drei";
import { useControls } from "leva";
import { RigidBody } from "@react-three/rapier";

export function Floor(props) {
  const map = useTexture("Textures/moss-300-mm-architextures_grid-01.jpeg");
  const controls = useControls("Floor", {
    environmentIntensity: 0.1,
  });

  return (
    <RigidBody position={[0, -1 - 0.001, 0]} type="fixed" {...props}>
      <Box receiveShadow args={[30, 2, 30]}>
        <meshStandardMaterial
          color="greenyellow"
          envMapIntensity={controls.environmentIntensity}
          map={map}
        />
      </Box>
    </RigidBody>
  );
}
