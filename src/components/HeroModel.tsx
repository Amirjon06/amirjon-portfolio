"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment, Lightformer } from "@react-three/drei";
import * as THREE from "three";

/* A real "A" letterform — outer silhouette + triangular counter + crossbar,
   extruded and beveled into a solid 3D mark. */
function ALogo({ signal, accent }: { signal: string; accent: string }) {
  const geometry = useMemo(() => {
    const s = new THREE.Shape();
    s.moveTo(0, 1.0);
    s.lineTo(0.78, -1.0);
    s.lineTo(0.46, -1.0);
    s.lineTo(0.18, -0.05);
    s.lineTo(-0.18, -0.05);
    s.lineTo(-0.46, -1.0);
    s.lineTo(-0.78, -1.0);
    s.closePath();

    const counter = new THREE.Path();
    counter.moveTo(0, 0.55);
    counter.lineTo(0.17, 0.04);
    counter.lineTo(-0.17, 0.04);
    counter.closePath();
    s.holes.push(counter);

    const g = new THREE.ExtrudeGeometry(s, {
      depth: 0.4,
      bevelEnabled: true,
      bevelThickness: 0.08,
      bevelSize: 0.06,
      bevelSegments: 5,
      steps: 1,
    });
    g.center();
    return g;
  }, []);

  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.35) * 0.03;
    }
  });

  return (
    <mesh ref={ref} geometry={geometry} rotation={[0.2, -0.55, 0]}>
      <meshStandardMaterial
        color={signal}
        emissive={signal}
        emissiveIntensity={0.08}
        metalness={0.92}
        roughness={0.22}
        envMapIntensity={1.4}
      />
    </mesh>
  );
}

export default function HeroModel({ className = "" }: { className?: string }) {
  const [mounted, setMounted] = useState(false);
  const [reduce, setReduce] = useState(false);
  const [colors, setColors] = useState({ signal: "#5eead4", accent: "#f5a524" });

  useEffect(() => {
    setMounted(true);
    setReduce(window.matchMedia("(prefers-reduced-motion: reduce)").matches);

    const read = () => {
      const cs = getComputedStyle(document.documentElement);
      setColors({
        signal: cs.getPropertyValue("--hex-signal").trim() || "#5eead4",
        accent: cs.getPropertyValue("--hex-accent").trim() || "#f5a524",
      });
    };
    read();
    const obs = new MutationObserver(read);
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ["style"] });
    return () => obs.disconnect();
  }, []);

  if (!mounted) return <div className={className} />;

  return (
    <div className={`relative ${className}`}>
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: `radial-gradient(circle at 54% 50%, ${colors.signal}2e, transparent 56%)` }}
      />
      <Canvas
        camera={{ position: [0, 0, 6], fov: 40 }}
        dpr={[1, 2]}
        gl={{ alpha: true, antialias: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.35} />
        <pointLight position={[5, 4, 6]} color={colors.signal} intensity={1.3} />
        <pointLight position={[-5, -3, 4]} color={colors.accent} intensity={1.0} />

        <group scale={0.72}>
          <ALogo signal={colors.signal} accent={colors.accent} />
        </group>

        {/* light panels create the cyan/amber gradient reflected on the metal */}
        <Environment resolution={256} frames={1}>
          <Lightformer position={[3, 2, 3]} scale={[6, 6, 1]} color={colors.signal} intensity={2.4} />
          <Lightformer position={[-3, -1, 2]} scale={[6, 6, 1]} color={colors.accent} intensity={1.8} />
          <Lightformer position={[0, 4, -3]} scale={[5, 5, 1]} color="#ffffff" intensity={1.0} />
        </Environment>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={!reduce}
          autoRotateSpeed={0.9}
          enableDamping
          dampingFactor={0.08}
          rotateSpeed={0.7}
        />
      </Canvas>
    </div>
  );
}