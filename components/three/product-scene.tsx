'use client';

import { Suspense, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import * as THREE from 'three';
import { RAMStick } from './ram-model';
import { Particles } from './particles';

function ProductRAMStick({ color, exploded }: { color: string; exploded: boolean }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005;
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={1} rotationIntensity={0.15} floatIntensity={0.1}>
        <RAMStick
          position={[0, exploded ? 0.5 : 0, exploded ? 0.3 : 0]}
          rotation={[0.1, 0, 0]}
          color={color}
          floatSpeed={0.4}
          floatAmp={0.05}
        />
        {exploded && (
          <>
            <RAMStick
              position={[-0.8, -0.3, 0.5]}
              rotation={[0, 0.3, 0]}
              color={color}
              floatSpeed={0.5}
              floatAmp={0.06}
            />
            <RAMStick
              position={[0.8, -0.3, 0.5]}
              rotation={[0, -0.3, 0]}
              color={color}
              floatSpeed={0.6}
              floatAmp={0.04}
            />
          </>
        )}
      </Float>
    </group>
  );
}

interface ProductSceneProps {
  color: string;
  interactive?: boolean;
}

export function ProductScene({ color, interactive = true }: ProductSceneProps) {
  const [exploded, setExploded] = useState(false);

  return (
    <div
      className="w-full h-full"
      onMouseEnter={() => interactive && setExploded(true)}
      onMouseLeave={() => interactive && setExploded(false)}
    >
      <Canvas
        camera={{ position: [0, 0, 4], fov: 40 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 1.5]}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.2} />
          <directionalLight position={[3, 3, 3]} intensity={0.6} color="#a855f7" />
          <pointLight position={[0, 2, 0]} intensity={2} color={color} distance={5} />
          <pointLight position={[-2, -1, 1]} intensity={0.8} color="#3b82f6" distance={4} />

          <ProductRAMStick color={color} exploded={exploded} />
          <Particles count={60} spread={6} />
          <Environment preset="night" />
          <EffectComposer>
            <Bloom
              luminanceThreshold={0.2}
              luminanceSmoothing={0.9}
              intensity={1.2}
              mipmapBlur
            />
          </EffectComposer>
        </Suspense>
      </Canvas>
    </div>
  );
}
