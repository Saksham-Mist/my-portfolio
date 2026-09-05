"use client";

import { skills, proficiencyLabel } from "@/data/skills";
import { InfiniteSlider } from "@/components/motion-primitives/infinite-slider";

const skillsByCategory = {
  language: "Languages",
  backend: "Backend",
  database: "Databases",
  frontend: "Frontend",
  testing: "Testing",
  devops: "DevOps & Tools",
  "core-cs": "Core CS",
};

function SkillCard({ skill }: { skill: typeof skills[0] }) {
  const label = proficiencyLabel(skill.proficiency);
  const percentage = Math.min((skill.proficiency / 35) * 100, 100);

  const getProfColor = (p: number) => {
    if (p >= 33) return "from-green-600 to-emerald-500";
    if (p >= 30) return "from-amber-600 to-amber-400";
    if (p >= 27) return "from-cyan-600 to-cyan-400";
    return "from-gray-500 to-gray-400";
  };

  const colorClass = getProfColor(skill.proficiency);

  return (
    <div className="flex-shrink-0 w-72 border border-hairline rounded-lg p-5 bg-card">
      <div className="flex justify-between items-baseline gap-2 mb-3">
        <span className="text-sm font-medium text-ink-black">{skill.name}</span>
        <span className="text-xs font-mono text-faint">{label}</span>
      </div>
      <div className="h-1.5 rounded-full bg-hairline overflow-hidden">
        <div
          className={`h-full bg-gradient-to-r ${colorClass} rounded-full transition-all duration-700 ease-out`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="w-full bg-canvas px-4 py-section sm:px-6">
      <div className="mx-auto max-w-4xl mb-12">
        <span className="eyebrow">Skills</span>
        <h2 className="mt-6 mb-4 font-serif text-4xl sm:text-5xl leading-tight text-ink-black">
          The toolkit
        </h2>
        <p className="max-w-2xl text-lg text-pencil mb-8 leading-relaxed">
          Grouped by where it lives in the stack, rated by how it actually feels to reach for.
        </p>

        <div className="inline-flex items-center gap-3 p-3 rounded-lg border border-hairline bg-card">
          <svg className="w-5 h-5 text-pencil flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 16v-4M12 8h.01" />
          </svg>
          <span className="text-sm text-pencil">
            Rated honestly. I'd rather <span className="font-semibold text-ink-black">under-promise and out-ship</span> than pad a list.
          </span>
        </div>
      </div>

      <div className="relative w-full -mx-4 sm:-mx-6 px-4 sm:px-6 overflow-hidden">
        <InfiniteSlider gap={16} duration={50} className="py-2">
          {skills.map((skill) => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
        </InfiniteSlider>

        {/* Fade edges */}
        <div className="pointer-events-none absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-canvas to-transparent" />
        <div className="pointer-events-none absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-canvas to-transparent" />
      </div>
    </section>
  );
}
