/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";

import modelPath from "./Computer.glb";
import { useGLTF } from "@react-three/drei";

export default function ComputerModel(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF(modelPath);
  return (
    <group ref={group} {...props} dispose={null}>
      <group
        position={[0.29, 3.1, 0.06]}
        rotation={[-Math.PI / 2, 0, -1.73]}
        scale={[0, 0, 0]}
      >
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[8.58, 13.85, 134]} rotation={[0, Math.PI / 2, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.MacBook_1_MacBook1_0.geometry}
              material={materials["MacBook.1"]}
            />
          </group>
        </group>
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={nodes.Cube.material}
        position={[2.83, 0.75, 0.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        material={nodes.Cube001.material}
        position={[2.82, 2.19, 0.42]}
        rotation={[0, 0.5, 0]}
        scale={[0.8, 0.69, 1.24]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002.geometry}
        material={nodes.Cube002.material}
        position={[-2.6, 0.47, -0.77]}
        rotation={[0, -0.42, 0]}
        scale={[0.82, 0.47, 1.56]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube003.geometry}
        material={nodes.Cube003.material}
        position={[-2.82, 2.6, -0.07]}
        rotation={[0, 0.5, 0]}
        scale={[0.32, 0.28, 0.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube004.geometry}
        material={nodes.Cube004.material}
        position={[-2.76, 1.63, -0.58]}
        rotation={[0, 0.5, 0]}
        scale={[0.8, 0.69, 1.24]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube005.geometry}
        material={nodes.Cube005.material}
        position={[-2.9, 2.6, -1.22]}
        rotation={[-Math.PI, 1.09, -Math.PI]}
        scale={[0.32, 0.28, 0.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Desk.geometry}
        material={nodes.Desk.material}
        position={[0.02, 2.93, -0.02]}
        rotation={[0, -0.29, 0]}
        scale={[3.32, -0.05, 1.31]}
      />
    </group>
  );
}

useGLTF.preload(modelPath);
