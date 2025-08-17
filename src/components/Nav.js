"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/productos", label: "Productos" },
  { href: "/fabricacion", label: "Fabricación" },
  { href: "/galeria", label: "Galería" },
  { href: "/faq", label: "FAQ" },
  { href: "/contacto", label: "Contacto" },
];

export default function Nav() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-background/70 border-b border-white/10">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8">
        <Link href="/" className="group inline-flex items-center gap-2">
          <span className="relative grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 text-white shadow-sm shadow-blue-500/30">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M3 16l9-12 9 12-9 4-9-4z"/>
            </svg>
          </span>
          <span className="font-semibold tracking-tight text-lg">Carros de Arrastre</span>
        </Link>
        <div className="hidden md:flex items-center gap-6 text-sm">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`transition-colors ${pathname === l.href ? "text-foreground" : "text-foreground/70 hover:text-foreground"}`}
            >
              {l.label}
            </Link>
          ))}
        </div>
        <div className="md:hidden">
          <details className="group relative">
            <summary className="list-none rounded-md border border-white/15 px-3 py-2 text-sm hover:bg-white/5 cursor-pointer">Menú</summary>
            <div className="absolute right-0 mt-2 w-48 rounded-lg border border-white/10 bg-background/95 p-2 shadow-xl">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`block rounded-md px-3 py-2 text-sm hover:bg-white/5 ${pathname === l.href ? "text-foreground" : "text-foreground/70"}`}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </details>
        </div>
      </nav>
    </header>
  );
}
