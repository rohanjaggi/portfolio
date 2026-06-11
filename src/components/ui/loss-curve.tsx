"use client"

import { motion, useScroll, useTransform } from "framer-motion";
import { generateLossCurvePath, getLoss } from "@/lib/training-math";

const WIDTH = 140;
const HEIGHT = 60;

export default function LossCurve() {
  const { scrollYProgress } = useScroll();
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const pathD = generateLossCurvePath(WIDTH, HEIGHT);

  const lossDisplay = useTransform(scrollYProgress, (p) => getLoss(p).toFixed(3));

  return (
    <div className="fixed bottom-6 right-6 z-40 hidden sm:block">
      <div className="relative">
        <div className="font-mono text-[9px] text-[oklch(0.45_0.01_250)] mb-1 flex justify-between">
          <span>loss</span>
          <motion.span>{lossDisplay}</motion.span>
        </div>
        <svg
          width={WIDTH}
          height={HEIGHT}
          viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
          className="overflow-visible"
        >
          <path
            d={pathD}
            fill="none"
            stroke="oklch(0.25 0.01 250)"
            strokeWidth={1}
            opacity={0.3}
          />
          <motion.path
            d={pathD}
            fill="none"
            stroke="oklch(0.65 0.12 70)"
            strokeWidth={1.5}
            strokeLinecap="round"
            style={{ pathLength }}
          />
          <line
            x1={4}
            y1={HEIGHT - 4}
            x2={WIDTH - 4}
            y2={HEIGHT - 4}
            stroke="oklch(0.25 0.01 250)"
            strokeWidth={0.5}
            opacity={0.3}
          />
          <line
            x1={4}
            y1={4}
            x2={4}
            y2={HEIGHT - 4}
            stroke="oklch(0.25 0.01 250)"
            strokeWidth={0.5}
            opacity={0.3}
          />
        </svg>
        <div className="font-mono text-[8px] text-[oklch(0.35_0.01_250)] mt-0.5 text-right">
          step
        </div>
      </div>
    </div>
  );
}
