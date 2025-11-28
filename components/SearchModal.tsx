import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MOCK_ANIMALS } from '../constants';
import type { Animal } from '../types';
import { SearchIcon } from './icons';
import { useLanguage } from '../contexts/LanguageContext';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const HighlightMatch: React.FC<{ text: string; highlight: string }> = ({ text, highlight }) => {
  if (!highlight.trim()) {
    return <>{text}</>;
  }
  // Escape special regex characters to prevent errors
  const safeHighlight = highlight.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(`(${safeHighlight})`, 'gi');
  
  // If the text doesn't contain the highlight (e.g., searching "সিম্বা" in "Simba"), 
  // just return the text without trying to split/highlight.
  if (!regex.test(text)) {
      return <>{text}</>;
  }

  const parts = text.split(regex);
  return (
    <>
      {parts.map((part, i) =>
        part.toLowerCase() === highlight.toLowerCase() ? (
          <span key={i} className="bg-orange-200 dark:bg-orange-500/30 rounded">
            {part}
          </span>
        ) : (
          part
        )
      )}
    </>
  );
};


const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState<Animal[]>([]);
  const { t } = useLanguage();

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setResults([]);
      return;
    }
    const lowerTerm = searchTerm.toLowerCase();
    
    const filteredAnimals = MOCK_ANIMALS.filter(animal =>
      animal.name.toLowerCase().includes(lowerTerm) ||
      animal.breed.toLowerCase().includes(lowerTerm) ||
      (animal.nameBn && animal.nameBn.includes(searchTerm)) ||
      (animal.breedBn && animal.breedBn.includes(searchTerm))
    );
    setResults(filteredAnimals);
  }, [searchTerm]);

  useEffect(() => {
      // Reset search term when modal is closed
      if (!isOpen) {
          setSearchTerm('');
      }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex justify-center items-start pt-20 p-4 transition-opacity duration-300" onClick={onClose}>
      <div 
        className="bg-slate-100/50 dark:bg-slate-900/50 backdrop-blur-2xl border border-white/20 dark:border-slate-700/50 rounded-2xl shadow-2xl w-full max-w-2xl" 
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6">
          <div className="relative">
            <input
              type="text"
              placeholder={t('search.placeholder')}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              autoFocus
              className="w-full bg-transparent text-slate-800 dark:text-slate-100 placeholder:text-slate-500 dark:placeholder:text-slate-400 text-lg p-4 pl-12 border-2 border-slate-300 dark:border-slate-600 rounded-full focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
            />
            <SearchIcon className="w-6 h-6 text-slate-500 dark:text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          </div>

          <div className="mt-6 max-h-[60vh] overflow-y-auto">
            {searchTerm && results.length > 0 && (
              <ul className="space-y-3">
                {results.map(animal => (
                  <li key={animal.id}>
                    <Link to={`/adopt/${animal.id}`} onClick={onClose} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-orange-500/20 transition-colors duration-200">
                      <img src={animal.imageUrl} alt={animal.name} className="w-16 h-16 rounded-md object-cover" />
                      <div>
                        <p className="font-bold text-slate-800 dark:text-slate-100 text-lg">
                          <HighlightMatch text={animal.name} highlight={searchTerm} />
                        </p>
                        <p className="text-slate-600 dark:text-slate-400">
                          <HighlightMatch text={animal.breed} highlight={searchTerm} />
                        </p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
            {searchTerm && results.length === 0 && (
              <p className="text-center text-slate-600 dark:text-slate-400 py-8">{t('search.noResults')}</p>
            )}
            {!searchTerm && (
                <p className="text-center text-slate-500 dark:text-slate-400 py-8">{t('search.prompt')}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;