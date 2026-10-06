"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Points, PointMaterial } from "@react-three/drei";
import { motion, useInView } from "framer-motion";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";

type Variant = "skills" | "projects" | "testimonials" | "footer";

function ParticleField({
  count,
  color,
  size,
  spread,
}: {
  count: number;
  color: string;
  size: number;
  spread: number;
}) {
  const ref = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * spread;
      arr[i * 3 + 1] = (Math.random() - 0.5) * spread * 0.7;
      arr[i * 3 + 2] = (Math.random() - 0.5) * spread * 0.55;
    }
    return arr;
  }, [count, spread]);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.getElapsedTime();
    ref.current.rotation.y = t * 0.04;
    ref.current.rotation.x = Math.sin(t * 0.12) * 0.08;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color={color}
        size={size}
        sizeAttenuation
        depthWrite={false}
        opacity={0.75}
      />
    </Points>
  );
}

function OrbitRings({ accent }: { accent: string }) {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.getElapsedTime();
    group.current.rotation.z = t * 0.15;
    group.current.rotation.x = 0.55 + Math.sin(t * 0.2) * 0.08;
  });

  return (
    <group ref={group} position={[0, 0, -1.2]}>
      <mesh>
        <torusGeometry args={[2.4, 0.018, 16, 120]} />
        <meshBasicMaterial color={accent} transparent opacity={0.35} />
      </mesh>
      <mesh rotation={[Math.PI / 2.4, 0.4, 0]}>
        <torusGeometry args={[1.7, 0.012, 16, 100]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.12} />
      </mesh>
      <mesh rotation={[Math.PI / 3, -0.5, 0.2]}>
        <torusGeometry args={[3.1, 0.01, 16, 140]} />
        <meshBasicMaterial color={accent} transparent opacity={0.18} />
      </mesh>
    </group>
  );
}

function FloatingOrbs({ variant }: { variant: Variant }) {
  const accent = "#e50914";
  const a = useRef<THREE.Mesh>(null);
  const b = useRef<THREE.Mesh>(null);
  const c = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (a.current) {
      a.current.position.x = Math.sin(t * 0.35) * 1.8;
      a.current.position.y = Math.cos(t * 0.28) * 0.9;
    }
    if (b.current) {
      b.current.position.x = Math.cos(t * 0.25) * -2.1;
      b.current.position.y = Math.sin(t * 0.32) * 1.1;
    }
    if (c.current) {
      c.current.position.x = Math.sin(t * 0.2 + 1.2) * 1.4;
      c.current.position.y = Math.cos(t * 0.22 + 0.6) * -1.2;
    }
  });

  return (
    <Float speed={1.2} rotationIntensity={0.35} floatIntensity={0.6}>
      <mesh ref={a} position={[1.5, 0.4, -2]}>
        <sphereGeometry
          args={[
            variant === "skills" ? 0.55 : variant === "footer" ? 0.5 : variant === "testimonials" ? 0.48 : 0.42,
            32,
            32,
          ]}
        />
        <meshStandardMaterial
          color={accent}
          emissive={accent}
          emissiveIntensity={0.55}
          transparent
          opacity={0.28}
          roughness={0.35}
        />
      </mesh>
      <mesh ref={b} position={[-1.8, -0.3, -2.4]}>
        <icosahedronGeometry args={[0.38, 0]} />
        <meshStandardMaterial
          color="#ffffff"
          emissive={accent}
          emissiveIntensity={0.2}
          transparent
          opacity={0.14}
          wireframe={variant !== "skills"}
        />
      </mesh>
      <mesh ref={c} position={[0.2, -1, -1.8]}>
        <octahedronGeometry args={[0.32, 0]} />
        <meshStandardMaterial
          color={accent}
          emissive={accent}
          emissiveIntensity={0.4}
          transparent
          opacity={0.22}
          wireframe={variant !== "testimonials"}
        />
      </mesh>
    </Float>
  );
}

function Scene({ variant }: { variant: Variant }) {
  return (
    <>
      <ambientLight intensity={0.35} />
      <pointLight position={[3, 2, 4]} intensity={1.1} color="#e50914" />
      <pointLight position={[-3, -1, 2]} intensity={0.45} color="#ffffff" />

      <ParticleField
        count={
          variant === "skills"
            ? 420
            : variant === "projects"
              ? 520
              : variant === "footer"
                ? 460
                : 380
        }
        color={variant === "projects" ? "#ff3040" : "#e50914"}
        size={
          variant === "testimonials"
            ? 0.03
            : variant === "footer"
              ? 0.026
              : variant === "skills"
                ? 0.028
                : 0.022
        }
        spread={
          variant === "skills" ? 9 : variant === "projects" ? 11 : variant === "footer" ? 10 : 8.5
        }
      />
      <OrbitRings accent="#e50914" />
      <FloatingOrbs variant={variant} />
    </>
  );
}

export default function SectionBackground3D({
  variant = "skills",
}: {
  variant?: Variant;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { amount: 0.1, margin: "120px 0px" });

  return (
    <motion.div
      ref={containerRef}
      aria-hidden
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0.35 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="pointer-events-none absolute inset-0 z-0"
    >
      {inView && (
        <Canvas
          dpr={[1, 1.5]}
          camera={{ position: [0, 0, 5.2], fov: 50 }}
          gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
          style={{ width: "100%", height: "100%", background: "transparent" }}
        >
          <Suspense fallback={null}>
            <Scene variant={variant} />
          </Suspense>
        </Canvas>
      )}

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_50%_45%,transparent_15%,rgba(0,0,0,0.45)_70%,rgba(0,0,0,0.8)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.3)_0%,transparent_22%,transparent_78%,rgba(0,0,0,0.4)_100%)]" />
    </motion.div>
  );
}
