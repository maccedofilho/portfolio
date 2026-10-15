import React, { Suspense, useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Environment, Sphere } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';

const CanvasLoader = () => (
  <div className="w-full h-full flex items-center justify-center bg-neutral-950">
    <div className="w-16 h-16 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin" />
  </div>
);


const CleanAvatar = () => {
  const groupRef = useRef<THREE.Group>(null);
  const eyesRef = useRef<THREE.Group>(null);
  const isMouseInside = useRef(true);
  const { gl } = useThree();

  useEffect(() => {
    const canvas = gl.domElement;
    
    const handleMouseEnter = () => {
      isMouseInside.current = true;
    };
    
    const handleMouseLeave = () => {
      isMouseInside.current = false;
    };

    canvas.addEventListener('mouseenter', handleMouseEnter);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      canvas.removeEventListener('mouseenter', handleMouseEnter);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [gl]);

  useFrame((state) => {
    if (!groupRef.current || !eyesRef.current) return;

    const targetX = isMouseInside.current ? state.pointer.x : 0;
    const targetY = isMouseInside.current ? state.pointer.y : 0;
    
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -targetY * 0.2, 0.1);
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetX * 0.2, 0.1);

    eyesRef.current.position.x = THREE.MathUtils.lerp(eyesRef.current.position.x, targetX * 0.15, 0.1);
    eyesRef.current.position.y = THREE.MathUtils.lerp(eyesRef.current.position.y, (targetY * 0.15) + 0.1, 0.1);
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
  return (
    <section id="about" className="relative h-screen bg-neutral-950 text-white overflow-hidden flex flex-col md:flex-row items-center justify-center scroll-mt-20">
      
      <motion.div 
        className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />
      
      <motion.div 
        className="absolute top-20 left-0 w-full z-10 px-6 text-center pointer-events-none md:pointer-events-auto"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
         <motion.h2 
           className="text-sm font-mono text-gray-400 mb-2 tracking-widest uppercase"
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           transition={{ delay: 0.2 }}
         >
           Sobre Mim
         </motion.h2>
         <motion.h3 
           className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4"
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.3, duration: 0.6 }}
         >
           Alquimista <span className="text-purple-400">Digital</span>
         </motion.h3>
         <motion.p 
           className="text-gray-400 max-w-lg mx-auto text-sm md:text-base leading-relaxed"
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.5, duration: 0.6 }}
         >
           +4 anos de experiência em desenvolvimento Full Stack, criando, evoluindo e mantendo aplicações web em produção, agora com foco forte em IA. Estudante de Engenharia de Software, transformando café em código limpo, escalável e pronto pra produção.
         </motion.p>
      </motion.div>

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