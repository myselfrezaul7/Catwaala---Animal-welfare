import React from 'react';
import { NavLink } from 'react-router-dom';
import { HeartIcon, FacebookIcon, InstagramIcon, YouTubeIcon, TikTokIcon, EnvelopeIcon } from './icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-transparent text-slate-600 dark:text-slate-400 py-8 mt-auto">
      <div className="container mx-auto px-6 text-center space-y-6">

        <div className="flex justify-center flex-wrap gap-x-6 gap-y-2 text-base font-medium">
            <NavLink to="/adopt" className="hover:text-orange-600 dark:hover:text-orange-400">Adopt</NavLink>
            <NavLink to="/report" className="hover:text-orange-600 dark:hover:text-orange-400">Report Rescue</NavLink>
            <NavLink to="/our-impact" className="hover:text-orange-600 dark:hover:text-orange-400">Our Impact</NavLink>
            <NavLink to="/ai-vet" className="hover:text-orange-600 dark:hover:text-orange-400">AI Vet</NavLink>
            <NavLink to="/faq" className="hover:text-orange-600 dark:hover:text-orange-400">FAQ</NavLink>
        </div>
        
        <div className="flex justify-center items-center space-x-6">
          <a href="#" aria-label="Facebook" className="text-slate-500 dark:text-slate-400 hover:text-orange-500 dark:hover:text-orange-400 transition-colors">
            <FacebookIcon className="w-7 h-7" />
          </a>
          <a href="#" aria-label="Instagram" className="text-slate-500 dark:text-slate-400 hover:text-orange-500 dark:hover:text-orange-400 transition-colors">
            <InstagramIcon className="w-7 h-7" />
          </a>
          <a href="#" aria-label="YouTube" className="text-slate-500 dark:text-slate-400 hover:text-orange-500 dark:hover:text-orange-400 transition-colors">
            <YouTubeIcon className="w-7 h-7" />
          </a>
          <a href="#" aria-label="TikTok" className="text-slate-500 dark:text-slate-400 hover:text-orange-500 dark:hover:text-orange-400 transition-colors">
            <TikTokIcon className="w-7 h-7" />
          </a>
        </div>
        
        <a href="mailto:catwaala@gmail.com" className="inline-flex items-center justify-center space-x-2 text-slate-600 dark:text-slate-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors">
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