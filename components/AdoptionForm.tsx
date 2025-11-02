import React, { useCallback, useState } from 'react';
import type { Animal } from '../types';
import Alert from './Alert';

interface AdoptionFormProps {
  animal: Animal;
  isOpen: boolean;
  onClose: () => void;
}

const AdoptionForm: React.FC<AdoptionFormProps> = ({ animal, isOpen, onClose }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [hasOtherPets, setHasOtherPets] = useState('');

  if (!isOpen) return null;

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call to submit form data
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
  }, []);
  
  const inputStyles = "mt-1 block w-full p-2 bg-transparent border border-slate-300 dark:border-slate-600 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500";
  const labelStyles = "block text-sm font-medium text-slate-600 dark:text-slate-300";

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center p-4 transition-opacity duration-300" onClick={onClose}>
      <div className="bg-slate-100/70 dark:bg-slate-800/70 backdrop-blur-lg border border-white/20 dark:border-slate-700/50 rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        {isSuccess ? (
            <div className="p-8 text-center">
                <Alert type="success" title="Application Submitted!" message={`Thank you for your interest in adopting ${animal.name}. We will review your application and be in touch soon!`} />
                <button onClick={onClose} className="mt-6 bg-orange-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-orange-600">
                    Close
                </button>
            </div>
        ) : (
          <div className="p-8">
            <div className="flex justify-between items-start mb-4">
              <div>
                  <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100">Adoption Application</h2>
                  <p className="text-slate-600 dark:text-slate-300 text-lg mt-1">You are applying to adopt: <span className="font-bold text-slate-800 dark:text-slate-100">{animal.name}</span></p>
              </div>
              <button onClick={onClose} className="text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 text-4xl font-light">&times;</button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Personal Info */}
              <fieldset className="border-t border-slate-300 dark:border-slate-700 pt-5">
                  <legend className="text-xl font-semibold text-slate-700 dark:text-slate-200 mb-3">Your Information</legend>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                          <label htmlFor="fullName" className={labelStyles}>Full Name</label>
                          <input type="text" id="fullName" required className={inputStyles} />
                      </div>
                      <div>
                          <label htmlFor="phone" className={labelStyles}>Phone Number (Bangladesh)</label>
                          <input type="tel" id="phone" pattern="(\+8801|01)[3-9]\d{8}" placeholder="+8801..." required className={inputStyles} />
                      </div>
                  </div>
                  <div className="mt-4">
                      <label htmlFor="email" className={labelStyles}>Email Address</label>
                      <input type="email" id="email" required className={inputStyles} />
                  </div>
                  <div className="mt-4">
                      <label htmlFor="address" className={labelStyles}>Full Address (in Bangladesh)</label>
                      <textarea id="address" rows={3} required className={inputStyles}></textarea>
                  </div>
                   <div className="mt-4">
                        <label htmlFor="primaryCaregiver" className={labelStyles}>Who will be the primary caregiver?</label>
                        <input type="text" id="primaryCaregiver" required className={inputStyles} placeholder="e.g., Myself, my family" />
                   </div>
              </fieldset>

              {/* Living Situation */}
              <fieldset className="border-t border-slate-300 dark:border-slate-700 pt-5">
                  <legend className="text-xl font-semibold text-slate-700 dark:text-slate-200 mb-3">Living Situation & Lifestyle</legend>
                  <div>
                      <label htmlFor="livingSituationDesc" className={labelStyles}>Describe your living situation (e.g., house with yard, apartment)</label>
                      <textarea id="livingSituationDesc" rows={3} required placeholder="e.g., House with a fenced yard, apartment with a balcony, who you live with, etc." className={inputStyles}></textarea>
                  </div>
                  <div className="mt-4">
                      <label className={labelStyles}>Do you own or rent your home?</label>
                      <div className="mt-2 flex flex-wrap gap-x-6 gap-y-2 text-slate-700 dark:text-slate-300">
                          <label className="flex items-center"><input type="radio" name="ownRent" value="own" required className="mr-2 h-4 w-4 text-orange-600 focus:ring-orange-500 border-slate-400"/> Own</label>
                          <label className="flex items-center"><input type="radio" name="ownRent" value="rent" required className="mr-2 h-4 w-4 text-orange-600 focus:ring-orange-500 border-slate-400"/> Rent</label>
                      </div>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">If you rent, please be prepared to show proof of landlord's permission for pets.</p>
                  </div>
                  <div className="mt-4">
                      <label htmlFor="hoursAlone" className={labelStyles}>How many hours will the pet be alone on an average day?</label>
                      <input type="text" id="hoursAlone" required placeholder="e.g., 2-4 hours" className={inputStyles} />
                  </div>
              </fieldset>
              
              {/* Pet Experience */}
              <fieldset className="border-t border-slate-300 dark:border-slate-700 pt-5">
                  <legend className="text-xl font-semibold text-slate-700 dark:text-slate-200 mb-3">Pet Experience</legend>
                  <div>
                    <label className={labelStyles}>Do you have other pets?</label>
                    <div className="mt-2 flex flex-wrap gap-x-6 gap-y-2 text-slate-700 dark:text-slate-300">
                        <label className="flex items-center">
                            <input type="radio" name="otherPets" value="yes" required onChange={(e) => setHasOtherPets(e.target.value)} className="mr-2 h-4 w-4 text-orange-600 focus:ring-orange-500 border-slate-400"/> Yes
                        </label>
                        <label className="flex items-center">
                            <input type="radio" name="otherPets" value="no" required onChange={(e) => setHasOtherPets(e.target.value)} className="mr-2 h-4 w-4 text-orange-600 focus:ring-orange-500 border-slate-400"/> No
                        </label>
                    </div>
                  </div>

                  {hasOtherPets === 'yes' && (
                    <div className="mt-4">
                        <label htmlFor="otherPetsDesc" className={labelStyles}>If yes, please list their species, age, and temperament.</label>
                        <textarea id="otherPetsDesc" rows={3} required placeholder="e.g., One 5-year-old calm cat, one energetic puppy" className={inputStyles}></textarea>
                    </div>
                  )}

                  <div className="mt-4">
                      <label htmlFor="experience" className={labelStyles}>Please describe your prior experience with pets.</label>
                      <textarea id="experience" rows={4} required placeholder="Have you owned pets before? What kind? For how long?" className={inputStyles}></textarea>
                  </div>
              </fieldset>

              <fieldset className="border-t border-slate-300 dark:border-slate-700 pt-5">
                  <legend className="text-xl font-semibold text-slate-700 dark:text-slate-200 mb-3">Adoption Motivation</legend>
                  <div>
                      <label htmlFor="reasonToAdopt" className={labelStyles}>Why are you interested in adopting {animal.name}?</label>
                      <textarea id="reasonToAdopt" rows={4} required placeholder="Tell us what drew you to this particular animal and what you're looking for in a companion." className={inputStyles}></textarea>
                  </div>
              </fieldset>

              <div className="pt-5 border-t border-slate-300 dark:border-slate-700">
                <div className="space-y-3">
                    <label className="flex items-start">
                        <input type="checkbox" required className="mt-1 h-4 w-4 flex-shrink-0 rounded border-slate-400 text-orange-600 focus:ring-orange-500"/>
                        <span className="ml-3 text-sm text-slate-600 dark:text-slate-300">
                            I certify that I am 18 years of age or older and that the information provided is true and accurate.
                        </span>
                    </label>
                    <label className="flex items-start">
                        <input type="checkbox" required className="mt-1 h-4 w-4 flex-shrink-0 rounded border-slate-400 text-orange-600 focus:ring-orange-500"/>
                        <span className="ml-3 text-sm text-slate-600 dark:text-slate-300">
                           I understand that a home visit from a CATWAALA representative may be required before my application is approved.
                        </span>
                    </label>
                </div>
                <div className="flex justify-end space-x-3 mt-6">
                  <button type="button" onClick={onClose} className="bg-slate-200 text-slate-700 font-bold py-2 px-6 rounded-lg hover:bg-slate-300 dark:bg-slate-600 dark:text-slate-200 dark:hover:bg-slate-500">
                    Cancel
                  </button>
                  <button type="submit" disabled={isSubmitting} className="bg-orange-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-orange-600 disabled:bg-orange-300 disabled:cursor-not-allowed">
                    {isSubmitting ? 'Submitting...' : 'Submit Application'}
                  </button>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdoptionForm;
