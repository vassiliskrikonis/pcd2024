import { Circle, Sphere } from "@react-three/drei";
import { useControls } from "leva";
import { RigidBody } from "@react-three/rapier";
import { forwardRef, useCallback, useEffect } from "react";

export const Ball = forwardRef(function Ball(
  { radius = 0.2, half = false, castShadow = false, envMapIntensity, ...props },
  ref
) {
  const { color } = useControls("Ball", { color: "#9c3fb4" });
  useEffect(() => {
    // ref.current.sleep();
  }, [ref]);
  const onClick = useCallback(() => {
    const mass = ref.current.mass();
    const strength = 15;
    ref.current.applyImpulse(
      {
        x: Math.random() * mass * strength,
        y: Math.random() * mass * strength,
        z: Math.random() * mass * strength,
      },
      true
    );
  }, [ref]);

  return (
    <>
      <RigidBody ref={ref} colliders={half ? "hull" : "ball"} {...props}>
        <Sphere
          castShadow={castShadow}
          args={[
            radius,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            half ? Math.PI / 2 : undefined,
          ]}
          onClick={onClick}
        >
          <meshStandardMaterial
            metalness={1}
            roughness={0.7}
            color={color}
            envMapIntensity={envMapIntensity}
          />
        </Sphere>
        {half ? (
          <Circle
            castShadow={castShadow}
            args={[radius]}
            rotation-x={Math.PI / 2}
            onClick={onClick}
          >
            <meshStandardMaterial
              metalness={1}
              roughness={0.7}
              color={color}
              envMapIntensity={envMapIntensity}
            />
          </Circle>
        ) : null}
      </RigidBody>
    </>
  );
});
