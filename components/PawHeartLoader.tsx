
import React from 'react';
import { HeartIcon, CatPawIcon } from './icons';

interface PawHeartLoaderProps {
  text?: string;
  subText?: string;
  isError?: boolean;
  onRetry?: () => void;
  retryText?: string;
}

const PawHeartLoader: React.FC<PawHeartLoaderProps> = ({ 
  text, 
  subText, 
  isError = false, 
  onRetry,
  retryText = "Try Again"
}) => {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-center min-h-[300px] w-full">
      <div className="relative w-28 h-28 flex items-center justify-center mb-6">
        {/* Outer Ring / Ping Effect for Loading */}
        {!isError && (
          <div className="absolute inset-0 bg-orange-200 dark:bg-orange-500/20 rounded-full animate-ping opacity-20"></div>
        )}
        
        {/* Heart Background */}
        <HeartIcon 
            className={`w-full h-full relative z-10 drop-shadow-2xl transition-all duration-500 ${
                isError ? 'text-red-500 rotate-12' : 'text-orange-500 animate-[pulse_1.5s_ease-in-out_infinite]'
            }`} 
        />
        
        {/* Paw Center */}
        <div className={`absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[45%] text-white/95 ${!isError ? 'animate-[bounce_1.5s_infinite]' : ''}`}>
            <CatPawIcon className="w-12 h-12" />
        </div>
      </div>
      
      {/* Text Content */}
      <div className="space-y-2 max-w-md mx-auto">
        {text && (
            <h2 className={`text-2xl font-bold tracking-tight ${
                isError ? 'text-red-600 dark:text-red-400' : 'text-slate-800 dark:text-slate-100'
            }`}>
                {text}
            </h2>
        )}
        
        {subText && (
            <p className="text-slate-600 dark:text-slate-400 font-medium">
                {subText}
            </p>
        )}
      </div>

      {/* Retry Button for Errors */}
      {isError && onRetry && (
        <button
          onClick={onRetry}
          className="mt-8 bg-red-500 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-red-600 shadow-lg hover:shadow-red-500/30 transition-all transform hover:scale-105 active:scale-95"
        >
          {retryText}
        </button>
      )}
    </div>
  );
};

export default PawHeartLoader;
