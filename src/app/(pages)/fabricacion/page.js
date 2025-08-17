import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";

const fases = [
  { t: "Diseño", d: "Definimos dimensiones, ejes y accesorios según tu uso." },
  { t: "Corte y armado", d: "Estructura con acero de alta resistencia y soldadura profesional." },
  { t: "Pintura y acabado", d: "Tratamiento anticorrosivo y pintura poliuretano." },
  { t: "Eléctrico y pruebas", d: "Instalación de luces LED, frenos (opcional) y control de calidad." },
];

export default function Page() {
  return (
    <main>
      <section className="py-14 sm:py-20">
        <Container>
          <SectionTitle eyebrow="Proceso" title="Fabricación" subtitle="Transparencia en cada etapa para asegurar un resultado superior." />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {fases.map((f) => (
              <div key={f.t} className="rounded-xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-base font-medium">{f.t}</h3>
                <p className="mt-2 text-sm text-foreground/70">{f.d}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
