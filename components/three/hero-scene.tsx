'use client';

import { Suspense, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Environment, Float } from '@react-three/drei';
import { EffectComposer, Bloom, ChromaticAberration } from '@react-three/postprocessing';
import { BlendFunction } from 'postprocessing';
import * as THREE from 'three';
import { RAMStick, FloatingRAMArray } from './ram-model';
import { Particles, LightTrails } from './particles';

function MouseCamera() {
  const { camera } = useThree();
  const target = useRef(new THREE.Vector3(0, 0, 8));

  useFrame((state) => {
    const x = state.pointer.x * 0.5;
    const y = state.pointer.y * 0.3;
    target.current.set(x, y, 8);
    camera.position.lerp(target.current, 0.05);
    camera.lookAt(0, 0, 0);
  });

  return null;
}

function HeroContent() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <>
      <MouseCamera />
      <ambientLight intensity={0.15} />
      <directionalLight position={[5, 5, 5]} intensity={0.5} color="#a855f7" />
      <directionalLight position={[-5, 3, -5]} intensity={0.3} color="#3b82f6" />
      <pointLight position={[0, 2, 0]} intensity={2} color="#a855f7" distance={5} />
      <pointLight position={[2, -1, 1]} intensity={1} color="#3b82f6" distance={4} />
      <pointLight position={[-2, 1, -1]} intensity={1} color="#06b6d4" distance={4} />

      <group ref={groupRef}>
        <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
          <RAMStick
            position={[0, 0, 0]}
            rotation={[0, 0, 0]}
            color="#a855f7"
            floatSpeed={0.6}
            floatAmp={0.1}
          />
        </Float>
        <Float speed={1} rotationIntensity={0.2} floatIntensity={0.3}>
          <RAMStick
            position={[-1.8, 0.5, -1]}
            rotation={[0, 0.3, 0]}
            color="#3b82f6"
            floatSpeed={0.8}
            floatAmp={0.12}
          />
        </Float>
        <Float speed={1.2} rotationIntensity={0.25} floatIntensity={0.4}>
          <RAMStick
            position={[1.8, -0.3, -1.5]}
            rotation={[0, -0.2, 0]}
            color="#06b6d4"
            floatSpeed={0.7}
            floatAmp={0.08}
          />
        </Float>
      </group>

      <FloatingRAMArray />
      <Particles count={150} spread={12} />
      <LightTrails count={5} />

      <Environment preset="night" />
      <EffectComposer>
        <Bloom
          luminanceThreshold={0.2}
          luminanceSmoothing={0.9}
          intensity={1.5}
          mipmapBlur
        />
        <ChromaticAberration
          blendFunction={BlendFunction.NORMAL}
          offset={new THREE.Vector2(0.0005, 0.0005)}
          radialModulation={true}
          modulationOffset={0.5}
        />
      </EffectComposer>
    </>
  );
}

export function HeroScene() {
  return (
    <div className="absolute inset-0">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 1.5]}
      >
        <Suspense fallback={null}>
          <HeroContent />
        </Suspense>
      </Canvas>
    </div>
  );
}
