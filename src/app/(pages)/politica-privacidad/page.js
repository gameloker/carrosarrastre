import Container from "@/components/Container";

export default function Page() {
  return (
    <main>
      <section className="py-14 sm:py-20">
        <Container>
          <h1 className="text-3xl font-semibold">Política de Privacidad</h1>
          <p className="mt-4 text-foreground/70">Este sitio utiliza tus datos solo para responder consultas y cotizaciones.</p>
        </Container>
      </section>
    </main>
  );
}
