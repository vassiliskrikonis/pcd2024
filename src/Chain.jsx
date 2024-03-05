import { Ball } from "./Ball";

export function Chain({ envMapIntensity, ...props }) {
  return (
    <group {...props}>
      <Ball envMapIntensity={envMapIntensity} castShadow half />
      <Ball envMapIntensity={envMapIntensity} castShadow position-y={0.4} />
      <Ball envMapIntensity={envMapIntensity} castShadow position-y={0.8} />
      <Ball envMapIntensity={envMapIntensity} castShadow position-y={1.2} />
    </group>
  );
}
