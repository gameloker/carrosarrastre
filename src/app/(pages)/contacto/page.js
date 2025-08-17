import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";

export default function Page() {
  return (
    <main>
      <section className="py-14 sm:py-20">
        <Container>
          <SectionTitle eyebrow="Contacto" title="Solicitar cotización" subtitle="Completa el formulario y te responderemos en 24-48h." />
          <form className="mt-8 grid gap-4 sm:max-w-xl">
            <input className="w-full rounded-lg border border-white/15 bg-background px-4 py-2.5" placeholder="Nombre" />
            <input className="w-full rounded-lg border border-white/15 bg-background px-4 py-2.5" placeholder="Email" type="email" />
            <input className="w-full rounded-lg border border-white/15 bg-background px-4 py-2.5" placeholder="Teléfono" />
            <textarea className="w-full rounded-lg border border-white/15 bg-background px-4 py-2.5" rows="5" placeholder="Cuéntanos qué necesitas" />
            <button className="rounded-lg bg-blue-600 px-4 py-2.5 text-white hover:bg-blue-500" type="button">Enviar</button>
          </form>
          <p className="mt-6 text-sm text-foreground/60">También puedes escribirnos a correo@carros.com</p>
        </Container>
      </section>
    </main>
  );
}
