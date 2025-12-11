
import React from 'react';
import { NavLink } from 'react-router-dom';
import { HeartIcon, FacebookIcon, InstagramIcon, YouTubeIcon, TikTokIcon, EnvelopeIcon } from './icons';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-transparent text-slate-600 dark:text-slate-400 py-8 mt-auto">
      <div className="container mx-auto px-6 text-center space-y-6">

        <div className="flex justify-center flex-wrap gap-x-6 gap-y-2 text-base font-medium">
            <NavLink to="/adopt" className="hover:text-orange-600 dark:hover:text-orange-400">{t('nav.adopt')}</NavLink>
            <NavLink to="/report" className="hover:text-orange-600 dark:hover:text-orange-400">{t('nav.report')}</NavLink>
            <NavLink to="/our-impact" className="hover:text-orange-600 dark:hover:text-orange-400">{t('footer.ourImpact')}</NavLink>
            <NavLink to="/ai-vet" className="hover:text-orange-600 dark:hover:text-orange-400">{t('nav.aiVet')}</NavLink>
            <NavLink to="/faq" className="hover:text-orange-600 dark:hover:text-orange-400">{t('footer.faq')}</NavLink>
        </div>
        
        <div className="flex justify-center items-center space-x-4 sm:space-x-6">
          <a 
            href="https://www.facebook.com/Catwaala/" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Facebook" 
            title="Facebook"
            className="group p-3 rounded-full bg-white/50 dark:bg-slate-800/50 hover:bg-white dark:hover:bg-slate-800 shadow-sm hover:shadow-xl hover:shadow-[#1877F2]/30 transition-all duration-300 transform hover:-translate-y-2 hover:scale-110"
          >
            <FacebookIcon className="w-6 h-6 text-slate-600 dark:text-slate-400 group-hover:text-[#1877F2] transition-colors duration-300" />
          </a>
          <a 
            href="https://www.instagram.com/catwaala/" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Instagram" 
            title="Instagram"
            className="group p-3 rounded-full bg-white/50 dark:bg-slate-800/50 hover:bg-white dark:hover:bg-slate-800 shadow-sm hover:shadow-xl hover:shadow-[#E4405F]/30 transition-all duration-300 transform hover:-translate-y-2 hover:scale-110"
          >
            <InstagramIcon className="w-6 h-6 text-slate-600 dark:text-slate-400 group-hover:text-[#E4405F] transition-colors duration-300" />
          </a>
          <a 
            href="https://www.youtube.com/@catwaala" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="YouTube" 
            title="YouTube"
            className="group p-3 rounded-full bg-white/50 dark:bg-slate-800/50 hover:bg-white dark:hover:bg-slate-800 shadow-sm hover:shadow-xl hover:shadow-[#FF0000]/30 transition-all duration-300 transform hover:-translate-y-2 hover:scale-110"
          >
            <YouTubeIcon className="w-6 h-6 text-slate-600 dark:text-slate-400 group-hover:text-[#FF0000] transition-colors duration-300" />
          </a>
          <a 
            href="https://www.tiktok.com/@catwaala" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="TikTok" 
            title="TikTok"
            className="group p-3 rounded-full bg-white/50 dark:bg-slate-800/50 hover:bg-white dark:hover:bg-slate-800 shadow-sm hover:shadow-xl hover:shadow-black/20 dark:hover:shadow-white/20 transition-all duration-300 transform hover:-translate-y-2 hover:scale-110"
          >
            <TikTokIcon className="w-6 h-6 text-slate-600 dark:text-slate-400 group-hover:text-black dark:group-hover:text-white transition-colors duration-300" />
          </a>
        </div>
        
        <a 
            href="mailto:catwaala@gmail.com" 
            title="Email Us"
            className="inline-flex items-center justify-center space-x-2 text-slate-600 dark:text-slate-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
        >
          <EnvelopeIcon className="w-6 h-6" />
          <span>catwaala@gmail.com</span>
        </a>

        <p className="text-sm">
          &copy; {new Date().getFullYear()} CATWAALA.
        </p>

      </div>
    </footer>
  );
};

export default Footer;
