import EditorialTitle from "@/components/EditorialTitle";
import { ArrowUpRight } from "lucide-react";
import { experiences } from "@/lib/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="experience section-space">
      <div className="section-heading">
        <EditorialTitle lines={["Work", "experience."]} />
      </div>
      <div className="experience-list">
        <div className="experience-track" aria-hidden="true">
          <span />
        </div>
        {experiences.map((experience) => (
          <article key={experience.company} className="experience-entry">
            <div className="experience-date">
              <span>{experience.period}</span>
              <ArrowUpRight size={25} aria-hidden="true" />
            </div>
            <div className="experience-main">
              <h3>{experience.role}</h3>
              <p className="company">{experience.company}</p>
              <p className="location">{experience.location}</p>
              <ul>
                {experience.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
