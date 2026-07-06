import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function Scene() {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={1} />

      <mesh>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial wireframe />
      </mesh>

      <OrbitControls
        enableZoom={false}
        autoRotate
        autoRotateSpeed={1.5}
      />
    </Canvas>
  );
}

export default Scene;