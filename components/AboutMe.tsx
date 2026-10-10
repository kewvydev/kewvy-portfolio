import EditorialTitle from "@/components/EditorialTitle";
import Image from "next/image";
import { ArrowUpRight, Download } from "lucide-react";

export default function AboutMe() {
  return (
    <section id="about" className="about section-space">
      <div className="about-title">
        <EditorialTitle lines={["About", "Kevin."]} />
        <div className="about-asterisk" aria-hidden="true">
          <Image
            src="/art/parts/asterisk.png"
            alt=""
            width={457}
            height={480}
            sizes="(max-width: 600px) 76px, 175px"
          />
        </div>
      </div>
      <div className="about-body">
        <p className="large-copy">
          Hi, I&apos;m Kevin!<br />
          I&apos;m a software engineering student building web platforms,
          backend systems, and AI-driven workflows.
        </p>
        <p>
          At UABC, I work on Spring Boot services and help design a hybrid AWS
          architecture for incident investigation across university systems.
          Previously, I built a self-service booking platform at CleanMindset,
          taking features from stakeholder conversations through release.
          I enjoy working across product, backend, and cloud infrastructure to
          turn complex problems into useful software.
        </p>
        <div className="about-links">
          <a
            className="button button-dark"
            href="/Kevin_Gonzalez_Resume.pdf"
            download
          >
            Download my CV <Download size={18} />
          </a>
          <a
            className="text-link"
            href="https://www.linkedin.com/in/kevin-gonzalez-torres/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn <ArrowUpRight size={18} />
          </a>
        </div>
        <div className="education">
          <span>Currently studying</span>
          <strong>
            B.S. in Software and Emerging Technologies Engineering
          </strong>
        </div>
      </div>
    </section>
  );
}
