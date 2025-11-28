import React, { useEffect, useCallback } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useLanguage } from '../contexts/LanguageContext';
import { CatPawIcon, XIcon } from './icons';
import LanguageSwitcher from './LanguageSwitcher';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const { isAuthenticated, currentUser, logout } = useAuth();
  const { t } = useLanguage();
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const handleLinkClick = useCallback((path: string) => {
    navigate(path);
    onClose();
  }, [navigate, onClose]);
  
  const handleLogout = useCallback(() => {
    logout();
    onClose();
    navigate('/');
  }, [logout, onClose, navigate]);

  const activeLinkClass = 'bg-orange-500/20 text-orange-600 dark:text-orange-400';
  const inactiveLinkClass = 'text-slate-700 dark:text-slate-300 hover:bg-slate-500/10';

  return (
    <div 
        className={`fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
        aria-modal="true"
        role="dialog"
    >
        <div 
            className={`fixed top-0 right-0 h-full w-4/5 max-w-sm bg-slate-100 dark:bg-slate-800 shadow-2xl p-6 flex flex-col transition-transform duration-300 ease-in-out transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
            onClick={(e) => e.stopPropagation()}
        >
            <div className="flex items-center justify-between mb-10">
                <div className="flex items-center space-x-2 text-2xl font-bold text-slate-800 dark:text-slate-100">
                    <CatPawIcon className="w-8 h-8 text-orange-500" />
                    <span>CATWAALA</span>
                </div>
                 <button onClick={onClose} className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-500/10" aria-label={t('header.closeMenuAriaLabel')}>
                    <XIcon className="w-6 h-6" />
                </button>
            </div>

            <nav className="flex flex-col space-y-2 text-lg font-medium">
                <NavLink to="/" onClick={onClose} className={({ isActive }) => `px-4 py-3 rounded-lg ${isActive ? activeLinkClass : inactiveLinkClass}`}>{t('nav.home')}</NavLink>
                <NavLink to="/adopt" onClick={onClose} className={({ isActive }) => `px-4 py-3 rounded-lg ${isActive ? activeLinkClass : inactiveLinkClass}`}>{t('nav.adopt')}</NavLink>
                <a href="https://www.facebook.com/groups/catwaala/" target="_blank" rel="noopener noreferrer" onClick={onClose} className={`px-4 py-3 rounded-lg ${inactiveLinkClass}`}>{t('nav.community')}</a>
                <NavLink to="/report" onClick={onClose} className={({ isActive }) => `px-4 py-3 rounded-lg ${isActive ? activeLinkClass : inactiveLinkClass}`}>{t('nav.report')}</NavLink>
                <NavLink to="/online-vet" onClick={onClose} className={({ isActive }) => `px-4 py-3 rounded-lg ${isActive ? activeLinkClass : inactiveLinkClass}`}>{t('nav.findVet')}</NavLink>
                <NavLink to="/ai-vet" onClick={onClose} className={({ isActive }) => `px-4 py-3 rounded-lg ${isActive ? activeLinkClass : inactiveLinkClass}`}>{t('nav.aiVet')}</NavLink>
            </nav>
            
            <div className="mt-auto">
                <div className="flex justify-center my-4">
                    <LanguageSwitcher />
                </div>
                <div className="border-t border-slate-300 dark:border-slate-700 pt-6">
                    {isAuthenticated && currentUser ? (
                        <div className="flex flex-col space-y-4">
                            <span className="font-semibold text-center text-slate-700 dark:text-slate-200">{t('header.greeting', { name: currentUser.name.split(' ')[0] })}</span>
                            <button onClick={handleLogout} className="w-full bg-slate-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-slate-700">{t('nav.logout')}</button>
                        </div>
                    ) : (
                        <div className="flex flex-col space-y-3">
                            <button onClick={() => handleLinkClick('/login')} className="w-full font-semibold text-slate-600 dark:text-slate-200 hover:bg-slate-500/10 py-3 px-5 rounded-lg">{t('nav.login')}</button>
                            <button onClick={() => handleLinkClick('/signup')} className="w-full bg-orange-500 text-white font-bold py-3 px-5 rounded-lg hover:bg-orange-600">{t('nav.signup')}</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    </div>
  );
};

export default MobileMenu;