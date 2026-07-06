function Lights() {
  return (
    <>
      <ambientLight intensity={0.35} />

      <directionalLight
        position={[5, 5, 5]}
        intensity={2.5}
      />

      <pointLight
        position={[-4, 2, 4]}
        intensity={2}
        color="#60a5fa"
      />

      <pointLight
        position={[4, -2, 2]}
        intensity={1.5}
        color="#a855f7"
      />
    </>
  );
}

export default Lights;