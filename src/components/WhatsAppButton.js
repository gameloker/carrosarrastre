"use client";

export default function WhatsAppButton() {
  const phone = "+56900000000"; // Ajusta tu número
  const message = encodeURIComponent("Hola, me gustaría cotizar un carro de arrastre.");
  const href = `https://wa.me/${phone}?text=${message}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-6 right-6 z-50 grid h-12 w-12 place-items-center rounded-full bg-green-500 text-white shadow-lg shadow-green-500/30 hover:bg-green-400"
    >
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden>
        <path d="M20.52 3.48A11.77 11.77 0 0012 0C5.37 0 .02 5.35.02 11.95c0 2.1.55 4.16 1.6 5.97L0 24l6.22-1.63a12.08 12.08 0 005.78 1.48h.01c6.61 0 11.96-5.35 11.96-11.95 0-3.2-1.25-6.2-3.45-8.42zM12 22.06h-.01a10.1 10.1 0 01-5.15-1.41l-.37-.22-3.69.97.99-3.6-.24-.37A10.04 10.04 0 1122.06 12c0 5.55-4.51 10.06-10.06 10.06zm5.52-7.46c-.3-.15-1.76-.87-2.04-.97-.28-.11-.48-.15-.68.15-.2.3-.78.97-.95 1.17-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.74-1.64-2.03-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.68-1.64-.93-2.24-.24-.58-.49-.5-.68-.51h-.58c-.2 0-.52.07-.8.37-.28.3-1.05 1.02-1.05 2.48 0 1.46 1.08 2.88 1.24 3.08.15.2 2.12 3.23 5.13 4.52.72.31 1.28.49 1.72.63.72.23 1.38.2 1.9.12.58-.09 1.76-.72 2.01-1.42.25-.7.25-1.3.18-1.42-.07-.12-.25-.2-.55-.35z"/>
      </svg>
    </a>
  );
}
