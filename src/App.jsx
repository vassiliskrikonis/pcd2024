import { Environment, OrbitControls, useHelper } from "@react-three/drei";
import { Arch } from "./Arch";
import { Column } from "./Column";
import { folder, useControls } from "leva";
import { Chain } from "./Chain";
import { Floor } from "./Floor";
import { useRef } from "react";
import * as THREE from "three";
import { toArray } from "./utils";

const App = () => {
  const controls = useControls("Environment", {
    ambientLight: 1.5,
    envMapIntensity: { value: 0.7, min: 0, max: 12 },
  });
  const directionalLightControls = useControls("Environment", {
    "Directional light": folder({
      intensity: 4.5,
      position: { x: 9, y: 11, z: 7 },
    }),
  });
  const { envMapIntensity } = controls;
  const directionalLight = useRef();
  useHelper(directionalLight, THREE.DirectionalLightHelper);

  return (
    <>
      <Environment
        ground={{ height: 0, radius: 28, scale: 100 }}
        files={"kloofendal_48d_partly_cloudy_puresky_2k.exr"}
      />
      <directionalLight
        ref={directionalLight}
        castShadow
        position={toArray(directionalLightControls.position)}
        intensity={directionalLightControls.intensity}
        shadow-camera-top={7}
      />

      <OrbitControls makeDefault />

      <Arch envMapIntensity={envMapIntensity} castShadow position-x={2} />
      <Arch
        envMapIntensity={envMapIntensity}
        castShadow
        rotation-y={Math.PI / 2}
        position-x={-3}
      />
      {/* <Arch
        envMapIntensity={envMapIntensity}
        castShadow
        rotation-y={Math.PI / 4}
        position-y={-2}
      /> */}
      {/* <Arch rotation-y={Math.PI / 4}  rotation-z={3*Math.PI/4} position-y={1} position-z={3} /> */}
      <Column envMapIntensity={envMapIntensity} castShadow position-x={-3} />
      <Chain radius={0.4} position-z={2} castShadow />
      <Floor />
    </>
  );
};

export default App;
