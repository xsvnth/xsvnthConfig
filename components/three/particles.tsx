'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function Particles({ count = 200, spread = 15 }: { count?: number; spread?: number }) {
  const meshRef = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * spread;
      arr[i * 3 + 1] = (Math.random() - 0.5) * spread;
      arr[i * 3 + 2] = (Math.random() - 0.5) * spread;
    }
    return arr;
  }, [count, spread]);

  const colors = useMemo(() => {
    const arr = new Float32Array(count * 3);
    const palette = [
      [0.66, 0.33, 0.97],
      [0.23, 0.51, 0.96],
      [0.02, 0.71, 0.83],
      [0.93, 0.29, 0.6],
    ];
    for (let i = 0; i < count; i++) {
      const c = palette[Math.floor(Math.random() * palette.length)];
      arr[i * 3] = c[0];
      arr[i * 3 + 1] = c[1];
      arr[i * 3 + 2] = c[2];
    }
    return arr;
  }, [count]);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.02;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.01) * 0.1;
    }
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        vertexColors
        transparent
        opacity={0.6}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export function LightTrails({ count = 6 }: { count?: number }) {
  const groupRef = useRef<THREE.Group>(null);
  const trailData = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        offset: i * (Math.PI * 2) / count,
        radius: 2.5 + Math.random(),
        speed: 0.3 + Math.random() * 0.3,
        color: ['#a855f7', '#3b82f6', '#06b6d4', '#ec4899', '#8b5cf6', '#0ea5e9'][i],
      })),
    [count]
  );

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      {trailData.map((trail, i) => {
        const positions = useMemo(() => {
          const arr = new Float32Array(50 * 3);
          for (let j = 0; j < 50; j++) {
            const angle = trail.offset + (j / 50) * Math.PI * 2;
            arr[j * 3] = Math.cos(angle) * trail.radius;
            arr[j * 3 + 1] = Math.sin(angle * 2) * 0.3;
            arr[j * 3 + 2] = Math.sin(angle) * trail.radius;
          }
          return arr;
        }, [trail.offset, trail.radius]);

        return (
          <line key={i}>
            <bufferGeometry>
              <bufferAttribute attach="attributes-position" args={[positions, 3]} />
            </bufferGeometry>
            <lineBasicMaterial
              color={trail.color}
              transparent
              opacity={0.3}
              blending={THREE.AdditiveBlending}
            />
          </line>
        );
      })}
    </group>
  );
}
