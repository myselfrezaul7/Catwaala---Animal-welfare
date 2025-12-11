
import React, { useState, useCallback, useEffect } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { CatLogoIcon, SearchIcon, SunIcon, MoonIcon, MenuIcon } from './icons';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
import SearchModal from './SearchModal';
import MobileMenu from './MobileMenu';
import LanguageSwitcher from './LanguageSwitcher';

const Header: React.FC = () => {
  const { isAuthenticated, currentUser, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const { t } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 20;
      if (scrolled !== isScrolled) {
        setIsScrolled(scrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolled]);

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const activeLinkClass = 'text-orange-600 dark:text-orange-400 font-bold px-3 py-2 relative rounded-lg bg-orange-50/80 dark:bg-orange-900/20';
  const inactiveLinkClass = 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white font-medium px-3 py-2 transition-all rounded-lg hover:bg-slate-100/50 dark:hover:bg-white/5';
  
  const handleLogout = useCallback(() => {
    logout();
    navigate('/');
  }, [logout, navigate]);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 flex justify-center ${isScrolled ? 'py-2 sm:py-3' : 'py-3 sm:py-6'} px-2 sm:px-4`}
      >
        <nav className={`
            w-full max-w-7xl transition-all duration-500 flex justify-between items-center px-4 sm:px-6 py-3
            ${isScrolled 
                ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl shadow-lg border border-white/20 dark:border-slate-700/50 rounded-2xl' 
                : 'bg-white/50 dark:bg-slate-900/50 backdrop-blur-md border border-white/10 dark:border-slate-700/20 rounded-2xl'
            }
        `}>
          <NavLink to="/" onClick={handleLogoClick} className="flex items-center space-x-2.5 text-2xl font-bold group">
            <div className="bg-gradient-to-tr from-orange-500 to-red-500 text-white p-2 rounded-xl shadow-lg shadow-orange-500/20 group-hover:rotate-12 transition-transform duration-300">
                <CatLogoIcon className="w-5 h-5" />
            </div>
            <span className="tracking-tight text-slate-800 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                CATWAALA
            </span>
          </NavLink>
          
          <ul className="hidden lg:flex items-center space-x-1 text-sm">
            <li><NavLink to="/" className={({ isActive }) => (isActive ? activeLinkClass : inactiveLinkClass)}>{t('nav.home')}</NavLink></li>
            <li><NavLink to="/adopt" className={({ isActive }) => (isActive ? activeLinkClass : inactiveLinkClass)}>{t('nav.adopt')}</NavLink></li>
            <li><a href="https://www.facebook.com/groups/catwaala/" target="_blank" rel="noopener noreferrer" className={inactiveLinkClass}>{t('nav.community')}</a></li>
            <li><NavLink to="/report" className={({ isActive }) => (isActive ? activeLinkClass : inactiveLinkClass)}>{t('nav.report')}</NavLink></li>
            <li><NavLink to="/online-vet" className={({ isActive }) => (isActive ? activeLinkClass : inactiveLinkClass)}>{t('nav.findVet')}</NavLink></li>
            <li><NavLink to="/ai-vet" className={({ isActive }) => (isActive ? activeLinkClass : inactiveLinkClass)}>{t('nav.aiVet')}</NavLink></li>
          </ul>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors group"
              aria-label={t('header.searchAriaLabel')}
            >
              <SearchIcon className="w-5 h-5 text-slate-600 dark:text-slate-300 group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors" />
            </button>
            
            <div className="hidden sm:block">
              <LanguageSwitcher />
            </div>

            <button onClick={toggleTheme} className="p-2.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" aria-label={t('header.toggleThemeAriaLabel')}>
              {theme === 'light' ? <MoonIcon className="w-5 h-5 text-slate-600" /> : <SunIcon className="w-5 h-5 text-slate-300" />}
            </button>
            
            <div className="hidden md:flex items-center space-x-3 ml-2 pl-3 border-l border-slate-200 dark:border-slate-700">
              {isAuthenticated && currentUser ? (
                  <>
                      <span className="font-semibold text-sm text-slate-700 dark:text-slate-200">{t('header.greeting', { name: currentUser.name.split(' ')[0] })}</span>
                      <button onClick={handleLogout} className="text-orange-500 hover:text-orange-600 text-sm font-bold transition-colors">{t('nav.logout')}</button>
                  </>
              ) : (
                  <>
                      <NavLink to="/login" className="font-medium text-sm text-slate-600 dark:text-slate-300 hover:text-orange-500">{t('nav.login')}</NavLink>
                      <NavLink to="/signup" className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-sm font-bold py-2 px-5 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">{t('nav.signup')}</NavLink>
                  </>
              )}
            </div>
            
            <button onClick={() => setIsMenuOpen(true)} className="p-2.5 lg:hidden rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" aria-label={t('header.openMenuAriaLabel')}>
              <MenuIcon className="w-6 h-6 text-slate-600 dark:text-slate-300" />
            </button>
          </div>
        </nav>
      </header>
      {/* Spacer to prevent content from jumping when header becomes fixed */}
      <div className="h-[100px]"></div>
      
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};

export default Header;
