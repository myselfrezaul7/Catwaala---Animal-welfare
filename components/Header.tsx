import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { CatIcon, SearchIcon, SunIcon, MoonIcon, MenuIcon } from './icons';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';
import SearchModal from './SearchModal';
import MobileMenu from './MobileMenu';

const Header: React.FC = () => {
  const { isAuthenticated, currentUser, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const activeLinkClass = 'text-orange-600 dark:text-orange-400 font-semibold';
  const inactiveLinkClass = 'text-slate-600 dark:text-slate-300 hover:text-orange-600 dark:hover:text-orange-400';
  
  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <>
      <header className="bg-slate-100/30 dark:bg-slate-900/30 shadow-sm sticky top-0 z-30 backdrop-blur-xl border-b border-white/20 dark:border-slate-800/40">
        <nav className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
          <NavLink to="/" className="flex items-center space-x-2 text-2xl font-bold text-slate-800 dark:text-slate-100">
            <CatIcon className="w-8 h-8 text-orange-500" />
            <span>CATWAALA</span>
          </NavLink>
          
          <ul className="hidden md:flex items-center space-x-8 text-base font-medium">
            <li><NavLink to="/" className={({ isActive }) => (isActive ? activeLinkClass : inactiveLinkClass)}>Home</NavLink></li>
            <li><NavLink to="/adopt" className={({ isActive }) => (isActive ? activeLinkClass : inactiveLinkClass)}>Adopt</NavLink></li>
            <li><NavLink to="/community" className={({ isActive }) => (isActive ? activeLinkClass : inactiveLinkClass)}>Community</NavLink></li>
            <li><NavLink to="/report" className={({ isActive }) => (isActive ? activeLinkClass : inactiveLinkClass)}>Report</NavLink></li>
            <li><NavLink to="/online-vet" className={({ isActive }) => (isActive ? activeLinkClass : inactiveLinkClass)}>Online Vet</NavLink></li>
            <li><NavLink to="/ai-assistant" className={({ isActive }) => (isActive ? activeLinkClass : inactiveLinkClass)}>AI Assistant</NavLink></li>
          </ul>

          <div className="flex items-center space-x-2 sm:space-x-4">
            <button onClick={() => setIsSearchOpen(true)} className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-500/10" aria-label="Search">
              <SearchIcon className="w-6 h-6" />
            </button>
            <button onClick={toggleTheme} className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-500/10" aria-label="Toggle theme">
              {theme === 'light' ? <MoonIcon className="w-6 h-6" /> : <SunIcon className="w-6 h-6" />}
            </button>
            
            <div className="hidden md:flex items-center space-x-4">
              {isAuthenticated && currentUser ? (
                  <>
                      <span className="font-semibold text-slate-700 dark:text-slate-200">Hi, {currentUser.name.split(' ')[0]}</span>
                      <button onClick={handleLogout} className="bg-slate-600 dark:bg-slate-700 text-white font-bold py-2 px-4 rounded-lg hover:bg-slate-700 dark:hover:bg-slate-600">Logout</button>
                  </>
              ) : (
                  <>
                      <NavLink to="/login" className="font-semibold text-slate-600 dark:text-slate-300 hover:text-orange-600 dark:hover:text-orange-400">Login</NavLink>
                      <NavLink to="/signup" className="bg-orange-500 text-white font-bold py-2 px-5 rounded-lg hover:bg-orange-600 transition-all transform hover:scale-105">Sign Up</NavLink>
                  </>
              )}
            </div>
            
            <button onClick={() => setIsMenuOpen(true)} className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-500/10 md:hidden" aria-label="Open menu">
              <MenuIcon className="w-6 h-6" />
            </button>
          </div>
        </nav>
      </header>
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};

export default Header;