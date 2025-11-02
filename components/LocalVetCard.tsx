import React from 'react';
import type { LocalVet } from '../types';
import { MapPinIcon, PhoneIcon } from './icons';

interface LocalVetCardProps {
  vet: LocalVet;
}

const LocalVetCard: React.FC<LocalVetCardProps> = ({ vet }) => {
  return (
    <div className="bg-slate-100/30 dark:bg-slate-800/30 backdrop-blur-lg border border-white/20 dark:border-slate-700/50 rounded-2xl shadow-xl p-6 flex flex-col justify-between transform hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
      <div>
        <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">{vet.name}</h3>
        <div className="mt-4 space-y-3 text-slate-600 dark:text-slate-300">
          <div className="flex items-start gap-3">
            <MapPinIcon className="w-5 h-5 mt-1 flex-shrink-0 text-slate-500 dark:text-slate-400" />
            <p>{vet.address}</p>
          </div>
          <div className="flex items-center gap-3">
            <PhoneIcon className="w-5 h-5 flex-shrink-0 text-slate-500 dark:text-slate-400" />
            <a href={`tel:${vet.phone}`} className="hover:underline">{vet.phone}</a>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <a 
          href={vet.googleMapsUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-full block text-center bg-orange-500 text-white font-bold py-3 px-4 rounded-lg hover:bg-orange-600 transition-colors"
        >
          View on Map
        </a>
      </div>
    </div>
  );
};

export default LocalVetCard;
