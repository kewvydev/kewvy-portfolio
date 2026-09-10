"use client";

import EditorialTitle from "@/components/EditorialTitle";
import AnimatedDetails from "@/components/AnimatedDetails";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Github,
  Plus,
  X,
} from "lucide-react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import { featuredProjects, otherProjects } from "@/lib/portfolio";

type Project = (typeof featuredProjects)[number];

function ProjectFeature({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const [slide, setSlide] = useState(0);
  const imageTween = useRef<gsap.core.Tween | null>(null);
  const direction = useRef(1);
  useEffect(
    () => () => {
      imageTween.current?.kill();
    },
    [],
  );
  function changeSlide(step: number) {
    direction.current = step;
    imageTween.current?.kill();
    setSlide(
      (current) =>
        (current + step + project.images.length) % project.images.length,
    );
  }
  return (
    <article className={`project-feature project-${index}`}>
      <div className="project-visual">
        <div className="project-browser">
          <span className="browser-dots" aria-hidden="true">
            ● ● ●
          </span>
          <span>{project.title}</span>
          <X size={16} />
        </div>
        <div className="project-image">
          <Image
            key={slide}
            onLoad={(event) => {
              if (prefersReducedMotion()) return;
              imageTween.current?.kill();
              imageTween.current = gsap.fromTo(
                event.currentTarget,
                { x: direction.current * 18, opacity: 0.35 },
                {
                  x: 0,
                  opacity: 1,
                  duration: 0.4,
                  ease: "power2.out",
                  clearProps: "transform,opacity",
                },
              );
            }}
            src={project.images[slide]}
            alt={`${project.title} interface, screenshot ${slide + 1} of ${project.images.length}`}
            fill
            sizes="(max-width: 760px) 92vw, 62vw"
          />
          <span className="project-shutter" aria-hidden="true" />
        </div>
        <div className="gallery-controls">
          <span aria-live="polite" aria-atomic="true">
            {String(slide + 1).padStart(2, "0")} /{" "}
            {String(project.images.length).padStart(2, "0")}{" "}
            <span className="gallery-caption">Screenshots</span>
          </span>
          {project.images.length > 1 && (
            <div>
              <button
                type="button"
                aria-label={`Previous ${project.title} screenshot`}
                onClick={() => changeSlide(-1)}
              >
                <ArrowLeft size={19} />
              </button>
              <button
                type="button"
                aria-label={`Next ${project.title} screenshot`}
                onClick={() => changeSlide(1)}
              >
                <ArrowRight size={19} />
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="project-info">
        <span className="project-role">{project.role}</span>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <ul className="tags" aria-label="Technologies">
          {project.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
        <AnimatedDetails
          className="project-details"
          summary={
            <>
              What I built <Plus size={18} />
            </>
          }
        >
          <ul>
            {project.contributions.map((contribution) => (
              <li key={contribution}>{contribution}</li>
            ))}
          </ul>
        </AnimatedDetails>
        <div className="project-links">
          {project.demo !== "#" && (
            <a
              className="button button-dark"
              href={project.demo}
              target="_blank"
              rel="noreferrer"
            >
              Visit website <ArrowUpRight size={18} />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          )}
          {project.code !== "#" && (
            <a
              className="button button-dark"
              href={project.code}
              target="_blank"
              rel="noreferrer"
            >
              View source <Github size={18} />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="projects section-space">
      <div className="section-heading">
        <EditorialTitle lines={["Selected", "projects."]} />
        <div className="heading-note">
          <span className="small-orbit" aria-hidden="true">
            ↙
          </span>
          <p>Web platforms and backend development.</p>
        </div>
      </div>
      <div className="featured-projects">
        {featuredProjects.map((project, index) => (
          <ProjectFeature project={project} index={index} key={project.title} />
        ))}
      </div>
      <div className="project-archive">
        <div className="archive-intro">
          <h3>Project archive.</h3>
          <p>University and personal projects.</p>
          <Github size={36} strokeWidth={1.5} />
        </div>
        <div className="archive-list">
          {otherProjects.map((project) => (
            <AnimatedDetails
              key={project.title}
              summary={
                <>
                  <span>{project.title.trim()}</span>
                  <Plus size={22} />
                </>
              }
            >
              <div className="archive-detail">
                <p>{project.description}</p>
                <ul className="tags">
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
                {project.code !== "#" ? (
                  <a
                    className="text-link"
                    href={project.code}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Explore source <ArrowUpRight size={18} />
                  </a>
                ) : (
                  <span className="private-note">
                    Private project · Details available on request
                  </span>
                )}
              </div>
            </AnimatedDetails>
          ))}
        </div>
      </div>
    </section>
  );
}
