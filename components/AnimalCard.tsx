
import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import type { Animal } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

interface AnimalCardProps {
  animal: Animal;
}

const AnimalCard: React.FC<AnimalCardProps> = ({ animal }) => {
  const { t } = useLanguage();

  return (
    <Link 
        to={`/adopt/${animal.id}`} 
        className="group block bg-white/70 dark:bg-slate-900/60 backdrop-blur-lg rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl border border-white/40 dark:border-slate-700/50 transition-all duration-500 ease-out transform hover:-translate-y-2 hover:rotate-1 animate-float"
        style={{ animationDelay: `${animal.id * 0.2}s` }}
    >
      <div className="relative overflow-hidden h-48 sm:h-56 md:h-64 bg-slate-100 dark:bg-slate-800">
        <img 
            src={animal.imageUrl} 
            alt={animal.name} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
        />
        <div className="absolute top-4 right-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold shadow-sm text-orange-500 border border-white/20">
            {animal.breed}
        </div>
      </div>
      
      <div className="p-6 flex flex-col">
        <div className="flex justify-between items-baseline mb-2">
             <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100">{animal.name}</h3>
             <span className="text-slate-500 dark:text-slate-400 text-sm font-medium">{animal.age}</span>
        </div>
        
        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
            {animal.description}
        </p>

        <div className="mt-auto">
          <div className="w-full bg-slate-100 dark:bg-slate-800/50 text-orange-600 dark:text-orange-400 font-semibold py-3 rounded-xl text-center group-hover:bg-orange-500 group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-md">
            {t('animalCard.viewDetails')}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default memo(AnimalCard);
