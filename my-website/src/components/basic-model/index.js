import "./Basic-Model.css";

import { Canvas } from "@react-three/fiber";
import { useRef } from "react";

const BasicModel = () => {
  const myMesh = useRef();

  return (
    <Canvas>
      <mesh rotation={[2, 3, 1]} onClick={() => alert("Hellooo")} ref={myMesh}>
        <boxGeometry arg={[2, 2, 2]} />
        <meshPhongMaterial />
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} />
      </mesh>
    </Canvas>
  );
};

export default BasicModel;
