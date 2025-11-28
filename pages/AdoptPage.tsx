
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AnimalCard from '../components/AnimalCard';
import { MOCK_ANIMALS } from '../constants';
import { SparklesIcon, EnvelopeIcon } from '../components/icons';
import type { Animal } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

// A simple skeleton component for the animal card
const AnimalCardSkeleton: React.FC = () => (
    <div className="bg-white/20 dark:bg-black/20 backdrop-blur-xl border border-white/30 dark:border-white/10 rounded-3xl shadow-lg overflow-hidden flex flex-col animate-pulse">
      <div className="w-full h-44 md:h-64 bg-slate-300/50 dark:bg-slate-700/50"></div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="h-6 bg-slate-300/50 dark:bg-slate-700/50 rounded-full w-3/4 mb-3"></div>
        <div className="h-4 bg-slate-300/50 dark:bg-slate-700/50 rounded-full w-1/2 mb-5"></div>
        <div className="h-4 bg-slate-300/50 dark:bg-slate-700/50 rounded-full mt-2"></div>
      </div>
    </div>
);


const AdoptPage: React.FC = () => {
  const [animals, setAnimals] = useState<Animal[]>([]);
  const [loading, setLoading] = useState(true);
  const { t } = useLanguage();

  useEffect(() => {
      setLoading(true);
      // Simulate API call
      setTimeout(() => {
          setAnimals(MOCK_ANIMALS);
          setLoading(false);
      }, 1000);
  }, []);

  return (
    <div className="container mx-auto px-4 sm:px-6 py-12 md:py-16">
      <h1 className="text-4xl md:text-6xl font-extrabold text-center text-slate-800 dark:text-slate-100 mb-6 drop-shadow-sm">{t('adopt.title')}</h1>
      <p className="text-lg md:text-xl text-center text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-12 md:mb-16 px-4 font-light">
        {t('adopt.subtitle')}
      </p>

      <div className="mb-16 md:mb-20">
        <Link to="/perfect-match" className="block bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-[2.5rem] shadow-2xl p-8 md:p-12 transform hover:scale-[1.02] transition-transform duration-300 relative overflow-hidden group">
          <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/20 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
              <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
                  <div className="p-4 bg-white/20 rounded-full backdrop-blur-md">
                    <SparklesIcon className="w-12 h-12 md:w-16 md:h-16 flex-shrink-0" />
                  </div>
                  <div>
                      <h2 className="text-3xl md:text-4xl font-bold">{t('adopt.quiz.title')}</h2>
                      <p className="text-lg md:text-xl mt-2 opacity-90 font-medium">{t('adopt.quiz.subtitle')}</p>
                  </div>
              </div>
              <div className="bg-white/90 text-orange-600 font-bold py-4 px-10 rounded-full text-lg shadow-lg hover:bg-white transition-colors whitespace-nowrap">
                  {t('adopt.quiz.button')}
              </div>
          </div>
        </Link>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10">
        {loading ? (
          <>
            <AnimalCardSkeleton />
            <AnimalCardSkeleton />
            <AnimalCardSkeleton />
            <AnimalCardSkeleton />
            <AnimalCardSkeleton />
            <AnimalCardSkeleton />
          </>
        ) : (
          animals.map(animal => (
            <AnimalCard key={animal.id} animal={animal} />
          ))
        )}
      </div>

      <section className="mt-20 md:mt-32 bg-white/40 dark:bg-black/30 backdrop-blur-2xl border border-white/40 dark:border-white/10 rounded-[3rem] shadow-2xl p-10 md:p-20 text-center relative overflow-hidden">
        <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-orange-400/10 rounded-full blur-3xl"></div>
        <div className="relative z-10">
            <div className="inline-flex p-5 rounded-full bg-orange-500/10 backdrop-blur-md border border-orange-500/20 text-orange-500 mb-6">
                 <EnvelopeIcon className="w-10 h-10 md:w-12 md:h-12" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-800 dark:text-slate-100 mb-6 md:mb-8">{t('adopt.rehome.title')}</h2>
            <p className="max-w-4xl mx-auto text-base md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed mb-10 font-light">
                {t('adopt.rehome.text')}
            </p>
            <a 
            href="mailto:catwaala@gmail.com?subject=Cat Rehoming Inquiry"
            className="inline-flex items-center justify-center gap-3 bg-orange-500 text-white font-bold py-4 px-10 rounded-full text-lg hover:bg-orange-600 transition-transform transform hover:scale-105 duration-300 shadow-xl border border-orange-400/50 backdrop-blur-sm"
            >
            <EnvelopeIcon className="w-6 h-6" />
            <span>{t('adopt.rehome.button')}</span>
            </a>
        </div>
      </section>
    </div>
  );
};

export default AdoptPage;
