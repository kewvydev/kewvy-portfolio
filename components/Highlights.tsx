import EditorialTitle from "@/components/EditorialTitle";
import Image from "next/image";
import { ArrowUpRight, Asterisk } from "lucide-react";
import { featuredResearch, highlights } from "@/lib/portfolio";

export default function Highlights() {
  return (
    <section id="highlights" className="highlights section-space">
      <div className="section-heading">
        <EditorialTitle lines={["Research &", "competitions."]} />
        <p>Human–computer interaction and team challenges.</p>
      </div>
      <article className="research">
        <div className="research-cover">
          <Image
            src="/highlights/thumbnail.jpeg"
            alt="Preview of the immediate interaction systems research paper"
            fill
            sizes="(max-width: 760px) 90vw, 35vw"
          />
          <span className="research-sticker">
            Field notes
            <br />
            <Asterisk size={34} />
          </span>
        </div>
        <div className="research-content">
          <h3>
            The Impact of Immediate Interaction Systems in User Experience of
            Traditional Digital Interfaces
          </h3>
          <p>
            How do short-form content platforms and LLM-based assistants
            influence our tolerance, efficiency, and satisfaction with
            traditional interfaces?
          </p>
          <p className="research-context">
            University research prepared in the style of an IEEE Access
            submission. Not submitted for peer review.
          </p>
          <ul className="tags">
            {["UX Research", "HCI", "Usability", "Cognitive Workload"].map(
              (tag) => (
                <li key={tag}>{tag}</li>
              ),
            )}
          </ul>
          <a
            className="button button-dark"
            href={featuredResearch.articleUrl}
            target="_blank"
            rel="noreferrer"
          >
            Read the paper <ArrowUpRight size={18} />
            <span className="sr-only"> (PDF, opens in a new tab)</span>
          </a>
        </div>
      </article>
      <div className="highlights-list">
        {highlights.map((highlight) => (
          <article key={highlight.title}>
            <span>{highlight.type}</span>
            <h3>{highlight.title}</h3>
            <p>{highlight.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
