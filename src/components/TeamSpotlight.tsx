import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

type L = { en: string; es: string; ca: string; de: string; it: string };
interface Props { heading: L; name: string; image: string; role: L; bio: L; credential?: L; }

const aboutLabel: L = { en: 'Meet the team →', es: 'Conoce al equipo →', ca: "Coneix l'equip →", de: 'Das Team kennenlernen →', it: 'Scopri il team →' };

const TeamSpotlight = ({ heading, name, image, role, bio, credential }: Props) => {
  const { language } = useLanguage();
  return (
    <section className="bg-gray-50 p-8 rounded-lg mb-12">
      <h2 className="text-2xl font-semibold mb-6">{heading[language]}</h2>
      <div className="flex flex-col sm:flex-row gap-6 items-start">
        <img src={image} alt={`${name} – ${role[language]} – looptica Poblenou`} loading="lazy" className="w-32 h-32 rounded-full object-cover shrink-0" />
        <div>
          <p className="text-xl font-semibold">{name}</p>
          <p className="text-[#55afa9] font-medium mb-3">{role[language]}</p>
          <p className="mb-3">{bio[language]}</p>
          {credential && <p className="text-sm text-muted-foreground mb-3">{credential[language]}</p>}
          <Link to={`/${language}/about`} className="text-[#55afa9] underline font-medium">{aboutLabel[language]}</Link>
        </div>
      </div>
    </section>
  );
};

export default TeamSpotlight;
