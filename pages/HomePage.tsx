
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
        {/* Antigravity Hero Section with Glassmorphism */}
        <section 
          className="relative min-h-[85vh] flex items-center justify-center overflow-hidden" 
        >
            {/* Floating Shapes Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-[10%] w-32 h-32 bg-orange-500/10 rounded-full blur-3xl animate-float-delayed"></div>
                <div className="absolute bottom-20 right-[10%] w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
                <div className="absolute top-1/2 right-[20%] w-24 h-24 bg-red-500/10 rounded-full blur-2xl animate-float-fast"></div>
                <div className="absolute bottom-1/3 left-[15%] w-40 h-40 bg-green-500/10 rounded-full blur-3xl animate-float-delayed"></div>
            </div>

          <div className="relative text-center z-10 p-4 sm:p-6 max-w-5xl mx-auto">
            <div className="inline-block px-4 py-1.5 mb-8 rounded-full bg-white/50 dark:bg-slate-800/50 backdrop-blur-md border border-white/20 text-sm font-semibold tracking-wider uppercase text-slate-600 dark:text-slate-300 animate-fade-in shadow-sm">
                Welcome to Catwaala
            </div>
            <h1 className="text-6xl sm:text-7xl md:text-8xl font-black text-slate-800 dark:text-slate-100 mb-8 tracking-tighter leading-tight animate-float drop-shadow-sm">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-700 to-slate-900 dark:from-white dark:to-slate-300">Gravity</span> Defying <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">Love</span> for Cats.
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed animate-fade-in-up">
              {t('home.hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 px-4 animate-fade-in-up">
              <Link
                to="/adopt"
                className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-10 rounded-2xl shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:-translate-y-1 transition-all duration-300"
              >
                {t('home.hero.meetButton')}
              </Link>
              <a
                href="https://www.petbhai.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-white/70 dark:bg-slate-800/70 backdrop-blur-md text-slate-800 dark:text-white border border-white/40 dark:border-slate-600 font-bold py-4 px-10 rounded-2xl hover:bg-white dark:hover:bg-slate-700 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                {t('home.hero.shopButton')}
              </a>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 space-y-16">
              {/* About Section - Floating Glass Card */}
              <div className="bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl rounded-[2rem] shadow-xl p-10 md:p-16 text-center transform hover:-translate-y-2 transition-transform duration-500 border border-white/40 dark:border-slate-700/50 animate-float-delayed">
                  <h2 className="text-3xl md:text-5xl font-bold text-slate-800 dark:text-slate-100 mb-6">
                      <span className="text-orange-500">Our</span> Mission
                  </h2>
                  <p className="max-w-4xl mx-auto text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
                      {t('home.mission.text')}
                  </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-2 gap-6 md:gap-12">
                  {/* Donate Section */}
                  <div className="group bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl rounded-[2rem] shadow-xl p-8 md:p-12 text-center transition-all duration-500 hover:-translate-y-3 hover:rotate-1 hover:shadow-2xl border border-white/40 dark:border-slate-700/50 flex flex-col items-center animate-float">
                      <div className="p-5 rounded-full bg-red-100 dark:bg-red-900/30 text-red-500 mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                        <HeartIcon className="w-10 h-10" />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-100 mb-4">{t('home.donate.title')}</h2>
                      <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed mb-8 flex-grow hidden sm:block">
                          {t('home.donate.text')}
                      </p>
                      <button 
                        onClick={() => setIsDonationModalOpen(true)}
                        className="bg-red-500 text-white font-bold py-3 px-8 rounded-xl hover:bg-red-600 shadow-lg shadow-red-500/30 hover:scale-105 transition-all"
                      >
                          {t('home.donate.button')}
                      </button>
                  </div>
                  
                  {/* Volunteer Section */}
                  <div className="group bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl rounded-[2rem] shadow-xl p-8 md:p-12 text-center transition-all duration-500 hover:-translate-y-3 hover:-rotate-1 hover:shadow-2xl border border-white/40 dark:border-slate-700/50 flex flex-col items-center animate-float-delayed">
                      <div className="p-5 rounded-full bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                        <UsersIcon className="w-10 h-10" />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-100 mb-4">{t('home.volunteer.title')}</h2>
                      <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed mb-8 flex-grow hidden sm:block">
                          {t('home.volunteer.text')}
                      </p>
                      <button 
                          onClick={() => setIsVolunteerModalOpen(true)}
                          className="bg-yellow-500 text-white font-bold py-3 px-8 rounded-xl hover:bg-yellow-600 shadow-lg shadow-yellow-500/30 hover:scale-105 transition-all"
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
