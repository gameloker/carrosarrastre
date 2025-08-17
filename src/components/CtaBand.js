import Container from "./Container";
import Link from "next/link";

export default function CtaBand() {
  return (
    <section className="relative border-y border-white/10 bg-gradient-to-r from-blue-600/10 via-cyan-500/10 to-sky-500/10">
      <Container className="py-10 sm:py-12">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div>
            <h3 className="text-xl font-semibold tracking-tight">¿Listo para tu carro a medida?</h3>
            <p className="text-sm text-foreground/70">Te asesoramos y enviamos una cotización en 24-48h.</p>
          </div>
          <div className="flex gap-3">
            <Link href="/contacto" className="rounded-lg bg-blue-600 px-4 py-2.5 text-white hover:bg-blue-500">Solicitar cotización</Link>
            <Link href="/productos" className="rounded-lg border border-white/15 px-4 py-2.5 text-foreground hover:bg-white/5">Ver catálogo</Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
