import { Circle, Sphere } from "@react-three/drei";

export function Ball({ half = false, castShadow = false, ...props }) {
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
        <meshStandardMaterial />
      </Sphere>
      {half ? (
        <Circle castShadow={castShadow} args={[0.2]} rotation-x={Math.PI / 2}>
          <meshStandardMaterial />
        </Circle>
      ) : null}
    </>
  );
}
