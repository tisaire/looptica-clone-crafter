import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';

export interface BrandModel {
  name: string;
  src: string;
}

export interface BrandEntry {
  brand: string;
  tagline: string;
  description: string;
  models: BrandModel[];
}

const ThumbStrip = ({
  entry,
  active,
  onSelect,
  lazy,
}: {
  entry: BrandEntry;
  active: number;
  onSelect: (i: number) => void;
  lazy: boolean;
}) => {
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  useEffect(() => {
    refs.current[active]?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  }, [active]);

  return (
    <div className="flex gap-2 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-1">
      {entry.models.map((m, i) => (
        <button
          key={m.name}
          ref={(el) => (refs.current[i] = el)}
          type="button"
          onClick={() => onSelect(i)}
          aria-pressed={i === active}
          aria-label={`${entry.brand} ${m.name}`}
          className={`snap-start shrink-0 w-20 aspect-[4/3] rounded border bg-background transition ${
            i === active ? 'border-primary ring-1 ring-primary' : 'border-border opacity-70 hover:opacity-100'
          }`}
        >
          <img src={m.src} alt="" loading={lazy ? 'lazy' : undefined} className="h-full w-full object-contain" />
        </button>
      ))}
    </div>
  );
};


const NavButton = ({ dir, onClick }: { dir: 'prev' | 'next'; onClick: () => void }) => (
  <button
    type="button"
    onClick={onClick}
    aria-label={dir === 'prev' ? '‹' : '›'}
    className="flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition hover:bg-muted hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
  >
    {dir === 'prev' ? <ChevronLeft className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
  </button>
);

const BrandCard = ({ entry, enlargeLabel }: { entry: BrandEntry; enlargeLabel: string }) => {
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(false);
  const total = entry.models.length;
  const current = entry.models[active];
  const prev = () => setActive((a) => (a - 1 + total) % total);
  const next = () => setActive((a) => (a + 1) % total);

  const touchX = useRef<number | null>(null);
  const swipe = {
    onTouchStart: (e: React.TouchEvent) => (touchX.current = e.touches[0].clientX),
    onTouchEnd: (e: React.TouchEvent) => {
      if (touchX.current === null) return;
      const dx = e.changedTouches[0].clientX - touchX.current;
      if (Math.abs(dx) > 40) (dx < 0 ? next : prev)();
      touchX.current = null;
    },
  };

  return (
    <article className="flex flex-col rounded-lg border border-border bg-card shadow-sm overflow-hidden">
      <div className="relative" {...swipe}>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="block w-full aspect-[4/3] bg-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          aria-label={`${enlargeLabel}: ${entry.brand}`}
        >
          <img src={current.src} alt={entry.brand} loading="lazy" className="h-full w-full object-contain" />
        </button>
      </div>

      <div className="flex items-center justify-between gap-4 bg-background px-4 pb-3 pt-1">
        <NavButton dir="prev" onClick={prev} />
        <div className="flex flex-1 items-center gap-3">
          <div className="h-px flex-1 bg-border relative overflow-hidden">
            <span
              className="absolute inset-y-0 left-0 bg-primary transition-all duration-300"
              style={{ width: `${((active + 1) / total) * 100}%` }}
            />
          </div>
          <span className="text-xs tabular-nums tracking-widest text-muted-foreground">
            {String(active + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
          </span>
        </div>
        <NavButton dir="next" onClick={next} />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-semibold mb-1">{entry.brand}</h3>
        <p className="font-medium text-primary mb-3">{entry.tagline}</p>
        <p className="text-muted-foreground">{entry.description}</p>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-4xl bg-background">
          <DialogTitle>{entry.brand}</DialogTitle>
          <div className="relative" {...swipe}>
            <img src={current.src} alt={entry.brand} className="w-full h-auto object-contain" />
          </div>
          <div className="flex items-center justify-center gap-4">
            <NavButton dir="prev" onClick={prev} />
            <span className="text-xs tabular-nums tracking-widest text-muted-foreground">
              {String(active + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
            </span>
            <NavButton dir="next" onClick={next} />
          </div>
          <ThumbStrip entry={entry} active={active} onSelect={setActive} lazy={false} />
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
