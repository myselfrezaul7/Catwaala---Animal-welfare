
import React from 'react';
import type { LocalVet } from '../types';
import { MapPinIcon, PhoneIcon } from './icons';

interface LocalVetCardProps {
  vet: LocalVet;
}

const LocalVetCard: React.FC<LocalVetCardProps> = ({ vet }) => {
  return (
    <div className="bg-white/30 dark:bg-slate-900/40 backdrop-blur-xl border border-white/40 dark:border-white/10 rounded-3xl shadow-lg p-6 flex flex-col justify-between transform hover:shadow-2xl hover:shadow-orange-500/10 hover:-translate-y-1 transition-all duration-300 group">
      <div>
        <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">{vet.name}</h3>
        <div className="mt-4 space-y-3 text-slate-600 dark:text-slate-300">
          <div className="flex items-start gap-3">
            <div className="p-2 bg-white/40 dark:bg-white/10 rounded-full backdrop-blur-sm shadow-sm">
                <MapPinIcon className="w-4 h-4 text-orange-500" />
            </div>
            <p className="text-sm font-medium leading-relaxed">{vet.address}</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white/40 dark:bg-white/10 rounded-full backdrop-blur-sm shadow-sm">
                <PhoneIcon className="w-4 h-4 text-orange-500" />
            </div>
            <a href={`tel:${vet.phone}`} className="text-sm font-medium hover:underline decoration-orange-500">{vet.phone}</a>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <a 
          href={vet.googleMapsUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-full block text-center bg-orange-500/90 text-white font-bold py-3 px-4 rounded-xl hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-500/30 transition-all backdrop-blur-sm"
        >
          View on Map
        </a>
      </div>
    </div>
  );
};

export default LocalVetCard;
