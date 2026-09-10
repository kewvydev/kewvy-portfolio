import Image from "next/image";
import { ArrowDown, ArrowUpRight, Asterisk } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="home" className="hero paper-grid">
      <div className="hero-composition">
        <div className="hero-copy">
          <h1 className="hero-name">
            <span className="hero-mask">
              <span className="hero-line">KEVIN</span>
            </span>
            <span className="hero-mask">
              <span className="hero-line">GONZALEZ</span>
            </span>
          </h1>
          <div className="hero-bottom">
            <span className="hero-star" aria-hidden="true">
              <Asterisk />
            </span>
            <div>
              <p>
                Building fast and scalable
                <br className="desktop-break" /> web applications.
              </p>
              <div className="hero-actions">
                <a href="#projects" className="button button-dark">
                  Explore my work <ArrowDown size={18} />
                </a>
                <a href="#contact" className="text-link">
                  Contact me <ArrowUpRight size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="portrait-collage">
          <div className="portrait-outline" aria-hidden="true" />
          <figure className="portrait-print">
            <div className="portrait-image">
              <Image
                src="/art/kevin-portrait-editorial.png"
                alt="Editorial portrait of Kevin Gonzalez"
                fill
                sizes="(max-width: 600px) 75vw, (max-width: 960px) 40vw, 34vw"
                priority
              />
            </div>
            <figcaption>
              <span> </span>
              <span>This is me!</span>
            </figcaption>
          </figure>
          <div className="availability">Full Stack Developer</div>
        </div>
      </div>
      <div className="hero-baseline">
        <span> </span>
        <a href="#projects">
          Selected projects <ArrowDown size={16} />
        </a>
      </div>
    </section>
  );
}
