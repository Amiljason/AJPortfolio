import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import type { Mesh } from "three";
import Lights from "./Lights";
import FloatingParticles from "./FloatingParticles";
import FloatingObject from "./FloatingObject";



function Scene() {
  return (
    <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        dpr={[1, 2]}
    >
      <Lights />
      <FloatingParticles />

        <FloatingObject />

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