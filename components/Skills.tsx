import EditorialTitle from "@/components/EditorialTitle";
import Image from "next/image";
import { skillCategories } from "@/lib/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="skills section-space paper-grid">
      <div className="skills-title">
        <div className="toolkit-art" aria-hidden="true">
          <Image
            src="/art/toolkit-braces.png"
            alt=""
            width={1254}
            height={1254}
            sizes="(max-width: 600px) 135px, (max-width: 860px) 28vw, 270px"
          />
        </div>
        <EditorialTitle lines={["Technical", "toolkit."]} />
        <p>
          From React and Spring Boot to cloud infrastructure, testing, and AI agents.
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
