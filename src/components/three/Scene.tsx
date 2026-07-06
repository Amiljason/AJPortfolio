import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import type { Mesh } from "three";
import Lights from "./Lights";
import FloatingParticles from "./FloatingParticles";
import FloatingObject from "./FloatingObject";
import CameraRig from "./CameraRig";



function Scene() {
  return (
    <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        dpr={[1, 2]}
    >
      <Lights />
      <FloatingParticles />

        <FloatingObject />
        <CameraRig />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={false}
        />
    </Canvas>
  );
}

export default Scene;