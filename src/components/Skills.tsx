import SkillsBar from "./SkillBar";
import { FaHtml5, FaJs, FaReact, FaGitAlt, FaDocker } from "react-icons/fa";
import { SiTypescript, SiNestjs, SiDjango, SiTailwindcss } from "react-icons/si";




function Skills() {

const skills = [
  { name: "HTML", percentage: 95 },
  { name: "Tailwind", percentage: 90 },
  { name: "JavaScript", percentage: 90 },
  { name: "TypeScript", percentage: 85 },
  { name: "React", percentage: 80 },
  { name: "NestJS", percentage: 75 },
  { name: "Git", percentage: 85 },
  { name: "Django", percentage: 70 },
  { name: "Docker", percentage: 65 },
];

const skillIcons: Record<string, React.ElementType> = {
  HTML: FaHtml5,
  Tailwind: SiTailwindcss,
  JavaScript: FaJs,
  TypeScript: SiTypescript,
  React: FaReact,
  NestJS: SiNestjs,
  Git: FaGitAlt,
  Django: SiDjango,
  Docker: FaDocker,
};

const skillColors: Record<string, string> = {
  HTML: "#E34F26",
  Tailwind: "#06B6D4",
  JavaScript: "#F7DF1E",
  TypeScript: "#3178C6",
  React: "#61DAFB",
  NestJS: "#E0234E",
  Git: "#F05032",
  Django: "#092E20",
  Docker: "#2496ED",
};


return (
    <section id="competences" className="theme-bg-main py-7 ">
      <div className="container mx-auto px-4">
        <p className="text-sm  text-violet-400 text-center uppercase ">Mes Skills</p>
        <h2 className="text-3xl font-bold theme-text-main mb-6 text-center mt-2">Outils | Technologies</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 md:gap-x-16 gap-y-3 w-full px-4 md:px-16 mt-5">
          {skills.map((skill) => {
            const Icon = skillIcons[skill.name]
            const color = skillColors[skill.name]
          return (
            
            <SkillsBar
              key={skill.name}
              name={skill.name}
              percentage={skill.percentage}
              icon={Icon}
              color={color}
            />
          );
          })}
        </div>
      </div>
    </section>
  );
}
export default Skills