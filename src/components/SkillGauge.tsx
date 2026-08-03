"use client";

import { useEffect, useState } from "react";
import type { Skill } from "@/data/skills";
import { proficiencyLabel } from "@/data/skills";

const SIZE = 70;
const STROKE = 4;
const RADIUS = (SIZE - STROKE) / 2;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export function SkillGauge({ skill }: { skill: Skill }) {
  const [filled, setFilled] = useState(false);
  const Icon = skill.icon;

  useEffect(() => {
    const t = setTimeout(() => setFilled(true), 150);
    return () => clearTimeout(t);
  }, []);

  const offset = CIRCUMFERENCE - (filled ? skill.proficiency / 100 : 0) * CIRCUMFERENCE;

  return (
    <div className="flex w-[84px] shrink-0 flex-col items-center gap-2 sm:w-[94px]">
      <div className="relative flex h-[60px] w-[60px] items-center justify-center sm:h-[70px] sm:w-[70px]">
        <svg width={SIZE} height={SIZE} className="absolute -rotate-90 sm:h-[70px] sm:w-[70px]" viewBox={`0 0 ${SIZE} ${SIZE}`}>
          <circle
            cx={SIZE / 2}
            cy={SIZE / 2}
            r={RADIUS}
            fill="none"
            stroke="#2a3a3a"
            strokeWidth={STROKE}
          />
          <circle
            cx={SIZE / 2}
            cy={SIZE / 2}
            r={RADIUS}
            fill="none"
            stroke="#00ff88"
            strokeWidth={STROKE}
            strokeLinecap="round"
            strokeDasharray={CIRCUMFERENCE}
            strokeDashoffset={offset}
            style={{ transition: "stroke-dashoffset 0.6s ease-out" }}
          />
        </svg>
        <Icon size={22} className="text-text-primary" />
      </div>
      <div className="text-center">
        <p className="text-xs font-medium text-text-primary">{skill.name}</p>
        <p className="font-mono text-[11px] text-text-secondary">
          {skill.proficiency}% &middot; {proficiencyLabel(skill.proficiency)}
        </p>
      </div>
    </div>
  );
}
