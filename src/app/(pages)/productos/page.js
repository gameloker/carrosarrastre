import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";

const productos = [
  { title: "Carga Liviana", desc: "Ideal para uso doméstico y pequeñas cargas.", specs: "500 kg | 1.8m x 1.2m | Freno opcional" },
  { title: "Comercial", desc: "Resistencia y capacidad para negocios.", specs: "750 kg | 2.5m x 1.5m | Eje reforzado" },
  { title: "Plataforma", desc: "Versátil para maquinaria y proyectos.", specs: "1000 kg | 3.0m x 1.8m | Rampas" },
];

export default function Page() {
  return (
    <main>
      <section className="py-14 sm:py-20">
        <Container>
          <SectionTitle eyebrow="Catálogo" title="Nuestros productos" subtitle="Carros de arrastre fabricados con estándares profesionales y acabados premium." />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {productos.map((p) => (
              <div key={p.title} className="group rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition hover:-translate-y-0.5 hover:bg-white/10">
                <h3 className="text-lg font-medium">{p.title}</h3>
                <p className="mt-2 text-sm text-foreground/70">{p.desc}</p>
                <p className="mt-4 text-xs text-foreground/60">{p.specs}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
