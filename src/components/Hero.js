import Container from "./Container";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 left-1/2 h-80 w-[60rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-500/20 via-sky-400/20 to-cyan-400/20 blur-3xl"/>
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(40rem_30rem_at_10%_10%,rgba(59,130,246,.08),transparent),radial-gradient(30rem_25rem_at_90%_20%,rgba(14,165,233,.08),transparent)]" />
        <div className="absolute inset-0 -z-10 opacity-[0.03]" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'160\\' height=\\'160\\' viewBox=\\'0 0 40 40\\'><g fill=\\'none\\' stroke=\\'%23fff\\' stroke-width=\\'0.5\\' opacity=\\'0.6\\'><path d=\\'M0 20h40M20 0v40\\'/></g></svg>')" }} />
      </div>
      <Container className="py-16 sm:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-foreground/70">
              <span className="size-1.5 rounded-full bg-green-400 animate-pulse" />
              Fabricación a medida y entrega rápida
            </span>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">Carros de Arrastre Profesionales</h1>
            <p className="mt-4 text-foreground/70">Diseñados para durar. Fabricamos y vendemos trailers para carga, uso comercial y proyectos especiales. Calidad, seguridad y estética en un diseño minimalista.</p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link href="/contacto" className="animate-[pulse_2.5s_ease-in-out_infinite] rounded-lg bg-blue-600 px-4 py-2.5 text-white shadow-sm shadow-blue-600/30 hover:bg-blue-500">Solicitar cotización</Link>
              <Link href="/productos" className="rounded-lg border border-white/15 px-4 py-2.5 text-foreground hover:bg-white/5">Ver productos</Link>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 shadow-2xl">
              <div className="h-full w-full grid place-items-center">
                <svg viewBox="0 0 200 120" className="h-56 w-80 text-white/70">
                  <rect x="10" y="50" width="160" height="35" rx="6" className="fill-transparent stroke-current" strokeWidth="2" />
                  <circle cx="45" cy="92" r="10" className="fill-transparent stroke-current" strokeWidth="2" />
                  <circle cx="135" cy="92" r="10" className="fill-transparent stroke-current" strokeWidth="2" />
                  <path d="M170 55 L190 55 L190 80 L170 80" className="fill-transparent stroke-current" strokeWidth="2" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        {/* Trusted by / logos marquee */}
        <div className="mt-12 overflow-hidden">
          <div className="mb-3 text-xs uppercase tracking-widest text-foreground/50">Confiado por</div>
          <div className="flex gap-10 whitespace-nowrap [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="animate-[scroll_18s_linear_infinite] inline-flex gap-10">
              {["Andes","Ruta","CargaPro","Ferro","Maxi","Rodar"].map((n) => (
                <span key={n} className="text-foreground/40 text-sm">{n}</span>
              ))}
              {["Andes","Ruta","CargaPro","Ferro","Maxi","Rodar"].map((n) => (
                <span key={`dup-${n}`} className="text-foreground/40 text-sm">{n}</span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
