type Props = { lines: string[]; className?: string };

export default function EditorialTitle({ lines, className = "" }: Props) {
  return (
    <h2 className={`editorial-title ${className}`} aria-label={lines.join(" ")}>
      {lines.map((line) => (
        <span className="title-mask" key={line} aria-hidden="true">
          <span className="title-line">{line}</span>
        </span>
      ))}
    </h2>
  );
}
