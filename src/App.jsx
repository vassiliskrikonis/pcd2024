import {
  AccumulativeShadows,
  Environment,
  OrbitControls,
  RandomizedLight,
  useTexture,
} from "@react-three/drei";
import { Arch } from "./Arch";
import { Column } from "./Column";
import { Ball } from "./Ball";
import { useControls } from "leva";
import { useThree } from "@react-three/fiber";

const App = () => {
  const values = useControls({ scaleY: 5 });
  const map = useTexture("Textures/moss-300-mm-architextures_grid-01.jpeg");

  const controls = useControls("Environment", {
    directionalLight: 4.5,
    ambientLight: 0.5,
    envMapIntensity: { value: 0.7, min: 0, max: 12 },
  });
  const { envMapIntensity } = controls;

  return (
    <>
      <Environment
        ground={{ height: 0, radius: 28, scale: 100 }}
        files={"kloofendal_48d_partly_cloudy_puresky_2k.exr"}
      />

      <OrbitControls makeDefault />

      <Arch envMapIntensity={envMapIntensity} castShadow />
      <Arch
        envMapIntensity={envMapIntensity}
        castShadow
        rotation-y={Math.PI / 2}
        position-x={-2}
      />
      <Arch
        envMapIntensity={envMapIntensity}
        castShadow
        rotation-y={Math.PI / 4}
        position-y={-2}
      />
      {/* <Arch rotation-y={Math.PI / 4}  rotation-z={3*Math.PI/4} position-y={1} position-z={3} /> */}
      <Column
        envMapIntensity={envMapIntensity}
        castShadow
        scale={[5, 6, 5]}
        position-z={-1.7}
      />
      <Column envMapIntensity={envMapIntensity} castShadow />
      <Column envMapIntensity={envMapIntensity} castShadow position-z={0.4} />
      <Ball envMapIntensity={envMapIntensity} castShadow half />
      <Ball envMapIntensity={envMapIntensity} castShadow position-y={0.4} />
      <Ball envMapIntensity={envMapIntensity} castShadow position-y={0.8} />
      <Ball envMapIntensity={envMapIntensity} castShadow position-y={1.2} />
      <AccumulativeShadows
        position-y={0.01}
        scale={30}
        color="#316d39"
        opacity={0.8}
      >
        <RandomizedLight
          position={[1, 2, 3]}
          amount={8}
          radius={1}
          ambient={0.5}
          intensity={3}
          bias={0.001}
        />
      </AccumulativeShadows>

      <mesh receiveShadow position-y={0} rotation-x={-Math.PI * 0.5} scale={30}>
        <planeGeometry />
        <meshStandardMaterial color="greenyellow" map={map} />
      </mesh>
    </>
  );
};

export default App;
