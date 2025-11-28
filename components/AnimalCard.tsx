
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
    <Link to={`/adopt/${animal.id}`} className="group block bg-white/40 dark:bg-black/30 backdrop-blur-xl rounded-3xl overflow-hidden shadow-lg border border-white/30 dark:border-white/10 hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-500 ease-out transform hover:-translate-y-2 h-full flex flex-col">
      <div className="relative overflow-hidden h-44 sm:h-56 md:h-64">
        <img 
            src={animal.imageUrl} 
            alt={animal.name} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80"></div>
        <div className="absolute bottom-3 left-4 right-4">
             <h3 className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg">{animal.name}</h3>
        </div>
      </div>
      
      <div className="p-5 md:p-6 flex flex-col flex-grow relative">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3 gap-2">
             <span className="self-start bg-orange-100/80 dark:bg-orange-900/50 backdrop-blur-sm text-orange-700 dark:text-orange-300 text-[10px] md:text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide border border-orange-200/50 dark:border-orange-700/50 truncate max-w-full">{animal.breed}</span>
             <span className="text-slate-600 dark:text-slate-300 text-xs md:text-sm font-medium bg-white/30 dark:bg-black/20 px-2 py-0.5 rounded-lg backdrop-blur-sm">{animal.age}</span>
        </div>
        
        <p className="text-slate-700 dark:text-slate-300 text-xs md:text-sm leading-relaxed mb-6 line-clamp-3 flex-grow hidden sm:block font-medium">
            {animal.description}
        </p>

        <div className="mt-auto pt-4 border-t border-slate-200/50 dark:border-white/10">
          <div className="w-full bg-white/50 dark:bg-white/10 backdrop-blur-md text-slate-700 dark:text-slate-200 font-semibold py-3 rounded-2xl text-xs md:text-base text-center group-hover:bg-orange-500 group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-orange-500/30">
            {t('animalCard.viewDetails')}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default memo(AnimalCard);
