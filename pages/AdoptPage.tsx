import React from 'react';
import { Link } from 'react-router-dom';
import AnimalCard from '../components/AnimalCard';
import { MOCK_ANIMALS } from '../constants';
import { SparklesIcon } from '../components/icons';

const AdoptPage: React.FC = () => {
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
                  <SparklesIcon className="w-16 h-16 flex-shrink-0" />
                  <div>
                      <h2 className="text-3xl font-bold">Not sure where to start?</h2>
                      <p className="text-lg mt-1 opacity-90">Take our AI-powered quiz to find your perfect match!</p>
                  </div>
              </div>
              <div className="bg-white text-orange-600 font-bold py-3 px-8 rounded-full text-lg hover:bg-orange-100 transition-colors whitespace-nowrap">
                  Find My Match
              </div>
          </div>
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {MOCK_ANIMALS.map(animal => (
          <AnimalCard key={animal.id} animal={animal} />
        ))}
      </div>
    </div>
  );
};

export default AdoptPage;