
import { skills } from "@/data/skills";

export default function Skill() {
  return (
    <section id="skills" className="flex flex-col justify-between items-center max-w-2xl">
      <h1 className="text-2xl hover:underline font-semibold">Skills</h1>
      <div className="my-1 space-x-3 max-w-xl mx-auto flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <div className="inline-flex items-center bg-white border border-gray-200 rounded-full p-1.5 pe-3 dark:bg-neutral-900 dark:border-neutral-700" key={index}>
            <img className="me-1.5 inline-block w-6 h-6 rounded-full" src={skill.image} alt={skill.name} />
            <div className="whitespace-nowrap text-sm font-medium text-gray-800 dark:text-white cursor-pointer hover:text-lg">
              {skill.name}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
