"use client"

import { useRef, useMemo, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random";
import * as THREE from "three";
import { getTemperature } from "@/lib/temperature-store";

const PARTICLE_COUNT = 6000;

export default function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null);
  const progressRef = useRef(0);
  const mouseRef = useRef(new THREE.Vector2(0, 0));
  const { size } = useThree();

  const [randomPositions, organizedPositions] = useMemo(() => {
    const rand = new Float32Array(PARTICLE_COUNT * 3);
    random.inSphere(rand, { radius: 3.5 });

    const organized = new Float32Array(PARTICLE_COUNT * 3);
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const i3 = i * 3;
      const t = i / PARTICLE_COUNT;
      const rings = 5;
      const ring = Math.floor(t * rings);
      const posInRing = (t * rings) % 1;
      const angle = posInRing * Math.PI * 2;
      const radius = 0.4 + ring * 0.5;
      organized[i3] = Math.cos(angle) * radius;
      organized[i3 + 1] = Math.sin(angle) * radius;
      organized[i3 + 2] = (Math.random() - 0.5) * 0.1;
    }
    return [rand, organized];
  }, []);

  const currentPositions = useMemo(() => new Float32Array(PARTICLE_COUNT * 3), []);

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      progressRef.current = maxScroll > 0 ? window.scrollY / maxScroll : 0;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      mouseRef.current.x = (e.clientX / size.width) * 2 - 1;
      mouseRef.current.y = -(e.clientY / size.height) * 2 + 1;
    };
    window.addEventListener("mousemove", handleMouse, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouse);
  }, [size]);

  useFrame((_, delta) => {
    if (!pointsRef.current) return;
    const geometry = pointsRef.current.geometry;
    const positions = geometry.attributes.position.array as Float32Array;

    const temp = getTemperature();
    const org = Math.max(0, Math.pow(progressRef.current, 0.7) - temp * 0.6);
    const jitter = temp * 0.08;
    const mx = mouseRef.current.x * 3;
    const my = mouseRef.current.y * 3;
    const dampFactor = 1 - Math.pow(0.001, delta);

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const i3 = i * 3;
      const targetX = randomPositions[i3] * (1 - org) + organizedPositions[i3] * org + (Math.random() - 0.5) * jitter;
      const targetY = randomPositions[i3 + 1] * (1 - org) + organizedPositions[i3 + 1] * org + (Math.random() - 0.5) * jitter;
      const targetZ = randomPositions[i3 + 2] * (1 - org) + organizedPositions[i3 + 2] * org + (Math.random() - 0.5) * jitter;

      currentPositions[i3] += (targetX - currentPositions[i3]) * dampFactor;
      currentPositions[i3 + 1] += (targetY - currentPositions[i3 + 1]) * dampFactor;
      currentPositions[i3 + 2] += (targetZ - currentPositions[i3 + 2]) * dampFactor;

      const dx = currentPositions[i3] - mx;
      const dy = currentPositions[i3 + 1] - my;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 1.2) {
        const force = (1.2 - dist) * 0.02;
        currentPositions[i3] += dx * force;
        currentPositions[i3 + 1] += dy * force;
      }

      positions[i3] = currentPositions[i3];
      positions[i3 + 1] = currentPositions[i3 + 1];
      positions[i3 + 2] = currentPositions[i3 + 2];
    }

    geometry.attributes.position.needsUpdate = true;
    pointsRef.current.rotation.z += delta * 0.02;
  });

  return (
    <Points ref={pointsRef} positions={currentPositions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="oklch(0.65 0.12 70)"
        size={0.012}
        sizeAttenuation
        depthWrite={false}
        opacity={0.6}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}
