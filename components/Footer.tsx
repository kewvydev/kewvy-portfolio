import Image from "next/image";
import { ArrowUp, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <a className="footer-logo" href="#home">
          <Image
            className="footer-kmark"
            src="/favicon.png"
            alt=""
            width={1254}
            height={1254}
            sizes="58px"
          />
          <span className="footer-wordmark">
            kewvy<sup aria-hidden="true">✳</sup>
          </span>
        </a>
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
