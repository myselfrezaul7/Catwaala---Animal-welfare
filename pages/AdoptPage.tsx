
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AnimalCard from '../components/AnimalCard';
import { MOCK_ANIMALS } from '../constants';
import { SparklesIcon, EnvelopeIcon } from '../components/icons';
import type { Animal } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

const AnimalCardSkeleton: React.FC = () => (
    <div className="bg-white/50 dark:bg-slate-800/50 border border-white/20 rounded-2xl shadow-sm overflow-hidden flex flex-col animate-pulse">
      <div className="w-full h-48 bg-slate-200 dark:bg-slate-700"></div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="h-6 bg-slate-200 dark:bg-slate-700 rounded w-3/4 mb-3"></div>
        <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-1/2 mb-5"></div>
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
      <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-black text-slate-800 dark:text-slate-100 mb-4 tracking-tight drop-shadow-sm">
            Find Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">Match</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-light">
            {t('adopt.subtitle')}
          </p>
      </div>

      <div className="mb-16 md:mb-20">
        <Link to="/perfect-match" className="block bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl border border-white/40 dark:border-slate-700/50 rounded-[2rem] shadow-xl p-8 md:p-12 transform hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
              <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
                  <div className="p-4 bg-orange-100 dark:bg-orange-900/30 rounded-2xl text-orange-500 shadow-inner animate-float-fast">
                    <SparklesIcon className="w-12 h-12 flex-shrink-0" />
                  </div>
                  <div>
                      <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-100">{t('adopt.quiz.title')}</h2>
                      <p className="text-lg md:text-xl mt-2 text-slate-600 dark:text-slate-400">{t('adopt.quiz.subtitle')}</p>
                  </div>
              </div>
              <div className="bg-orange-500 text-white font-bold py-4 px-10 rounded-xl shadow-lg shadow-orange-500/30 hover:bg-orange-600 transition-all whitespace-nowrap hover:scale-105">
                  {t('adopt.quiz.button')}
              </div>
          </div>
        </Link>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
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

      <section className="mt-20 md:mt-32 bg-white/50 dark:bg-slate-900/50 backdrop-blur-lg border border-white/40 dark:border-slate-700/50 rounded-[2.5rem] p-10 md:p-20 text-center animate-float-delayed shadow-xl">
        <div className="relative z-10">
            <div className="inline-flex p-5 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 mb-6 shadow-sm">
                 <EnvelopeIcon className="w-10 h-10" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-800 dark:text-slate-100 mb-6">{t('adopt.rehome.title')}</h2>
            <p className="max-w-4xl mx-auto text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-10">
                {t('adopt.rehome.text')}
            </p>
            <a 
            href="mailto:catwaala@gmail.com?subject=Cat Rehoming Inquiry"
            className="inline-flex items-center justify-center gap-3 bg-green-600 text-white font-bold py-4 px-10 rounded-xl hover:bg-green-700 transition-all transform hover:scale-105 shadow-lg shadow-green-600/30"
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
