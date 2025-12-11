
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
        className="group block bg-white/70 dark:bg-slate-900/60 backdrop-blur-lg rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl border border-white/40 dark:border-slate-700/50 transition-all duration-300 ease-out transform hover:-translate-y-1 active:scale-95"
    >
      <div className="relative overflow-hidden h-36 xs:h-40 sm:h-56 md:h-64 bg-slate-100 dark:bg-slate-800">
        <img 
            src={animal.imageUrl} 
            alt={animal.name} 
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
        />
        <div className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-xs font-bold shadow-sm text-orange-500 border border-white/20">
            {animal.breed}
        </div>
      </div>
      
      <div className="p-3 sm:p-5 flex flex-col h-[160px] sm:h-[220px]">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-baseline mb-1 sm:mb-2 gap-0.5">
             <h3 className="text-base sm:text-2xl font-bold text-slate-800 dark:text-slate-100 line-clamp-1">{animal.name}</h3>
             <span className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm font-medium">{animal.age}</span>
        </div>
        
        <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-6 line-clamp-3 sm:line-clamp-3 flex-grow">
            {animal.description}
        </p>

        <div className="mt-auto">
          <div className="w-full bg-slate-100 dark:bg-slate-800/50 text-orange-600 dark:text-orange-400 font-semibold py-2 sm:py-3 rounded-xl text-center text-xs sm:text-base group-hover:bg-orange-500 group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-md">
            {t('animalCard.viewDetails')}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default memo(AnimalCard);
