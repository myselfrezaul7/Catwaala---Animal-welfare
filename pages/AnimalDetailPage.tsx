import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MOCK_ANIMALS } from '../constants';
import AdoptionForm from '../components/AdoptionForm';
import { HeartIcon } from '../components/icons';
import type { Animal } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

const AnimalDetailSkeleton: React.FC = () => (
    <div className="container mx-auto px-6 py-12 animate-pulse">
        <div className="bg-slate-100/30 dark:bg-slate-800/30 backdrop-blur-lg border border-white/20 dark:border-slate-700/50 rounded-2xl shadow-xl overflow-hidden md:flex">
            <div className="md:w-1/2 bg-slate-300 dark:bg-slate-700 min-h-[300px] md:min-h-[500px]"></div>
            <div className="p-8 md:p-12 md:w-1/2 flex flex-col justify-between">
                <div>
                    <div className="h-12 bg-slate-300 dark:bg-slate-700 rounded w-3/4"></div>
                    <div className="h-6 bg-slate-300 dark:bg-slate-700 rounded w-1/2 mt-4"></div>
                    <div className="h-5 bg-slate-300 dark:bg-slate-700 rounded w-1/3 mt-6"></div>
                    <div className="space-y-3 mt-8">
                        <div className="h-5 bg-slate-300 dark:bg-slate-700 rounded"></div>
                        <div className="h-5 bg-slate-300 dark:bg-slate-700 rounded"></div>
                        <div className="h-5 bg-slate-300 dark:bg-slate-700 rounded w-5/6"></div>
                    </div>
                </div>
                <div className="mt-8">
                    <div className="w-full h-16 bg-slate-300 dark:bg-slate-700 rounded-lg"></div>
                </div>
            </div>
        </div>
    </div>
);


const AnimalDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [animal, setAnimal] = useState<Animal | undefined | null>(undefined); // undefined: loading, null: not found
  const [isFormOpen, setIsFormOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    // Simulate fetching animal data
    setAnimal(undefined);
    setTimeout(() => {
        const foundAnimal = MOCK_ANIMALS.find(a => a.id === Number(id));
        setAnimal(foundAnimal || null);
    }, 500);
  }, [id]);

  if (animal === undefined) {
    return <AnimalDetailSkeleton />;
  }

  if (animal === null) {
    return (
      <div className="text-center py-20 flex-grow flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-slate-800 dark:text-slate-100">{t('animalDetail.notFound.title')}</h1>
        <p className="text-slate-600 dark:text-slate-400 mt-4">{t('animalDetail.notFound.message')}</p>
        <Link to="/adopt" className="mt-8 inline-block bg-orange-500 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-orange-600 transition-colors">
            {t('animalDetail.notFound.button')}
        </Link>
      </div>
    );
  }

  return (
    <>
      <div className="container mx-auto px-6 py-12">
        <div className="bg-slate-100/30 dark:bg-slate-800/30 backdrop-blur-lg border border-white/20 dark:border-slate-700/50 rounded-2xl shadow-xl overflow-hidden md:flex">
            <div className="md:w-1/2">
                <img src={animal.imageUrl} alt={animal.name} className="w-full h-full object-cover min-h-[300px]" />
            </div>
            <div className="p-8 md:p-12 md:w-1/2 flex flex-col justify-between">
                <div>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-800 dark:text-slate-100">{animal.name}</h1>
                    <p className="text-xl text-slate-600 dark:text-slate-400 font-semibold mt-2">{animal.breed}</p>
                    <div className="mt-4 text-lg text-gray-500 dark:text-gray-400 flex items-center space-x-4">
                        <span>{animal.age} old</span>
                        <span className="text-gray-300 dark:text-gray-600">&bull;</span>
                        <span>{animal.gender}</span>
                    </div>
                    <p className="text-slate-700 dark:text-slate-300 mt-6 leading-relaxed text-lg">{animal.description}</p>
                </div>
                <div className="mt-8">
                    <button 
                        onClick={() => setIsFormOpen(true)}
                        className="w-full bg-orange-500 text-white font-bold py-4 px-6 rounded-lg text-xl hover:bg-orange-600 transition-all duration-300 flex items-center justify-center space-x-3 transform hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                        <HeartIcon className="w-6 h-6" />
                        <span>{t('animalDetail.applyButton', { name: animal.name })}</span>
                    </button>
                </div>
            </div>
        </div>
      </div>
      <AdoptionForm 
        animal={animal}
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
      />
    </>
  );
};

export default AnimalDetailPage;