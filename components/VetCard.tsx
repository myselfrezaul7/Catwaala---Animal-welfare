
import React, { memo } from 'react';
import type { Vet } from '../types';
import { VideoCameraIcon } from './icons';

interface VetCardProps {
  vet: Vet;
  onBookAppointment: (vet: Vet) => void;
}

const VetCard: React.FC<VetCardProps> = ({ vet, onBookAppointment }) => {
  return (
    <div className="bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl border border-white/40 dark:border-slate-700/50 rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden flex flex-col text-center items-center p-6 transform hover:-translate-y-2 transition-all duration-300 ease-in-out">
      <div className="relative mb-4">
        <div className="p-1 rounded-full bg-gradient-to-tr from-orange-400 to-red-500 shadow-md">
            <img className="w-32 h-32 rounded-full object-cover border-4 border-white dark:border-slate-800" src={vet.imageUrl} alt={`Dr. ${vet.name}`} loading="lazy" />
        </div>
        <span className={`absolute bottom-2 right-2 block h-5 w-5 rounded-full ${vet.isOnline ? 'bg-green-500' : 'bg-slate-400'} ring-4 ring-white dark:ring-slate-800`}></span>
      </div>
      <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">{vet.name}</h3>
      <p className="text-slate-600 dark:text-slate-400 font-medium text-sm flex-grow mt-1">{vet.specialization}</p>
      <p className={`mt-3 font-bold text-xs uppercase tracking-wide px-3 py-1 rounded-full ${vet.isOnline ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : 'bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400'}`}>
        {vet.isOnline ? 'Available Now' : 'Offline'}
      </p>
      <button 
        onClick={() => onBookAppointment(vet)}
        disabled={!vet.isOnline}
        className="mt-6 w-full bg-orange-500 text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center space-x-2 hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/30 disabled:bg-slate-300 dark:disabled:bg-slate-700 disabled:shadow-none disabled:cursor-not-allowed hover:scale-105 active:scale-95"
      >
        <VideoCameraIcon className="w-5 h-5" />
        <span>Book Appointment</span>
      </button>
    </div>
  );
};

export default memo(VetCard);
