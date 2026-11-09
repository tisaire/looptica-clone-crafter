import React, { useState } from 'react';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';

export interface BrandModel {
  name: string;
  src: string;
}

export interface BrandEntry {
  brand: string;
  tagline: string;
  description: string;
  badge?: string;
  models: BrandModel[];
}

const BrandCard = ({ entry, enlargeLabel }: { entry: BrandEntry; enlargeLabel: string }) => {
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(false);
  const current = entry.models[active];

  return (
    <article className="flex flex-col rounded-lg border border-border bg-card shadow-sm overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="relative block w-full aspect-[4/3] bg-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        aria-label={`${enlargeLabel}: ${entry.brand} ${current.name}`}
      >
        <img
          src={current.src}
          alt={`${entry.brand} ${current.name}`}
          loading="lazy"
          className="h-full w-full object-contain"
        />
        {entry.badge && (
          <span className="absolute left-3 top-3 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
            {entry.badge}
          </span>
        )}
      </button>

      <div className="grid grid-cols-3 gap-2 border-t border-border p-2 bg-background">
        {entry.models.map((m, i) => (
          <button
            key={m.name}
            type="button"
            onClick={() => setActive(i)}
            aria-pressed={i === active}
            aria-label={`${entry.brand} ${m.name}`}
            className={`aspect-[4/3] rounded border transition ${
              i === active ? 'border-primary ring-1 ring-primary' : 'border-border opacity-70 hover:opacity-100'
            }`}
          >
            <img src={m.src} alt="" loading="lazy" className="h-full w-full object-contain" />
          </button>
        ))}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-semibold mb-1">{entry.brand}</h3>
        <p className="font-medium text-primary mb-3">{entry.tagline}</p>
        <p className="text-muted-foreground">{entry.description}</p>
        <p className="mt-4 text-sm text-muted-foreground">{current.name}</p>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-4xl bg-background">
          <DialogTitle>{entry.brand} · {current.name}</DialogTitle>
          <img src={current.src} alt={`${entry.brand} ${current.name}`} className="w-full h-auto object-contain" />
          <div className="grid grid-cols-3 gap-2">
            {entry.models.map((m, i) => (
              <button
                key={m.name}
                type="button"
                onClick={() => setActive(i)}
                aria-pressed={i === active}
                aria-label={`${entry.brand} ${m.name}`}
                className={`aspect-[4/3] rounded border ${i === active ? 'border-primary ring-1 ring-primary' : 'border-border'}`}
              >
                <img src={m.src} alt="" className="h-full w-full object-contain" />
              </button>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </article>
  );
};

const BrandGallery = ({ brands, enlargeLabel }: { brands: BrandEntry[]; enlargeLabel: string }) => (
  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
    {brands.map((b) => (
      <BrandCard key={b.brand} entry={b} enlargeLabel={enlargeLabel} />
    ))}
  </div>
);

export default BrandGallery;
