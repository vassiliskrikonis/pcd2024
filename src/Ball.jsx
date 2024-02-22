import { Circle, Sphere } from "@react-three/drei";
import { useControls } from "leva";

export function Ball({
  half = false,
  castShadow = false,
  envMapIntensity,
  ...props
}) {
  const { color } = useControls("Ball", { color: "#9c3fb4" });
  return (
    <>
      <Sphere
        castShadow={castShadow}
        args={[
          0.2,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          half ? Math.PI / 2 : undefined,
        ]}
        {...props}
      >
        <meshStandardMaterial
          metalness={1}
          roughness={0.7}
          color={color}
          envMapIntensity={envMapIntensity}
        />
      </Sphere>
      {half ? (
        <Circle castShadow={castShadow} args={[0.2]} rotation-x={Math.PI / 2}>
          <meshStandardMaterial
            metalness={1}
            roughness={0.7}
            color={color}
            envMapIntensity={envMapIntensity}
          />
        </Circle>
      ) : null}
    </>
  );
}
