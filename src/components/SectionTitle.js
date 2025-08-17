export default function SectionTitle({ eyebrow, title, subtitle, center = false }) {
  return (
    <div className={center ? "text-center" : "text-left"}>
      {eyebrow && (
        <p className="text-xs uppercase tracking-widest text-foreground/60">{eyebrow}</p>
      )}
      <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
      {subtitle && (
        <p className={`mt-2 max-w-2xl text-foreground/70 ${center ? "mx-auto" : ""}`}>{subtitle}</p>
      )}
    </div>
  );
}
