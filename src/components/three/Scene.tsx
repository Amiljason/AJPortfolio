import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import type { Mesh } from "three";
import { Float } from "@react-three/drei";
import Lights from "./Lights";

function FloatingShape() {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;

    meshRef.current.rotation.x += 0.003;
    meshRef.current.rotation.y += 0.005;
    meshRef.current.position.y =
      Math.sin(state.clock.elapsedTime) * 0.2;
  });

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[1, 1]} />
      <meshStandardMaterial wireframe />
    </mesh>
  );
}

function Scene() {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <Lights />

        <Float
            speed={2}
            rotationIntensity={1}
            floatIntensity={2}
        >
        <FloatingShape />
        </Float>

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
      />
    </Canvas>
  );
}

export default Scene;