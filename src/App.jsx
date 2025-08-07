import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";

function Model() {
  const { scene } = useGLTF("/m1.glb");

  // Adjust the scale of the model
  scene.scale.set(15, 15, 15);

  // Adjust the position of the model
  scene.position.set(0, -1, 0);

  // Adjust the rotation of the model
  // scene.rotation.set(0, Math.PI / 2, 0);

  // Adjust the model's bounding box
  // scene.boundingBox = {
  //   min: { x: -1, y: -1, z: -1 },
  //   max: { x: 1, y: 1, z: 1 }
  // };

  // Adjust the model's center
  // scene.center = { x: 0, y: 0, z: 0 };

  // Adjust the model's position to center it
  // scene.position.set(0, -1, 0);

  // Adjust the model's rotation
  scene.rotation.set(0, Math.PI / 25, 0);

  // Adjust the model's scale
  // scene.scale.set(15, 15, 15);

  // Adjust the model's bounding box
  // scene.boundingBox = {
  //   min: { x: -1, y: -1, z: -1 },
  //   max: { x: 1, y: 1, z: 1 }
  // };

  // Adjust the model's center
  // scene.center = { x: 0, y: 0, z: 0 };


  return <primitive object={scene} />;
}

function App() {
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems:'center', padding: '10px 50px', gap: '10px',height: '96vh'}}>

        <div style={{ height: "80vh", width: "30vw", backgroundColor: '#f7f6f6ff', display: 'flex', justifyContent:'center', textAlign:'center', border: '1px solid #ccc', borderRadius: '8px' }}>
          <h1>My 3D Model</h1>
        </div>

        <div style={{ height: "80vh", width: "70vw", border: '1px solid #ccc', backgroundColor: '#ffffffff', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '8px' }}>
          <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
            <ambientLight intensity={0.1} />
            <directionalLight intensity={0.5} position={[9, 9, 9]} />
            <pointLight intensity={0.5} position={[-5, -5, -5]} />
            <spotLight intensity={0.5} position={[0, 5, 0]} angle={Math.PI / 4} penumbra={1} />
            <Suspense fallback={null}>
              <Model />
              <Environment preset="sunset" />
            </Suspense>
            <OrbitControls />
          </Canvas>
        </div>

      </div>
    </>
  );
}

export default App;