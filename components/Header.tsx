
import React, { useState, useCallback, useEffect } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { CatPawIcon, SearchIcon, SunIcon, MoonIcon, MenuIcon } from './icons';
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

  // Handle scroll effect for glassmorphism
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const activeLinkClass = 'bg-white/40 dark:bg-white/10 text-orange-600 dark:text-orange-400 font-bold px-4 py-2 rounded-full shadow-sm backdrop-blur-md';
  const inactiveLinkClass = 'text-slate-700 dark:text-slate-300 hover:bg-white/20 dark:hover:bg-white/5 hover:text-orange-600 dark:hover:text-orange-400 font-medium px-4 py-2 rounded-full transition-all duration-300';
  
  const handleLogout = useCallback(() => {
    logout();
    navigate('/');
  }, [logout, navigate]);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-30 transition-all duration-500 ${
            isScrolled 
            ? 'bg-white/30 dark:bg-slate-900/40 backdrop-blur-2xl shadow-lg border-b border-white/20 dark:border-white/5 py-2' 
            : 'bg-transparent py-5'
        }`}
      >
        <nav className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
          <NavLink to="/" onClick={handleLogoClick} className="flex items-center space-x-2 text-2xl font-bold text-slate-800 dark:text-slate-100 group">
            <div className="bg-white/40 dark:bg-black/20 p-2 rounded-full backdrop-blur-md border border-white/30 shadow-sm">
                <CatPawIcon className="w-6 h-6 text-orange-500 transform group-hover:rotate-12 transition-transform duration-300" />
            </div>
            <span className="tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-red-500 dark:from-orange-400 dark:to-red-400 filter drop-shadow-sm">CATWAALA</span>
          </NavLink>
          
          <ul className="hidden lg:flex items-center space-x-2 text-sm uppercase tracking-wide">
            <li><NavLink to="/" className={({ isActive }) => (isActive ? activeLinkClass : inactiveLinkClass)}>{t('nav.home')}</NavLink></li>
            <li><NavLink to="/adopt" className={({ isActive }) => (isActive ? activeLinkClass : inactiveLinkClass)}>{t('nav.adopt')}</NavLink></li>
            <li><a href="https://www.facebook.com/groups/catwaala/" target="_blank" rel="noopener noreferrer" className={inactiveLinkClass}>{t('nav.community')}</a></li>
            <li><NavLink to="/report" className={({ isActive }) => (isActive ? activeLinkClass : inactiveLinkClass)}>{t('nav.report')}</NavLink></li>
            <li><NavLink to="/online-vet" className={({ isActive }) => (isActive ? activeLinkClass : inactiveLinkClass)}>{t('nav.findVet')}</NavLink></li>
            <li><NavLink to="/ai-vet" className={({ isActive }) => (isActive ? activeLinkClass : inactiveLinkClass)}>{t('nav.aiVet')}</NavLink></li>
          </ul>

          <div className="flex items-center gap-2 sm:gap-3">
            {/* Desktop Search Button */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="hidden md:flex items-center w-36 text-left px-4 py-2 bg-white/30 dark:bg-black/20 rounded-full group transition-all duration-300 hover:w-48 hover:bg-white/50 dark:hover:bg-black/40 hover:shadow-lg backdrop-blur-md border border-white/20 dark:border-white/10"
              aria-label={t('header.searchAriaLabel')}
            >
              <SearchIcon className="w-4 h-4 text-slate-500 dark:text-slate-400 mr-2 flex-shrink-0 group-hover:text-orange-500 transition-colors" />
              <span className="text-slate-600 dark:text-slate-400 text-xs font-medium group-hover:text-slate-800 dark:group-hover:text-slate-200 transition-colors truncate">
                {t('header.searchPlaceholder')}
              </span>
            </button>

            {/* Mobile Search Icon */}
            <button onClick={() => setIsSearchOpen(true)} className="p-2.5 rounded-full bg-white/30 dark:bg-black/20 backdrop-blur-md border border-white/20 hover:bg-white/50 text-slate-700 dark:text-slate-200 transition-colors md:hidden" aria-label={t('header.searchAriaLabel')}>
                <SearchIcon className="w-5 h-5" />
            </button>
            
            <LanguageSwitcher />

            <button onClick={toggleTheme} className="p-2.5 rounded-full bg-white/30 dark:bg-black/20 backdrop-blur-md border border-white/20 hover:bg-white/50 text-slate-700 dark:text-slate-200 transition-colors" aria-label={t('header.toggleThemeAriaLabel')}>
              {theme === 'light' ? <MoonIcon className="w-5 h-5" /> : <SunIcon className="w-5 h-5" />}
            </button>
            
            <div className="hidden md:flex items-center space-x-3 ml-2">
              {isAuthenticated && currentUser ? (
                  <>
                      <span className="font-semibold text-sm text-slate-700 dark:text-slate-200 backdrop-blur-sm px-3 py-1 rounded-full bg-white/20 dark:bg-black/20">{t('header.greeting', { name: currentUser.name.split(' ')[0] })}</span>
                      <button onClick={handleLogout} className="bg-white/30 dark:bg-white/10 text-slate-800 dark:text-white text-xs font-bold py-2 px-4 rounded-full hover:bg-white/50 dark:hover:bg-white/20 border border-white/30 transition-all backdrop-blur-md shadow-sm">{t('nav.logout')}</button>
                  </>
              ) : (
                  <>
                      <NavLink to="/login" className="font-semibold text-sm text-slate-700 dark:text-slate-200 hover:text-orange-600 dark:hover:text-orange-400 transition-colors">{t('nav.login')}</NavLink>
                      <NavLink to="/signup" className="bg-orange-500/90 text-white text-xs font-bold py-2 px-4 rounded-full hover:bg-orange-600 hover:shadow-orange-500/40 shadow-lg transition-all transform hover:-translate-y-0.5 backdrop-blur-md border border-white/20">{t('nav.signup')}</NavLink>
                  </>
              )}
            </div>
            
            <button onClick={() => setIsMenuOpen(true)} className="p-2.5 rounded-full bg-white/30 dark:bg-black/20 backdrop-blur-md border border-white/20 hover:bg-white/50 text-slate-700 dark:text-slate-200 transition-colors lg:hidden" aria-label={t('header.openMenuAriaLabel')}>
              <MenuIcon className="w-6 h-6" />
            </button>
          </div>
        </nav>
      </header>
      {/* Spacer to prevent content overlap with fixed header */}
      <div className="h-[80px]"></div>
      
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};

export default Header;
