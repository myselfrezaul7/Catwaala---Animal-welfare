import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AnimalCard from '../components/AnimalCard';
import { MOCK_ANIMALS } from '../constants';
import { SparklesIcon, EnvelopeIcon } from '../components/icons';
import type { Animal } from '../types';

// A simple skeleton component for the animal card
const AnimalCardSkeleton: React.FC = () => (
    <div className="bg-slate-100/30 dark:bg-slate-800/30 backdrop-blur-lg border border-white/20 dark:border-slate-700/50 rounded-2xl shadow-xl overflow-hidden flex flex-col animate-pulse">
      <div className="w-full h-56 bg-slate-300 dark:bg-slate-700"></div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="h-7 bg-slate-300 dark:bg-slate-700 rounded w-3/4 mb-2"></div>
        <div className="h-4 bg-slate-300 dark:bg-slate-700 rounded w-1/2 mb-4"></div>
        <div className="h-4 bg-slate-300 dark:bg-slate-700 rounded mt-4"></div>
        <div className="h-4 bg-slate-300 dark:bg-slate-700 rounded mt-2 w-5/6"></div>
      </div>
       <div className="p-4 bg-slate-500/10 border-t border-white/20 dark:border-slate-700/50 mt-auto">
          <div className="h-6 bg-slate-300 dark:bg-slate-700 rounded w-1/2 mx-auto"></div>
        </div>
    </div>
);


const AdoptPage: React.FC = () => {
  const [animals, setAnimals] = useState<Animal[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      setLoading(true);
      // Simulate API call
      setTimeout(() => {
          setAnimals(MOCK_ANIMALS);
          setLoading(false);
      }, 1000);
  }, []);

  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-4xl md:text-5xl font-bold text-center text-slate-800 dark:text-slate-100 mb-4">Find Your New Best Friend</h1>
      <p className="text-lg text-center text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-12">
        These wonderful animals are waiting for a loving family to call their own. Click on a pet's profile to learn more about them and to start the adoption process.
      </p>

      <div className="mb-16">
        <Link to="/perfect-match" className="block bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-2xl shadow-xl p-8 md:p-10 transform hover:scale-105 transition-transform duration-300">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center space-x-4">
                  <SparklesIcon className="w-12 h-12 md:w-16 md:h-16 flex-shrink-0" />
                  <div>
                      <h2 className="text-2xl md:text-3xl font-bold">Not sure where to start?</h2>
                      <p className="text-lg mt-1 opacity-90">Take our AI-powered quiz to find your perfect match!</p>
                  </div>
              </div>
              <div className="bg-white text-orange-600 font-bold py-3 px-8 rounded-full text-lg hover:bg-orange-100 transition-colors whitespace-nowrap mt-4 md:mt-0">
                  Find My Match
              </div>
          </div>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
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

      <section className="mt-24 bg-slate-100/30 dark:bg-slate-800/30 backdrop-blur-lg border border-white/20 dark:border-slate-700/50 rounded-2xl shadow-xl p-8 md:p-12 text-center">
        <EnvelopeIcon className="w-16 h-16 text-orange-500 mx-auto mb-4" />
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-100 mb-6">Need to Rehome Your Cat?</h2>
        <p className="max-w-3xl mx-auto text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-8">
            We understand that circumstances change. If you need to find a new, loving home for your cat, we can help. Please email us high-quality, clear photos (no videos, please!) and a detailed description of your pet's personality, needs, and history. Our team will review your submission to be featured on our adoption page.
        </p>
        <a 
          href="mailto:catwaala@gmail.com?subject=Cat Rehoming Inquiry"
          className="inline-flex items-center justify-center gap-2 bg-orange-500 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-orange-600 transition-transform transform hover:scale-105 duration-300 shadow-lg"
        >
          <EnvelopeIcon className="w-5 h-5" />
          <span>Email Us Your Request</span>
        </a>
      </section>
    </div>
  );
};

export default AdoptPage;