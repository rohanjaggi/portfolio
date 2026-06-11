"use client"

import { useRef, useSyncExternalStore } from "react";
import { useDrag } from "@use-gesture/react";
import { getTemperature, setTemperature, subscribe } from "@/lib/temperature-store";

const TRACK_HEIGHT = 120;

export default function TemperatureSlider() {
  const temperature = useSyncExternalStore(subscribe, getTemperature, getTemperature);
  const trackRef = useRef<HTMLDivElement>(null);

  const bind = useDrag(
    ({ xy: [, y] }) => {
      if (!trackRef.current) return;
      const rect = trackRef.current.getBoundingClientRect();
      const normalized = 1 - (y - rect.top) / rect.height;
      setTemperature(normalized);
    },
    { axis: "y" }
  );

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center gap-2">
      <span className="font-mono text-[8px] text-[oklch(0.45_0.01_250)] tracking-wider">
        t={temperature.toFixed(2)}
      </span>

      <div
        ref={trackRef}
        className="relative w-[3px] rounded-full bg-[oklch(0.22_0.01_250)]"
        style={{ height: TRACK_HEIGHT }}
      >
        <div
          className="absolute bottom-0 left-0 w-full rounded-full bg-[oklch(0.65_0.12_70)] transition-all duration-75"
          style={{ height: `${temperature * 100}%` }}
        />
        <div
          {...bind()}
          className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-[oklch(0.65_0.12_70)] bg-[oklch(0.13_0.01_250)] cursor-grab active:cursor-grabbing touch-none"
          style={{ bottom: `calc(${temperature * 100}% - 8px)` }}
        />
      </div>

      <span className="font-mono text-[8px] text-[oklch(0.35_0.01_250)]">temp</span>
    </div>
  );
}
