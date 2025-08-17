"use client";
import { useState } from "react";

export default function LightboxGallery({ items = [] }) {
  const [active, setActive] = useState(null);
  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setActive(idx)}
            className="group relative aspect-video overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
          >
            <div className="absolute inset-0 grid place-items-center text-foreground/60">Imagen {idx + 1}</div>
          </button>
        ))}
      </div>

      {active !== null && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/70 p-4" onClick={() => setActive(null)}>
          <div className="relative w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <div className="aspect-video overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800" />
            <button
              type="button"
              onClick={() => setActive(null)}
              className="absolute -top-3 -right-3 grid h-8 w-8 place-items-center rounded-full bg-white text-black"
              aria-label="Cerrar"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </>
  );
}
