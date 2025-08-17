import Link from "next/link";
import Container from "./Container";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-16">
      <Container className="py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 text-sm">
          <div>
            <div className="inline-flex items-center gap-2">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 text-white">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M3 16l9-12 9 12-9 4-9-4z"/>
                </svg>
              </span>
              <span className="font-semibold">Carros de Arrastre</span>
            </div>
            <p className="mt-4 text-foreground/70 max-w-xs">Fabricación y venta de trailers profesionales, a medida y con estándares de calidad.</p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Empresa</h3>
            <ul className="mt-3 space-y-2 text-foreground/70">
              <li><Link href="/fabricacion" className="hover:text-foreground">Fabricación</Link></li>
              <li><Link href="/galeria" className="hover:text-foreground">Galería</Link></li>
              <li><Link href="/faq" className="hover:text-foreground">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Productos</h3>
            <ul className="mt-3 space-y-2 text-foreground/70">
              <li><Link href="/productos" className="hover:text-foreground">Catálogo</Link></li>
              <li><Link href="/contacto" className="hover:text-foreground">Cotización</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Contacto</h3>
            <ul className="mt-3 space-y-2 text-foreground/70">
              <li><a href="mailto:correo@carros.com" className="hover:text-foreground">correo@carros.com</a></li>
              <li><a href="tel:+56900000000" className="hover:text-foreground">+56 9 0000 0000</a></li>
              <li><span className="">Lun–Vie 9:00–18:00</span></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between text-xs text-foreground/60">
          <p>© {new Date().getFullYear()} Carros de Arrastre. Todos los derechos reservados.</p>
          <div className="flex items-center gap-4">
            <Link href="/politica-privacidad" className="hover:text-foreground">Privacidad</Link>
            <Link href="/terminos" className="hover:text-foreground">Términos</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
