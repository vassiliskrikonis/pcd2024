import { Environment, OrbitControls } from "@react-three/drei";
import { Arch } from "./Arch";
import { Column } from "./Column";
import { folder, useControls } from "leva";
import { Chain } from "./Chain";
import { Floor } from "./Floor";
import { useMemo, useRef } from "react";
import { toArray } from "./utils";
import { useThree } from "@react-three/fiber";

const Scene = () => {
  const controls = useControls("Environment", {
    ambientLight: 1.5,
    envMapIntensity: { value: 0.7, min: 0, max: 12 },
    floorSize: 30,
  });
  const directionalLightControls = useControls("Environment", {
    "Directional light": folder({
      intensity: 4.5,
      position: { x: 9, y: 11, z: 7 },
    }),
  });
  const { envMapIntensity } = controls;

  const arches = useMemo(
    () =>
      [
        { position: [3, 0, -6], rotation: [0, Math.PI / 4, 0], scale: 1 },
        { position: [0, 0, 5], rotation: [0, Math.PI / 2, 0], scale: 1 },
        {
          position: [-7.2, 0.6, 2.3],
          rotation: [0, 0, -Math.PI / 6],
          scale: 1,
        },
      ].map((props, i) => (
        <Arch key={i} envMapIntensity={envMapIntensity} castShadow {...props} />
      )),
    [envMapIntensity]
  );
  const columns = useMemo(
    () =>
      [
        { position: [-7.7, 0, -7], rotation: [0, 0, 0], scale: 1 },
        { position: [-6.4, 0, -8.3], rotation: [0, 0, 0], scale: [1, 1.3, 1] },
        { position: [-4, 0, -6.5], rotation: [0, 0, 0], scale: [1, 0.5, 1] },
        { position: [0, 0, 5], rotation: [0, 0, 0], scale: [1, 1, 1] },
      ].map((props, i) => (
        <Column
          key={i}
          envMapIntensity={envMapIntensity}
          castShadow
          {...props}
        />
      )),
    [envMapIntensity]
  );
  const chains = useMemo(
    () =>
      [
        { position: [2, 0, -5], rotation: [0, 0, 0], scale: 1 },
        { position: [4, 0, 0.6], rotation: [0, 0, 0], scale: 1 },
      ].map((props, i) => (
        <Chain
          key={i}
          radius={0.4}
          envMapIntensity={envMapIntensity}
          castShadow
          {...props}
        />
      )),
    [envMapIntensity]
  );

  const cameraControls = useControls("Camera", {
    position: {
      x: 0.1,
      y: 2.5,
      z: 2.9,
    },
    target: { x: 0, y: 1.7, z: 0 },
    maxDistance: 28,
  });
  const orbitControls = useRef();
  useThree(({ camera }) => {
    camera.position.copy(cameraControls.position);
    if (orbitControls.current) {
      orbitControls.current.target.copy(cameraControls.target);
    }
  });

  return (
    <>
      <OrbitControls
        ref={orbitControls}
        makeDefault
        maxDistance={cameraControls.maxDistance}
      />
      <Environment
        ground={{ height: 0, radius: 28, scale: 100 }}
        files={"./kloofendal_48d_partly_cloudy_puresky_2k.hdr"}
      />
      <directionalLight
        castShadow
        position={toArray(directionalLightControls.position)}
        intensity={directionalLightControls.intensity}
        shadow-camera-top={7}
      />

      {arches}
      {columns}
      {chains}
      <Floor />
    </>
  );
};

export default Scene;
