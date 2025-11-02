import React from 'react';
import { MOCK_HAPPY_TAILS } from '../constants';
import { HeartIcon } from '../components/icons';

const HappyTailsPage: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-slate-100">Happy Tails</h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mt-4">
          Every adoption is a new beginning. Here are some of our beloved alumni thriving in their forever homes, all thanks to supporters like you.
        </p>
      </div>
      <div className="columns-2 md:columns-2 lg:columns-3 gap-8 space-y-8">
        {MOCK_HAPPY_TAILS.map(tail => (
          <div key={tail.id} className="break-inside-avoid bg-slate-100/30 dark:bg-slate-800/30 backdrop-blur-lg border border-white/20 dark:border-slate-700/50 rounded-2xl shadow-xl overflow-hidden group">
            <img src={tail.imageUrl} alt={tail.animalName} className="w-full h-auto object-cover" />
            <div className="p-6">
                <p className="text-slate-700 dark:text-slate-300 text-base italic">"{tail.story}"</p>
                <div className="flex items-center justify-end mt-4 text-sm">
                    <HeartIcon className="w-4 h-4 text-red-500 mr-2" />
                    <p className="font-semibold text-slate-600 dark:text-slate-400">
                        {tail.animalName}, adopted by {tail.adopterName}
                    </p>
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HappyTailsPage;