import Scene from "./Scene";

function Background() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 opacity-40">
      <Scene />
    </div>
  );
}

export default Background;