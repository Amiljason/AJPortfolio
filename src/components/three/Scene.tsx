import { Canvas } from "@react-three/fiber";
import Lights from "./Lights";
import FloatingParticles from "./FloatingParticles";
import FloatingObject from "./FloatingObject";
import CameraRig from "./CameraRig";
import Effects from "./Effects";



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
        <Effects />
    </Canvas>
  );
}

export default Scene;