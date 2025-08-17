import Hero from "@/components/Hero";
import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import Link from "next/link";

export default function Home() {
  const features = [
    { title: "Estructura reforzada", desc: "Chasis de acero, soldaduras certificadas y pintura anticorrosiva." },
    { title: "Seguridad y normativa", desc: "Iluminación LED, frenos opcionales y cumplimiento legal vigente." },
    { title: "A medida", desc: "Dimensiones, ejes, rampas y accesorios personalizados a tu proyecto." },
  ];

  const steps = [
    { n: "01", t: "Asesoría", d: "Te guiamos a elegir el carro ideal según tu uso." },
    { n: "02", t: "Fabricación", d: "Producción con control de calidad y tiempos claros." },
    { n: "03", t: "Entrega", d: "Despacho y documentación para salir a rodar." },
  ];

  return (
    <main>
      <Hero />

      <section className="py-14 sm:py-20">
        <Container>
          <SectionTitle eyebrow="Calidad" title="Construidos para durar" subtitle="Trailers minimalistas, profesionales y listos para el trabajo diario." center />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div key={f.title} className="group rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition hover:-translate-y-0.5 hover:bg-white/10">
                <div className="mb-3 h-10 w-10 rounded-lg bg-blue-600/15 text-blue-600 grid place-items-center group-hover:scale-105 transition">
                  <span className="text-sm">✓</span>
                </div>
                <h3 className="text-lg font-medium">{f.title}</h3>
                <p className="mt-2 text-sm text-foreground/70">{f.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-white/10 bg-white/5 py-14 sm:py-20">
        <Container>
          <SectionTitle eyebrow="Proceso" title="De la idea a la ruta" subtitle="Un flujo claro para que recibas tu carro sin sorpresas." center />
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {steps.map((s) => (
              <div key={s.n} className="rounded-xl border border-white/10 bg-background/60 p-6">
                <span className="text-xs text-foreground/60">{s.n}</span>
                <h3 className="mt-2 text-base font-medium">{s.t}</h3>
                <p className="mt-1 text-sm text-foreground/70">{s.d}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-20">
        <Container className="text-center">
          <SectionTitle eyebrow="Cotización" title="¿Listo para comenzar?" subtitle="Cuéntanos tu necesidad y te enviamos una propuesta en 24-48h." center />
          <div className="mt-8 flex items-center justify-center gap-4">
            <Link href="/contacto" className="rounded-lg bg-blue-600 px-4 py-2.5 text-white shadow-sm shadow-blue-600/30 hover:bg-blue-500">Contactar</Link>
            <Link href="/productos" className="rounded-lg border border-white/15 px-4 py-2.5 text-foreground hover:bg-white/5">Ver productos</Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
