import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HeartIcon, UsersIcon } from '../components/icons';
import VolunteerFormModal from '../components/VolunteerFormModal';
import DonationModal from '../components/DonationModal';

const HomePage: React.FC = () => {
  const [isVolunteerModalOpen, setIsVolunteerModalOpen] = useState(false);
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);

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
            <h1 className="text-5xl md:text-7xl font-extrabold drop-shadow-2xl">A Purrfect Friend Awaits.</h1>
            <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto drop-shadow-lg">
              At CATWAALA, we believe every animal deserves a loving home. Join us in our mission to rescue, rehabilitate, and rehome animals in need.
            </p>
            <Link
              to="/adopt"
              className="mt-8 inline-block bg-orange-500 text-white font-bold py-3 px-10 rounded-full text-lg hover:bg-orange-600 transition-all transform hover:scale-105 duration-300 shadow-lg"
            >
              Meet Our Animals
            </Link>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20">
          <div className="container mx-auto px-6 space-y-12">
              {/* About Section */}
              <div className="bg-slate-100/30 dark:bg-slate-800/30 backdrop-blur-lg border border-white/20 dark:border-slate-700/50 rounded-2xl shadow-xl p-8 md:p-12 text-center">
                  <h2 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-6">Our Mission</h2>
                  <p className="max-w-3xl mx-auto text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                      CATWAALA is dedicated to providing a safe haven for stray, abandoned, and abused animals. We offer medical care, nourishment, and a loving environment, with the ultimate goal of finding them a forever family. We are a community-powered organization, and your support makes all the difference.
                  </p>
              </div>
              
              {/* Donate Section */}
              <div className="bg-slate-100/30 dark:bg-slate-800/30 backdrop-blur-lg border border-white/20 dark:border-slate-700/50 rounded-2xl shadow-xl p-8 md:p-12 text-center">
                  <HeartIcon className="w-16 h-16 text-red-500 mx-auto mb-4" />
                  <h2 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-6">Your Support Saves Lives</h2>
                  <p className="max-w-3xl mx-auto text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-8">
                      Your generous donations help us provide food, shelter, and critical veterinary care to animals in need. Every contribution, big or small, helps us write a new chapter for a deserving animal.
                  </p>
                  <button 
                    onClick={() => setIsDonationModalOpen(true)}
                    className="bg-red-500 text-white font-bold py-4 px-10 rounded-full text-xl hover:bg-red-600 transition-transform transform hover:scale-105 duration-300 shadow-lg"
                  >
                      Donate Now
                  </button>
              </div>
              
              {/* Volunteer Section */}
              <div className="bg-slate-100/30 dark:bg-slate-800/30 backdrop-blur-lg border border-white/20 dark:border-slate-700/50 rounded-2xl shadow-xl p-8 md:p-12 text-center">
                  <UsersIcon className="w-16 h-16 text-orange-500 mx-auto mb-4" />
                  <h2 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-6">Become a Volunteer</h2>
                  <p className="max-w-3xl mx-auto text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-8">
                      Join our passionate team of volunteers and make a direct impact on the lives of animals. From shelter care to event support, there are many ways you can help.
                  </p>
                  <button 
                      onClick={() => setIsVolunteerModalOpen(true)}
                      className="bg-orange-500 text-white font-bold py-4 px-10 rounded-full text-xl hover:bg-orange-600 transition-transform transform hover:scale-105 duration-300 shadow-lg"
                  >
                      Learn More & Apply
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