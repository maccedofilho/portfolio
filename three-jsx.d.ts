/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Object3DNode, BufferGeometryNode, MaterialNode } from '@react-three/fiber';
import type * as THREE from 'three';
import 'framer-motion';

declare module 'react/jsx-runtime' {
  namespace JSX {
    interface IntrinsicElements {
      group: Object3DNode<THREE.Group, typeof THREE.Group>;
      mesh: Object3DNode<THREE.Mesh, typeof THREE.Mesh>;
      sphereGeometry: BufferGeometryNode<THREE.SphereGeometry, typeof THREE.SphereGeometry>;
      torusGeometry: BufferGeometryNode<THREE.TorusGeometry, typeof THREE.TorusGeometry>;
      meshStandardMaterial: MaterialNode<THREE.MeshStandardMaterial, typeof THREE.MeshStandardMaterial>;
      ambientLight: Object3DNode<THREE.AmbientLight, typeof THREE.AmbientLight>;
      pointLight: Object3DNode<THREE.PointLight, typeof THREE.PointLight>;
      spotLight: Object3DNode<THREE.SpotLight, typeof THREE.SpotLight>;
      color: any;
    }
  }
}

declare module 'framer-motion' {
  export interface MotionProps {
    className?: string;
    onClick?: (e: any) => void;
    children?: React.ReactNode;
    style?: any;
  }
  
  export interface HTMLMotionProps<T extends keyof React.JSX.IntrinsicElements> 
    extends React.HTMLAttributes<T>, MotionProps {}
}
