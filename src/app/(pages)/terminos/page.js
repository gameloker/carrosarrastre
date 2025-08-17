import Container from "@/components/Container";

export default function Page() {
  return (
    <main>
      <section className="py-14 sm:py-20">
        <Container>
          <h1 className="text-3xl font-semibold">Términos y Condiciones</h1>
          <p className="mt-4 text-foreground/70">Los plazos, garantías y condiciones se informan en cada cotización.</p>
        </Container>
      </section>
    </main>
  );
}
