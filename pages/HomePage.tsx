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
          className="relative bg-cover bg-center text-white min-h-[65vh] flex items-center justify-center" 
          style={{ backgroundImage: "url('https://picsum.photos/seed/cat-hero/1200/800')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20"></div>
          <div className="relative text-center z-10 p-4">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold drop-shadow-2xl">{t('home.hero.title')}</h1>
            <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto drop-shadow-lg">
              {t('home.hero.subtitle')}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/adopt"
                className="inline-block bg-orange-500 text-white font-bold py-3 px-10 rounded-full text-lg hover:bg-orange-600 transition-all transform hover:scale-105 duration-300 shadow-lg"
              >
                {t('home.hero.meetButton')}
              </Link>
              <a
                href="https://www.petbhai.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-transparent border-2 border-orange-500 text-white font-bold py-3 px-10 rounded-full text-lg hover:bg-orange-500 transition-all transform hover:scale-105 duration-300 shadow-lg"
              >
                {t('home.hero.shopButton')}
              </a>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20">
          <div className="container mx-auto px-6 space-y-12">
              {/* About Section */}
              <div className="bg-slate-100/30 dark:bg-slate-800/30 backdrop-blur-lg border border-white/20 dark:border-slate-700/50 rounded-2xl shadow-xl p-8 md:p-12 text-center">
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-100 mb-6">{t('home.mission.title')}</h2>
                  <p className="max-w-3xl mx-auto text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                      {t('home.mission.text')}
                  </p>
              </div>
              
              {/* Donate Section */}
              <div className="bg-slate-100/30 dark:bg-slate-800/30 backdrop-blur-lg border border-white/20 dark:border-slate-700/50 rounded-2xl shadow-xl p-8 md:p-12 text-center">
                  <HeartIcon className="w-16 h-16 text-red-500 mx-auto mb-4" />
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-100 mb-6">{t('home.donate.title')}</h2>
                  <p className="max-w-3xl mx-auto text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-8">
                      {t('home.donate.text')}
                  </p>
                  <button 
                    onClick={() => setIsDonationModalOpen(true)}
                    className="bg-red-500 text-white font-bold py-4 px-10 rounded-full text-xl hover:bg-red-600 transition-transform transform hover:scale-105 duration-300 shadow-lg"
                  >
                      {t('home.donate.button')}
                  </button>
              </div>
              
              {/* Volunteer Section */}
              <div className="bg-slate-100/30 dark:bg-slate-800/30 backdrop-blur-lg border border-white/20 dark:border-slate-700/50 rounded-2xl shadow-xl p-8 md:p-12 text-center">
                  <UsersIcon className="w-16 h-16 text-orange-500 mx-auto mb-4" />
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-100 mb-6">{t('home.volunteer.title')}</h2>
                  <p className="max-w-3xl mx-auto text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-8">
                      {t('home.volunteer.text')}
                  </p>
                  <button 
                      onClick={() => setIsVolunteerModalOpen(true)}
                      className="bg-orange-500 text-white font-bold py-4 px-10 rounded-full text-xl hover:bg-orange-600 transition-transform transform hover:scale-105 duration-300 shadow-lg"
                  >
                      {t('home.volunteer.button')}
                  </button>
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