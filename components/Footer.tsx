import { ArrowUp, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <a className="footer-logo" href="#home">
          kewvy<span aria-hidden="true">✳</span>
        </a>
        <p>
          Full Stack Developer
          <br />
          Baja California, Mexico
        </p>
        <div className="footer-links">
          <a
            href="https://github.com/kewvydev"
            target="_blank"
            rel="noreferrer"
          >
            GitHub <ArrowUpRight size={17} />
          </a>
          <a
            href="https://www.linkedin.com/in/kevin-gonzalez-torres/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn <ArrowUpRight size={17} />
          </a>
          <a href="/Kevin_Gonzalez_Resume.pdf" download>
            Download CV <ArrowUpRight size={17} />
          </a>
        </div>
        <a className="back-top" href="#home" aria-label="Back to top">
          <ArrowUp size={24} />
        </a>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Kevin Gonzalez</span>
        <span>Made with ❤️ by kewvy.</span>
      </div>
    </footer>
  );
}
