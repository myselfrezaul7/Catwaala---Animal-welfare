import React, { useCallback, useState } from 'react';
import type { Animal } from '../types';
import Alert from './Alert';
import { useLanguage } from '../contexts/LanguageContext';

interface AdoptionFormProps {
  animal: Animal;
  isOpen: boolean;
  onClose: () => void;
}

const AdoptionForm: React.FC<AdoptionFormProps> = ({ animal, isOpen, onClose }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [hasOtherPets, setHasOtherPets] = useState('');
  const { t } = useLanguage();

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call to submit form data
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
  }, []);
  
  if (!isOpen) return null;

  const inputStyles = "mt-1 block w-full p-2 bg-transparent border border-slate-300 dark:border-slate-600 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500";
  const labelStyles = "block text-sm font-medium text-slate-600 dark:text-slate-300";

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center p-0 sm:p-4 transition-opacity duration-300" onClick={onClose}>
      <div className="bg-slate-100/70 dark:bg-slate-800/70 backdrop-blur-lg border-white/20 dark:border-slate-700/50 w-full h-full sm:rounded-2xl shadow-2xl sm:max-w-2xl sm:max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        {isSuccess ? (
            <div className="p-8 text-center flex flex-col justify-center items-center h-full">
                <div>
                    <Alert type="success" title={t('adoptionForm.success.title')} message={t('adoptionForm.success.message', { name: animal.name })} />
                    <button onClick={onClose} className="mt-6 bg-orange-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-orange-600">
                        {t('buttons.close')}
                    </button>
                </div>
            </div>
        ) : (
          <div className="p-8">
            <div className="flex justify-between items-start mb-4">
              <div>
                  <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100">{t('adoptionForm.title')}</h2>
                  <p className="text-slate-600 dark:text-slate-300 text-lg mt-1">{t('adoptionForm.applyingFor')} <span className="font-bold text-slate-800 dark:text-slate-100">{animal.name}</span></p>
              </div>
              <button onClick={onClose} className="text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 text-4xl font-light">&times;</button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Personal Info */}
              <fieldset className="border-t border-slate-300 dark:border-slate-700 pt-5">
                  <legend className="text-xl font-semibold text-slate-700 dark:text-slate-200 mb-3">{t('adoptionForm.yourInfo.title')}</legend>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                          <label htmlFor="fullName" className={labelStyles}>{t('adoptionForm.yourInfo.name')}</label>
                          <input type="text" id="fullName" required className={inputStyles} />
                      </div>
                      <div>
                          <label htmlFor="phone" className={labelStyles}>{t('adoptionForm.yourInfo.phone')}</label>
                          <input type="tel" id="phone" pattern="(\+8801|01)[3-9]\d{8}" placeholder="+8801..." required className={inputStyles} />
                      </div>
                  </div>
                  <div className="mt-4">
                      <label htmlFor="email" className={labelStyles}>{t('adoptionForm.yourInfo.email')}</label>
                      <input type="email" id="email" required className={inputStyles} />
                  </div>
                  <div className="mt-4">
                      <label htmlFor="address" className={labelStyles}>{t('adoptionForm.yourInfo.address')}</label>
                      <textarea id="address" rows={3} required className={inputStyles}></textarea>
                  </div>
                   <div className="mt-4">
                        <label htmlFor="primaryCaregiver" className={labelStyles}>{t('adoptionForm.yourInfo.caregiver')}</label>
                        <input type="text" id="primaryCaregiver" required className={inputStyles} placeholder={t('adoptionForm.yourInfo.caregiverPlaceholder')} />
                   </div>
              </fieldset>

              {/* Living Situation */}
              <fieldset className="border-t border-slate-300 dark:border-slate-700 pt-5">
                  <legend className="text-xl font-semibold text-slate-700 dark:text-slate-200 mb-3">{t('adoptionForm.livingSituation.title')}</legend>
                  <div>
                      <label htmlFor="livingSituationDesc" className={labelStyles}>{t('adoptionForm.livingSituation.description')}</label>
                      <textarea id="livingSituationDesc" rows={3} required placeholder={t('adoptionForm.livingSituation.descriptionPlaceholder')} className={inputStyles}></textarea>
                  </div>
                  <div className="mt-4">
                      <label className={labelStyles}>{t('adoptionForm.livingSituation.ownOrRent')}</label>
                      <div className="mt-2 flex flex-wrap gap-x-6 gap-y-2 text-slate-700 dark:text-slate-300">
                          <label className="flex items-center"><input type="radio" name="ownRent" value="own" required className="mr-2 h-4 w-4 text-orange-600 focus:ring-orange-500 border-slate-400"/> {t('adoptionForm.livingSituation.own')}</label>
                          <label className="flex items-center"><input type="radio" name="ownRent" value="rent" required className="mr-2 h-4 w-4 text-orange-600 focus:ring-orange-500 border-slate-400"/> {t('adoptionForm.livingSituation.rent')}</label>
                      </div>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">{t('adoptionForm.livingSituation.landlordPermission')}</p>
                  </div>
                  <div className="mt-4">
                      <label htmlFor="hoursAlone" className={labelStyles}>{t('adoptionForm.livingSituation.hoursAlone')}</label>
                      <input type="text" id="hoursAlone" required placeholder={t('adoptionForm.livingSituation.hoursAlonePlaceholder')} className={inputStyles} />
                  </div>
              </fieldset>
              
              {/* Pet Experience */}
              <fieldset className="border-t border-slate-300 dark:border-slate-700 pt-5">
                  <legend className="text-xl font-semibold text-slate-700 dark:text-slate-200 mb-3">{t('adoptionForm.petExperience.title')}</legend>
                  <div>
                    <label className={labelStyles}>{t('adoptionForm.petExperience.otherPets')}</label>
                    <div className="mt-2 flex flex-wrap gap-x-6 gap-y-2 text-slate-700 dark:text-slate-300">
                        <label className="flex items-center">
                            <input type="radio" name="otherPets" value="yes" required onChange={(e) => setHasOtherPets(e.target.value)} className="mr-2 h-4 w-4 text-orange-600 focus:ring-orange-500 border-slate-400"/> {t('adoptionForm.petExperience.yes')}
                        </label>
                        <label className="flex items-center">
                            <input type="radio" name="otherPets" value="no" required onChange={(e) => setHasOtherPets(e.target.value)} className="mr-2 h-4 w-4 text-orange-600 focus:ring-orange-500 border-slate-400"/> {t('adoptionForm.petExperience.no')}
                        </label>
                    </div>
                  </div>

                  {hasOtherPets === 'yes' && (
                    <div className="mt-4">
                        <label htmlFor="otherPetsDesc" className={labelStyles}>{t('adoptionForm.petExperience.otherPetsDescription')}</label>
                        <textarea id="otherPetsDesc" rows={3} required placeholder={t('adoptionForm.petExperience.otherPetsPlaceholder')} className={inputStyles}></textarea>
                    </div>
                  )}

                  <div className="mt-4">
                      <label htmlFor="experience" className={labelStyles}>{t('adoptionForm.petExperience.priorExperience')}</label>
                      <textarea id="experience" rows={4} required placeholder={t('adoptionForm.petExperience.priorExperiencePlaceholder')} className={inputStyles}></textarea>
                  </div>
              </fieldset>

              <fieldset className="border-t border-slate-300 dark:border-slate-700 pt-5">
                  <legend className="text-xl font-semibold text-slate-700 dark:text-slate-200 mb-3">{t('adoptionForm.motivation.title')}</legend>
                  <div>
                      <label htmlFor="reasonToAdopt" className={labelStyles}>{t('adoptionForm.motivation.reason', { name: animal.name })}</label>
                      <textarea id="reasonToAdopt" rows={4} required placeholder={t('adoptionForm.motivation.reasonPlaceholder')} className={inputStyles}></textarea>
                  </div>
              </fieldset>

              <div className="pt-5 border-t border-slate-300 dark:border-slate-700">
                <div className="space-y-3">
                    <label className="flex items-start">
                        <input type="checkbox" required className="mt-1 h-4 w-4 flex-shrink-0 rounded border-slate-400 text-orange-600 focus:ring-orange-500"/>
                        <span className="ml-3 text-sm text-slate-600 dark:text-slate-300">
                           {t('adoptionForm.terms.age')}
                        </span>
                    </label>
                    <label className="flex items-start">
                        <input type="checkbox" required className="mt-1 h-4 w-4 flex-shrink-0 rounded border-slate-400 text-orange-600 focus:ring-orange-500"/>
                        <span className="ml-3 text-sm text-slate-600 dark:text-slate-300">
                           {t('adoptionForm.terms.homeVisit')}
                        </span>
                    </label>
                </div>
                <div className="flex justify-end space-x-3 mt-6">
                  <button type="button" onClick={onClose} className="bg-slate-200 text-slate-700 font-bold py-2 px-6 rounded-lg hover:bg-slate-300 dark:bg-slate-600 dark:text-slate-200 dark:hover:bg-slate-500">
                    {t('buttons.cancel')}
                  </button>
                  <button type="submit" disabled={isSubmitting} className="bg-orange-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-orange-600 disabled:bg-orange-300 disabled:cursor-not-allowed">
                    {isSubmitting ? t('buttons.submitting') : t('buttons.submitApplication')}
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