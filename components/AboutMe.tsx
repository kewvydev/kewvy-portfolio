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

          A Software Engineering student with hands-on experience building
          web applications, backend<br/>systems, and AI-powered solutions.<br />
        </p>
        <p>
          I enjoy solving problems, exploring new technologies, and turning ideas into
          practical products. Through academic, professional, and personal projects, I&apos;ve
          developed strong technical and communication skills while tackling real-world challenges. <br/><br/>

          I&apos;m always looking for opportunities to grow as a software engineer, contribute to meaningful products,
          and collaborate with teams where I can keep learning and building impactful software. <br/><br/>
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
            B.S. Software Engineering and Emerging Technologies
          </strong>
        </div>
      </div>
    </section>
  );
}
