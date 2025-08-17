import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import CtaBand from "../components/CtaBand";
import WhatsAppButton from "../components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Carros de Arrastre | Fabricación y Venta",
    template: "%s | Carros de Arrastre",
  },
  description:
    "Fabricación y venta de carros de arrastre (trailers) profesionales. Modelos a medida, calidad superior y entrega rápida.",
  metadataBase: new URL("https://example.com"),
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "Carros de Arrastre | Fabricación y Venta",
    description:
      "Fabricación y venta de carros de arrastre (trailers) profesionales. Modelos a medida, calidad superior y entrega rápida.",
    url: "https://example.com",
    siteName: "Carros de Arrastre",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Carros de Arrastre" }],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Carros de Arrastre | Fabricación y Venta",
    description:
      "Fabricación y venta de carros de arrastre (trailers) profesionales.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-dvh bg-background text-foreground`}
      >
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Carros de Arrastre",
              url: "https://example.com",
              telephone: "+56900000000",
              address: { "@type": "PostalAddress", addressCountry: "CL" },
              areaServed: "Chile",
            }),
          }}
        />
        <div className="relative flex min-h-dvh flex-col">
          <Nav />
          <main className="flex-1">{children}</main>
          <CtaBand />
          <Footer />
          <WhatsAppButton />
        </div>
      </body>
    </html>
  );
}
