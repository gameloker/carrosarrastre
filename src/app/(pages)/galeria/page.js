import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import LightboxGallery from "@/components/LightboxGallery";

const items = Array.from({ length: 9 }).map((_, i) => ({ id: i + 1 }));

export default function Page() {
  return (
    <main>
      <section className="py-14 sm:py-20">
        <Container>
          <SectionTitle eyebrow="Proyectos" title="Galería" subtitle="Mira algunos de nuestros trabajos y terminaciones." />
          <div className="mt-10">
            <LightboxGallery items={items} />
          </div>
        </Container>
      </section>
    </main>
  );
}
