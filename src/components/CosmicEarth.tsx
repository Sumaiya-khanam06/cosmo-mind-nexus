import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, Suspense } from "react";
import * as THREE from "three";
import { Stars } from "@react-three/drei";

function Globe() {
  const mesh = useRef<THREE.Mesh>(null);
  const wire = useRef<THREE.Mesh>(null);
  useFrame((_, dt) => {
    if (mesh.current) mesh.current.rotation.y += dt * 0.15;
    if (wire.current) wire.current.rotation.y -= dt * 0.08;
  });

  return (
    <group>
      <mesh ref={mesh}>
        <sphereGeometry args={[1.6, 64, 64]} />
        <meshStandardMaterial
          color="#1e3a8a"
          emissive="#3b82f6"
          emissiveIntensity={0.4}
          roughness={0.4}
          metalness={0.7}
        />
      </mesh>
      <mesh ref={wire} scale={1.02}>
        <sphereGeometry args={[1.6, 32, 32]} />
        <meshBasicMaterial color="#67e8f9" wireframe transparent opacity={0.25} />
      </mesh>
      <mesh scale={1.15}>
        <sphereGeometry args={[1.6, 32, 32]} />
        <meshBasicMaterial color="#a78bfa" transparent opacity={0.06} />
      </mesh>
      {/* orbit ring */}
      <mesh rotation={[Math.PI / 2.4, 0, 0]}>
        <torusGeometry args={[2.4, 0.008, 16, 128]} />
        <meshBasicMaterial color="#f0abfc" transparent opacity={0.6} />
      </mesh>
      <mesh rotation={[Math.PI / 1.6, 0.5, 0]}>
        <torusGeometry args={[2.7, 0.006, 16, 128]} />
        <meshBasicMaterial color="#67e8f9" transparent opacity={0.5} />
      </mesh>
      <Satellite radius={2.4} speed={0.5} color="#f0abfc" />
      <Satellite radius={2.7} speed={-0.35} color="#67e8f9" tilt={0.6} />
    </group>
  );
}

function Satellite({
  radius, speed, color, tilt = 0,
}: { radius: number; speed: number; color: string; tilt?: number }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.elapsedTime * speed;
    ref.current.position.x = Math.cos(t) * radius;
    ref.current.position.z = Math.sin(t) * radius;
    ref.current.position.y = Math.sin(t) * radius * Math.sin(tilt);
  });
  return (
    <mesh ref={ref}>
      <boxGeometry args={[0.08, 0.08, 0.08]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={2} />
    </mesh>
  );
}

export function CosmicEarth() {
  return (
    <Canvas camera={{ position: [0, 0.4, 5], fov: 50 }} dpr={[1, 2]}>
      <Suspense fallback={null}>
        <ambientLight intensity={0.3} />
        <pointLight position={[5, 3, 5]} intensity={2} color="#a78bfa" />
        <pointLight position={[-5, -2, -3]} intensity={1.5} color="#67e8f9" />
        <Stars radius={50} depth={30} count={2000} factor={3} fade speed={0.5} />
        <Globe />
      </Suspense>
    </Canvas>
  );
}
