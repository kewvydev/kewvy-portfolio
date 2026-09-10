import EditorialTitle from "@/components/EditorialTitle";
import { skillCategories } from "@/lib/portfolio";
import { Braces } from "lucide-react";

export default function Skills() {
  return (
    <section id="skills" className="skills section-space paper-grid">
      <div className="skills-title">
        <Braces size={52} strokeWidth={1.5} aria-hidden="true" />
        <EditorialTitle lines={["Technical", "toolkit."]} />
        <p>
          Languages, platforms, infrastructure, testing, and agentic tools.
        </p>
      </div>
      <div className="skills-list">
        {skillCategories.map((category) => (
          <div className="skill-row" key={category.name}>
            <h3>{category.name}</h3>
            <ul>
              {category.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
