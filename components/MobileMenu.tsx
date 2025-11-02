import React, { useCallback } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { LogoIcon } from './icons';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const { isAuthenticated, currentUser, logout } = useAuth();
  const navigate = useNavigate();

  if (!isOpen) return null;

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
        className="fixed inset-0 bg-slate-100/50 dark:bg-slate-900/50 backdrop-blur-2xl z-40 md:hidden"
        onClick={onClose}
    >
        <div 
            className="fixed top-0 right-0 h-full w-4/5 max-w-sm bg-slate-100/70 dark:bg-slate-900/70 shadow-2xl p-6 flex flex-col"
            onClick={(e) => e.stopPropagation()}
        >
            <div className="flex items-center space-x-2 text-2xl font-bold text-slate-800 dark:text-slate-100 mb-10">
                <LogoIcon className="w-8 h-8 text-orange-500" />
                <span>CATWAALA</span>
            </div>

            <nav className="flex flex-col space-y-2 text-lg font-medium flex-grow">
                <NavLink to="/" onClick={onClose} className={({ isActive }) => `px-4 py-3 rounded-lg ${isActive ? activeLinkClass : inactiveLinkClass}`}>Home</NavLink>
                <NavLink to="/adopt" onClick={onClose} className={({ isActive }) => `px-4 py-3 rounded-lg ${isActive ? activeLinkClass : inactiveLinkClass}`}>Adopt</NavLink>
                <NavLink to="/community" onClick={onClose} className={({ isActive }) => `px-4 py-3 rounded-lg ${isActive ? activeLinkClass : inactiveLinkClass}`}>Community</NavLink>
                <NavLink to="/report" onClick={onClose} className={({ isActive }) => `px-4 py-3 rounded-lg ${isActive ? activeLinkClass : inactiveLinkClass}`}>Report Rescue</NavLink>
                <NavLink to="/online-vet" onClick={onClose} className={({ isActive }) => `px-4 py-3 rounded-lg ${isActive ? activeLinkClass : inactiveLinkClass}`}>Find a Vet</NavLink>
                <NavLink to="/ai-vet" onClick={onClose} className={({ isActive }) => `px-4 py-3 rounded-lg ${isActive ? activeLinkClass : inactiveLinkClass}`}>AI Vet</NavLink>
            </nav>

            <div className="mt-auto border-t border-slate-300 dark:border-slate-700 pt-6">
                {isAuthenticated && currentUser ? (
                    <div className="flex flex-col space-y-4">
                        <span className="font-semibold text-center text-slate-700 dark:text-slate-200">Hi, {currentUser.name.split(' ')[0]}</span>
                        <button onClick={handleLogout} className="w-full bg-slate-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-slate-700">Logout</button>
                    </div>
                ) : (
                    <div className="flex flex-col space-y-3">
                        <button onClick={() => handleLinkClick('/login')} className="w-full font-semibold text-slate-600 dark:text-slate-200 hover:bg-slate-500/10 py-3 px-5 rounded-lg">Login</button>
                        <button onClick={() => handleLinkClick('/signup')} className="w-full bg-orange-500 text-white font-bold py-3 px-5 rounded-lg hover:bg-orange-600">Sign Up</button>
                    </div>
                )}
            </div>
        </div>
    </div>
  );
};

export default MobileMenu;