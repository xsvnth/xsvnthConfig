'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface RAMStickProps {
  color?: string;
  position?: [number, number, number];
  rotation?: [number, number, number];
  floatSpeed?: number;
  floatAmp?: number;
}

export function RAMStick({
  color = '#a855f7',
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  floatSpeed = 1,
  floatAmp = 0.15,
}: RAMStickProps) {
  const groupRef = useRef<THREE.Group>(null);
  const glowRef = useRef<THREE.Mesh>(null);
  const timeOffset = useMemo(() => Math.random() * Math.PI * 2, []);

  useFrame((state) => {
    const t = state.clock.elapsedTime * floatSpeed + timeOffset;
    if (groupRef.current) {
      groupRef.current.position.y = position[1] + Math.sin(t) * floatAmp;
      groupRef.current.rotation.y = rotation[1] + Math.sin(t * 0.3) * 0.1;
    }
    if (glowRef.current) {
      const mat = glowRef.current.material as THREE.MeshStandardMaterial;
      mat.emissiveIntensity = 0.8 + Math.sin(t * 2) * 0.4;
    }
  });

  const pcbWidth = 0.3;
  const pcbHeight = 1.4;
  const pcbDepth = 0.02;

  return (
    <group ref={groupRef} position={position} rotation={rotation}>
      {/* PCB Board */}
      <mesh>
        <boxGeometry args={[pcbWidth, pcbHeight, pcbDepth]} />
        <meshStandardMaterial color="#0a1628" roughness={0.6} metalness={0.3} />
      </mesh>

      {/* PCB traces */}
      {Array.from({ length: 12 }).map((_, i) => (
        <mesh key={i} position={[-0.1 + (i * 0.02), 0.3 - (i * 0.05), pcbDepth / 2 + 0.001]}>
          <boxGeometry args={[0.005, 0.08, 0.001]} />
          <meshStandardMaterial color="#1a3a1a" emissive="#0d4d0d" emissiveIntensity={0.2} />
        </mesh>
      ))}

      {/* RAM chips */}
      {Array.from({ length: 8 }).map((_, i) => (
        <mesh key={i} position={[0, 0.55 - i * 0.14, pcbDepth / 2 + 0.015]}>
          <boxGeometry args={[0.22, 0.06, 0.03]} />
          <meshStandardMaterial color="#111" roughness={0.4} metalness={0.8} />
        </mesh>
      ))}

      {/* Heatspreader */}
      <mesh position={[0, 0.25, pcbDepth / 2 + 0.04]}>
        <boxGeometry args={[0.28, 0.9, 0.06]} />
        <meshStandardMaterial
          color="#1a1a2e"
          roughness={0.2}
          metalness={0.9}
          envMapIntensity={1}
        />
      </mesh>

      {/* RGB light strip */}
      <mesh ref={glowRef} position={[0, 0.7, 0]}>
        <boxGeometry args={[0.26, 0.08, 0.04]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={1.2}
          toneMapped={false}
        />
      </mesh>

      {/* Bottom edge connector */}
      <mesh position={[0, -pcbHeight / 2 + 0.03, 0]}>
        <boxGeometry args={[0.28, 0.04, 0.025]} />
        <meshStandardMaterial color="#c9a84c" roughness={0.3} metalness={0.9} />
      </mesh>

      {/* Connector pins */}
      {Array.from({ length: 20 }).map((_, i) => (
        <mesh
          key={i}
          position={[-0.12 + i * 0.013, -pcbHeight / 2 - 0.01, 0]}
        >
          <boxGeometry args={[0.005, 0.015, 0.01]} />
          <meshStandardMaterial color="#d4af37" metalness={1} roughness={0.2} />
        </mesh>
      ))}
    </group>
  );
}

export function FloatingRAMArray() {
  const sticks = useMemo(
    () =>
      Array.from({ length: 4 }).map((_, i) => ({
        position: [(-1.5 + i * 1), 0, 0] as [number, number, number],
        rotation: [0, Math.PI * 0.05 * (i - 1.5), 0] as [number, number, number],
        color: ['#a855f7', '#3b82f6', '#06b6d4', '#ec4899'][i],
        floatSpeed: 0.8 + i * 0.1,
        floatAmp: 0.1 + i * 0.02,
      })),
    []
  );

  return (
    <group>
      {sticks.map((s, i) => (
        <RAMStick
          key={i}
          position={s.position}
          rotation={s.rotation}
          color={s.color}
          floatSpeed={s.floatSpeed}
          floatAmp={s.floatAmp}
        />
      ))}
    </group>
  );
}
