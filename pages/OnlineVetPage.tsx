import React, { useState, useEffect } from 'react';
import { BANGLADESH_DISTRICTS, MOCK_LOCAL_VETS } from '../constants';
import type { LocalVet } from '../types';
import LocalVetCard from '../components/LocalVetCard';
import { SearchIcon } from '../components/icons';

const OnlineVetPage: React.FC = () => {
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [filteredVets, setFilteredVets] = useState<LocalVet[]>([]);

  useEffect(() => {
    if (selectedDistrict) {
      const vetsInDistrict = MOCK_LOCAL_VETS.filter(vet => vet.district === selectedDistrict);
      setFilteredVets(vetsInDistrict);
    } else {
      setFilteredVets([]);
    }
  }, [selectedDistrict]);

  return (
    <>
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-12 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-slate-100">Find a Vet in Your District</h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 mt-4">
              Need to find a veterinarian or a clinic near you? Select your district from the list below to find local services in your area.
            </p>
            <div className="mt-8 max-w-md mx-auto">
              <div className="relative">
                 <select 
                    value={selectedDistrict}
                    onChange={(e) => setSelectedDistrict(e.target.value)}
                    className="w-full p-4 pl-5 pr-10 bg-slate-100/50 dark:bg-slate-800/50 border-2 border-slate-300 dark:border-slate-600 rounded-full appearance-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-lg text-slate-800 dark:text-slate-100"
                  >
                    <option value="">-- Select Your District --</option>
                    {BANGLADESH_DISTRICTS.sort().map(district => (
                      <option key={district} value={district}>{district}</option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-700 dark:text-slate-300">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                  </div>
              </div>
            </div>
        </div>
        
        {selectedDistrict && filteredVets.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVets.map(vet => (
              <LocalVetCard key={vet.id} vet={vet} />
            ))}
          </div>
        )}

        {selectedDistrict && filteredVets.length === 0 && (
          <div className="text-center py-16">
            <SearchIcon className="w-16 h-16 text-slate-400 dark:text-slate-500 mx-auto" />
            <h2 className="mt-6 text-2xl font-bold text-slate-700 dark:text-slate-300">No Vets Found</h2>
            <p className="mt-2 text-slate-500 dark:text-slate-400">We don't have any veterinary clinics listed for {selectedDistrict} yet. <br/> We are constantly updating our database, so please check back soon.</p>
          </div>
        )}
      </div>
    </>
  );
};

export default OnlineVetPage;
