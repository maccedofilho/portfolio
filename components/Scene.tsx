import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { MeshDistortMaterial, Sphere, Float, Environment } from '@react-three/drei';
import * as THREE from 'three';

const AnimatedSphere = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const { viewport } = useThree();
  
  const isDesktop = viewport.width > 6;

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Float 
      speed={2} 
      rotationIntensity={1.5} 
      floatIntensity={2} 
      position={[isDesktop ? 2.5 : 0, 0, 0]}
    >
      <Sphere ref={meshRef} args={[1, 100, 200]} scale={2.4}>
        <MeshDistortMaterial
          color="#5b21b6"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
};

const SceneLoader = () => (
  <div className="w-full h-full flex items-center justify-center">
    <div className="w-16 h-16 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin" />
  </div>
);

const Scene: React.FC = () => {
  return (
    <div className="w-full h-full absolute inset-0 z-0">
      <Suspense fallback={<SceneLoader />}>
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }} className="w-full h-full">
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#a855f7" />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#3b82f6" />
          
          <AnimatedSphere />
          
          <Environment preset="city" />
        </Canvas>
      </Suspense>
    </div>
  );
};

export default Scene;