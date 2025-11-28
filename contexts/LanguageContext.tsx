
import React, { createContext, useState, useContext, useEffect, useCallback, useMemo } from 'react';
import { en, bn } from '../locales/translations';

type Language = 'en' | 'bn';
type Translations = { [key: string]: any };

interface LanguageContextType {
    language: Language;
    t: (key: string, options?: Record<string, string | number>) => string;
    changeLanguage: (language: Language) => void;
}

const translations: Record<Language, Translations> = { en, bn };
const LANGUAGE_KEY = 'catwaala_language';

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [language, setLanguage] = useState<Language>(() => {
        try {
            const storedLang = window.localStorage.getItem(LANGUAGE_KEY);
            if (storedLang === 'en' || storedLang === 'bn') {
                return storedLang;
            }
        } catch (error) {
            console.error("Could not read language from localStorage", error);
        }
        return 'en';
    });

    useEffect(() => {
        try {
            window.localStorage.setItem(LANGUAGE_KEY, language);
            document.documentElement.lang = language;
        } catch (error) {
            console.error("Could not save language to localStorage", error);
        }
    }, [language]);

    const changeLanguage = useCallback((lang: Language) => {
        setLanguage(lang);
    }, []);

    const t = useCallback((key: string, options?: Record<string, string | number>): string => {
        const keys = key.split('.');
        let result: any = translations[language];
        for (const k of keys) {
            result = result?.[k];
            if (result === undefined) {
                // Fallback to English if translation is missing
                result = en;
                for (const fk of keys) {
                    result = result?.[fk];
                    if(result === undefined) return key;
                }
                break;
            }
        }

        if (typeof result === 'string' && options) {
            return result.replace(/\{\{(\w+)\}\}/g, (_, varName) => 
                String(options[varName] !== undefined ? options[varName] : `{{${varName}}}`)
            );
        }
        
        return typeof result === 'string' ? result : key;
    }, [language]);

    const value = useMemo(() => ({
        language,
        t,
        changeLanguage
    }), [language, t, changeLanguage]);

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
