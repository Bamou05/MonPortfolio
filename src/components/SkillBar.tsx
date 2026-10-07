import { useState, useEffect, useRef } from "react";
import type { ElementType } from "react";

type SkillBarProps = {
  name: string;
  percentage: number;
  icon?: ElementType;
  color?: string;
};



function SkillBar({ name, percentage, icon: Icon, color }: SkillBarProps) {

const [progress, setProgress] = useState(0);

const skillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
  const observer = new IntersectionObserver((entries) => {
    const entry = entries[0];

    if (entry.isIntersecting) {
      setProgress(percentage);
      observer.unobserve(entry.target);
    }
  });

  if (skillRef.current) {
    observer.observe(skillRef.current);
  }

  return () => {
    observer.disconnect();
  };
}, [percentage]);
  return (
    <div className="mb-2" ref={skillRef}>

      <div className="flex justify-between mb-2  ">
        <div className="flex items-center gap-2">
          {Icon && <Icon className="w-5 h-5 " style={{ color }} />}

          <span className="theme-text-main font-semibold">
            {name}
          </span>
        </div>

        <span className="text-violet-400 font-semibold">
          {percentage}%
        </span>
      </div>

      <div className="w-full h-1.5 theme-bg-progress rounded-full">
        <div
          className="h-1.5 bg-violet-600 rounded-full transition-all duration-1000"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

    </div>
  );
}

export default SkillBar;