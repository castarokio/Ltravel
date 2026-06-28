type SplitLineProps = {
  text: string;
  className?: string;
};

export function SplitLine({ text, className = "" }: SplitLineProps) {
  return (
    <span
      className={`split-line-wrapper ${className}`}
      aria-label={text}
      style={{ display: "block", overflow: "hidden" }}
    >
      <span
        className="split-line-inner"
        style={{ display: "inline-block", willChange: "transform" }}
      >
        {text}
      </span>
    </span>
  );
}
