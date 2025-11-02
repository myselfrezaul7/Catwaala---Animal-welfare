import React from 'react';
import { HeartIcon } from './icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-transparent text-slate-600 dark:text-slate-400 py-6 mt-auto">
      <div className="container mx-auto px-6 text-center">
        <p className="flex items-center justify-center">
          &copy; {new Date().getFullYear()} CATWAALA. Made with <HeartIcon className="w-5 h-5 mx-1.5 text-red-500" /> for our furry friends.
        </p>
      </div>
    </footer>
  );
};

export default Footer;