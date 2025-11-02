import React, { useState, useEffect } from 'react';

const COOKIE_CONSENT_KEY = 'catwaala_cookie_consent';

const CookieConsentBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    try {
      const consentGiven = window.localStorage.getItem(COOKIE_CONSENT_KEY);
      if (!consentGiven) {
        setIsVisible(true);
      }
    } catch (error) {
        console.error("Could not read from localStorage", error);
    }
  }, []);

  const handleAccept = () => {
    try {
        window.localStorage.setItem(COOKIE_CONSENT_KEY, 'true');
        setIsVisible(false);
    } catch (error) {
        console.error("Could not write to localStorage", error);
        setIsVisible(false);
    }
  };
  
  const handleDecline = () => {
    try {
        window.localStorage.setItem(COOKIE_CONSENT_KEY, 'false');
        setIsVisible(false);
    } catch (error) {
        console.error("Could not write to localStorage", error);
        setIsVisible(false);
    }
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div 
        className="fixed bottom-0 left-0 right-0 bg-slate-200/50 dark:bg-slate-900/50 backdrop-blur-xl border-t border-white/20 dark:border-slate-700/50 p-4 z-50 transition-transform duration-500 ease-in-out"
        style={{ transform: isVisible ? 'translateY(0)' : 'translateY(100%)' }}
    >
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-700 dark:text-slate-300 text-center sm:text-left">
          We use cookies to enhance your experience and to remember your login session. By clicking 'Accept', you agree to our use of cookies.
        </p>
        <div className="flex-shrink-0 flex items-center gap-3">
            <button 
                onClick={handleDecline}
                className="font-bold py-2 px-6 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-500/10"
            >
                Decline
            </button>
            <button 
                onClick={handleAccept}
                className="bg-orange-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-orange-600 transition-colors"
            >
                Accept
            </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsentBanner;