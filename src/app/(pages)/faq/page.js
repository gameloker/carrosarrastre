import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";

const faqs = [
  { q: "¿Hacen carros a medida?", a: "Sí, adaptamos dimensiones, capacidad y accesorios a tu necesidad." },
  { q: "¿Tiempos de entrega?", a: "Depende del modelo, normalmente 2 a 4 semanas." },
  { q: "¿Incluye documentación?", a: "Entregamos factura y documentación para la inscripción correspondiente." },
];

export default function Page() {
  return (
    <main>
      <section className="py-14 sm:py-20">
        <Container>
          <SectionTitle eyebrow="Ayuda" title="Preguntas frecuentes" />
          <div className="mt-10 space-y-4">
            {faqs.map((f) => (
              <details key={f.q} className="rounded-xl border border-white/10 bg-white/5 p-4">
                <summary className="cursor-pointer font-medium">{f.q}</summary>
                <p className="mt-2 text-sm text-foreground/70">{f.a}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
