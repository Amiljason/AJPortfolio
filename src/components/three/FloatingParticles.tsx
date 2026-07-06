import { Points, PointMaterial } from "@react-three/drei";

function FloatingParticles() {
  const positions = new Float32Array(500 * 3);

  for (let i = 0; i < positions.length; i++) {
    positions[i] = (Math.random() - 0.5) * 10;
  }

  return (
    <Points positions={positions} stride={3}>
      <PointMaterial
        transparent
        size={0.03}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  );
}

export default FloatingParticles;