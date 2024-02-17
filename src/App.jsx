import { OrbitControls } from "@react-three/drei";
import { Arch } from "./Arch";
import { Column } from "./Column";
import { Ball } from "./Ball";

const App = () => (
  <>
    <color args={["ivory"]} attach="background" />
    <directionalLight castShadow position={[1, 2, 3]} intensity={4.5} />
    <ambientLight intensity={0.5} />

    <OrbitControls />
    <Arch />
    <Arch rotation-y={Math.PI/2} position-x={-2} />
    <Column />
    <Column position-y={0.4} />
    <Column position-z={0.4} />
    <Ball half />
    <Ball position-y={0.4} />
    <Ball position-y={0.8} />
    <Ball position-y={1.2} />
    <mesh receiveShadow position-y={-1} rotation-x={-Math.PI * 0.5} scale={20}>
      <planeGeometry />
      <meshStandardMaterial color="greenyellow" />
    </mesh>
  </>
);

export default App;
