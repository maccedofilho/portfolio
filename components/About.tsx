import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Environment, Sphere } from '@react-three/drei';
import * as THREE from 'three';
import { useLanguage } from '../context/LanguageContext';

const CanvasLoader = () => (
  <div className="w-full h-full flex items-center justify-center bg-neutral-950">
    <div className="w-16 h-16 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin" />
  </div>
);


const CleanAvatar = () => {
  const groupRef = useRef<THREE.Group>(null);
  const eyesRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current || !eyesRef.current) return;

    const { x, y } = state.pointer;
    
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -y * 0.2, 0.1);
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, x * 0.2, 0.1);

    eyesRef.current.position.x = THREE.MathUtils.lerp(eyesRef.current.position.x, x * 0.15, 0.1);
    eyesRef.current.position.y = THREE.MathUtils.lerp(eyesRef.current.position.y, (y * 0.15) + 0.1, 0.1);
  });

  return (
    <Float 
      speed={2.5} 
      rotationIntensity={0.2} 
      floatIntensity={0.5} 
      floatingRange={[-0.1, 0.1]}
    > 
      <group ref={groupRef} scale={1.2}>
        
        <Sphere args={[1, 64, 64]}>
          <MeshDistortMaterial
            color="#e5e5e5"
            roughness={0.2}
            metalness={0.1}
            distort={0.3}
            speed={2}
          />
        </Sphere>

        <group ref={eyesRef} position={[0, 0.1, 1.02]}>
           <mesh position={[-0.35, 0, 0]}>
             <sphereGeometry args={[0.08, 32, 32]} />
             <meshStandardMaterial color="#111" roughness={0} />
           </mesh>
           
           <mesh position={[0.35, 0, 0]}>
             <sphereGeometry args={[0.08, 32, 32]} />
             <meshStandardMaterial color="#111" roughness={0} />
           </mesh>
        </group>

        <mesh rotation={[1, 0.5, 0]} scale={1.4}>
          <torusGeometry args={[1, 0.02, 16, 100]} />
          <meshStandardMaterial color="#fff" roughness={0.1} />
        </mesh>

        <mesh rotation={[-0.5, 0, 0]} scale={1.8}>
          <torusGeometry args={[1, 0.015, 16, 100]} />
          <meshStandardMaterial color="#333" roughness={0.2} />
        </mesh>

      </group>
    </Float>
  );
};

const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="relative h-screen bg-neutral-950 text-white overflow-hidden flex flex-col md:flex-row items-center justify-center scroll-mt-20">
      
      <div className="absolute top-20 left-0 w-full z-10 px-6 text-center pointer-events-none md:pointer-events-auto">
         <h2 className="text-sm font-mono text-gray-400 mb-2 tracking-widest uppercase">{t('about.subtitle')}</h2>
         <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
           {t('about.title')} <span className="text-purple-400">{t('about.title.span')}</span>
         </h3>
         <p className="text-gray-400 max-w-lg mx-auto text-sm md:text-base leading-relaxed">
           {t('about.desc')}
         </p>
      </div>

      <div className="absolute inset-0 z-0 w-full h-full">
        <Suspense fallback={<CanvasLoader />}>
          <Canvas camera={{ position: [0, 0, 6], fov: 45 }} dpr={[1, 2]}>
            <color attach="background" args={['#050505']} />
            
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1.5} color="#ffffff" />
            <pointLight position={[-10, -10, -5]} intensity={0.5} color="#a855f7" />
            <spotLight position={[0, 5, 0]} intensity={1} angle={0.5} penumbra={1} color="white" />
            
            <CleanAvatar />
            
            <Environment preset="city" />
          </Canvas>
        </Suspense>
      </div>

    </section>
  );
};

export default About;