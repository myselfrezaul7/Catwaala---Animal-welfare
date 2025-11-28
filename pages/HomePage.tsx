
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HeartIcon, UsersIcon } from '../components/icons';
import VolunteerFormModal from '../components/VolunteerFormModal';
import DonationModal from '../components/DonationModal';
import { useLanguage } from '../contexts/LanguageContext';

const HomePage: React.FC = () => {
  const [isVolunteerModalOpen, setIsVolunteerModalOpen] = useState(false);
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <>
      <div className="w-full">
        {/* Hero Section */}
        <section 
          className="relative text-white min-h-[85vh] flex items-center justify-center overflow-hidden rounded-b-[3rem] shadow-2xl" 
        >
          <div className="absolute inset-0">
             <img src="https://picsum.photos/seed/cat-hero-2/1600/900" alt="Hero" className="w-full h-full object-cover" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-slate-900/90 backdrop-blur-[2px]"></div>
          
          <div className="relative text-center z-10 p-4 sm:p-6 max-w-5xl mx-auto animate-fade-in-up">
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-sm font-medium tracking-wider uppercase text-orange-300">
                Welcome to Catwaala
            </div>
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-extrabold drop-shadow-2xl leading-tight mb-8 tracking-tight">
              {t('home.hero.title')}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-slate-100/90 drop-shadow-lg mb-12 max-w-3xl mx-auto font-light px-4 leading-relaxed">
              {t('home.hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5 px-4">
              <Link
                to="/adopt"
                className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-12 rounded-full text-lg transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/40 shadow-xl border border-orange-400/50 backdrop-blur-sm"
              >
                {t('home.hero.meetButton')}
              </Link>
              <a
                href="https://www.petbhai.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-lg border border-white/30 text-white font-bold py-4 px-12 rounded-full text-lg transition-all transform hover:scale-105 shadow-xl"
              >
                {t('home.hero.shopButton')}
              </a>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4 sm:px-6 space-y-16 md:space-y-32">
              {/* About Section */}
              <div className="bg-white/30 dark:bg-black/30 backdrop-blur-2xl border border-white/40 dark:border-white/10 rounded-[3rem] shadow-2xl p-8 md:p-20 text-center transform transition-all duration-500 hover:shadow-orange-500/10 relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent dark:from-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                  <h2 className="text-3xl md:text-6xl font-bold text-slate-800 dark:text-slate-100 mb-6 md:mb-10 font-serif tracking-tight">{t('home.mission.title')}</h2>
                  <p className="max-w-5xl mx-auto text-base md:text-2xl text-slate-700 dark:text-slate-200 leading-relaxed font-light">
                      {t('home.mission.text')}
                  </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-16">
                  {/* Donate Section */}
                  <div className="group bg-white/30 dark:bg-black/30 backdrop-blur-2xl border border-white/40 dark:border-white/10 rounded-[2.5rem] shadow-2xl p-6 md:p-16 text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-3xl hover:shadow-red-500/10 flex flex-col items-center relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-64 h-64 bg-red-400/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
                      <div className="inline-flex p-5 rounded-full bg-red-500/10 backdrop-blur-md border border-red-500/20 text-red-500 mb-6 group-hover:scale-110 transition-transform duration-300">
                        <HeartIcon className="w-8 h-8 md:w-16 md:h-16" />
                      </div>
                      <h2 className="text-xl md:text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">{t('home.donate.title')}</h2>
                      <p className="text-sm md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8 h-auto flex-grow hidden sm:block">
                          {t('home.donate.text')}
                      </p>
                      <button 
                        onClick={() => setIsDonationModalOpen(true)}
                        className="w-full sm:w-auto bg-red-500 text-white font-bold py-3 md:py-4 px-8 md:px-12 rounded-full text-sm md:text-xl hover:bg-red-600 hover:shadow-lg hover:shadow-red-500/30 transition-all transform hover:scale-105"
                      >
                          {t('home.donate.button')}
                      </button>
                  </div>
                  
                  {/* Volunteer Section */}
                  <div className="group bg-white/30 dark:bg-black/30 backdrop-blur-2xl border border-white/40 dark:border-white/10 rounded-[2.5rem] shadow-2xl p-6 md:p-16 text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-3xl hover:shadow-orange-500/10 flex flex-col items-center relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-64 h-64 bg-orange-400/10 rounded-full blur-3xl -ml-32 -mt-32"></div>
                      <div className="inline-flex p-5 rounded-full bg-orange-500/10 backdrop-blur-md border border-orange-500/20 text-orange-500 mb-6 group-hover:scale-110 transition-transform duration-300">
                        <UsersIcon className="w-8 h-8 md:w-16 md:h-16" />
                      </div>
                      <h2 className="text-xl md:text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">{t('home.volunteer.title')}</h2>
                      <p className="text-sm md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8 h-auto flex-grow hidden sm:block">
                          {t('home.volunteer.text')}
                      </p>
                      <button 
                          onClick={() => setIsVolunteerModalOpen(true)}
                          className="w-full sm:w-auto bg-orange-500 text-white font-bold py-3 md:py-4 px-8 md:px-12 rounded-full text-sm md:text-xl hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-500/30 transition-all transform hover:scale-105"
                      >
                          {t('home.volunteer.button')}
                      </button>
                  </div>
              </div>
          </div>
        </section>
      </div>
      <VolunteerFormModal 
        isOpen={isVolunteerModalOpen} 
        onClose={() => setIsVolunteerModalOpen(false)} 
      />
      <DonationModal
        isOpen={isDonationModalOpen}
        onClose={() => setIsDonationModalOpen(false)}
      />
    </>
  );
};

export default HomePage;
