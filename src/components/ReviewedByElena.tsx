import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { BadgeCheck } from 'lucide-react';

const reviewedByTranslations = {
  es: {
    text: 'Contenido revisado por Elena Sentís — Óptica Optometrista · Col. 18568 · Directora Técnica de Looptica',
    linkLabel: 'Ver perfil de Elena',
  },
  ca: {
    text: 'Contingut revisat per Elena Sentís — Òptica Optometrista · Col. 18568 · Directora Tècnica de Looptica',
    linkLabel: 'Veure perfil d\'Elena',
  },
  en: {
    text: 'Content reviewed by Elena Sentís — Optician Optometrist · Col. 18568 · Technical Director of Looptica',
    linkLabel: 'View Elena\'s profile',
  },
  de: {
    text: 'Inhalt geprüft von Elena Sentís — Optikerin Optometristin · Col. 18568 · Technische Leiterin von Looptica',
    linkLabel: 'Elenas Profil ansehen',
  },
};

const ReviewedByElena: React.FC = () => {
  const { language } = useLanguage();
  const t = reviewedByTranslations[language];

  return (
    <section className="container mx-auto px-4 pb-16">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gray-50 border border-gray-100 rounded-xl p-6 flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="shrink-0">
            <BadgeCheck className="w-8 h-8 text-[#55afa9]" aria-hidden="true" />
          </div>
          <div className="flex-grow">
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              {t.text}
            </p>
            <Link
              to={`/${language}/about`}
              className="inline-block mt-2 text-sm font-medium text-[#55afa9] hover:text-[#ca6664] transition-colors underline-offset-2 hover:underline"
            >
              {t.linkLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewedByElena;
