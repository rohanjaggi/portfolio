"use client"

import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import ParticleField from "./particle-field"

export default function Scene() {
  return (
    <div className="fixed inset-0 z-0" style={{ pointerEvents: "none" }}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, alpha: true }}
        events={undefined as any}
        style={{ pointerEvents: "none" }}
      >
        <Suspense fallback={null}>
          <ParticleField />
        </Suspense>
      </Canvas>
    </div>
  )
}
