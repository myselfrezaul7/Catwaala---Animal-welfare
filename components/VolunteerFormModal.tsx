import React, { useCallback, useState } from 'react';
import Alert from './Alert';
import { useLanguage } from '../contexts/LanguageContext';

interface VolunteerFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const VolunteerFormModal: React.FC<VolunteerFormModalProps> = ({ isOpen, onClose }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { t } = useLanguage();

  if (!isOpen) return null;

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
  }, []);
  
  const inputStyles = "mt-1 block w-full p-2 bg-transparent border border-slate-300 dark:border-slate-600 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500";
  const labelStyles = "block text-sm font-medium text-slate-600 dark:text-slate-300";
  const checkboxLabelStyles = "flex items-center text-slate-700 dark:text-slate-300";
  const checkboxInputStyles = "mr-2 h-4 w-4 text-orange-600 focus:ring-orange-500 border-slate-400 rounded";

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center p-0 sm:p-4 transition-opacity duration-300" onClick={onClose}>
      <div className="bg-slate-100/70 dark:bg-slate-800/70 backdrop-blur-lg border-white/20 dark:border-slate-700/50 w-full h-full sm:rounded-2xl shadow-2xl sm:max-w-2xl sm:max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        {isSuccess ? (
          <div className="p-8 text-center flex flex-col justify-center items-center h-full">
            <div>
                <Alert type="success" title={t('volunteerForm.success.title')} message={t('volunteerForm.success.message')} />
                <button onClick={onClose} className="mt-6 bg-orange-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-orange-600">
                    {t('buttons.close')}
                </button>
            </div>
          </div>
        ) : (
          <div className="p-8">
            <div className="flex justify-between items-start mb-4">
              <div>
                  <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100">{t('volunteerForm.title')}</h2>
                  <p className="text-slate-600 dark:text-slate-300 text-lg mt-1">{t('volunteerForm.subtitle')}</p>
              </div>
              <button onClick={onClose} className="text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 text-4xl font-light">&times;</button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Personal Info */}
              <fieldset className="border-t border-slate-300 dark:border-slate-700 pt-5">
                  <legend className="text-xl font-semibold text-slate-700 dark:text-slate-200 mb-3">{t('volunteerForm.yourInfo.title')}</legend>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                          <label htmlFor="volunteerName" className={labelStyles}>{t('volunteerForm.yourInfo.name')} <span className="text-red-500">*</span></label>
                          <input type="text" id="volunteerName" required className={inputStyles} />
                      </div>
                      <div>
                          <label htmlFor="volunteerEmail" className={labelStyles}>{t('volunteerForm.yourInfo.email')} <span className="text-red-500">*</span></label>
                          <input type="email" id="volunteerEmail" required className={inputStyles} />
                      </div>
                  </div>
                  <div className="mt-4">
                      <label htmlFor="volunteerPhone" className={labelStyles}>{t('volunteerForm.yourInfo.phone')} <span className="text-red-500">*</span></label>
                      <input type="tel" id="volunteerPhone" pattern="(\+8801|01)[3-9]\d{8}" placeholder="+8801..." required className={inputStyles} />
                  </div>
              </fieldset>

              {/* Availability & Interests */}
              <fieldset className="border-t border-slate-300 dark:border-slate-700 pt-5">
                  <legend className="text-xl font-semibold text-slate-700 dark:text-slate-200 mb-3">{t('volunteerForm.availability.title')}</legend>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                          <label className={labelStyles}>{t('volunteerForm.availability.label')}</label>
                          <div className="mt-2 space-y-2">
                              <label className={checkboxLabelStyles}><input type="checkbox" name="availability" value="weekdays" className={checkboxInputStyles}/> {t('volunteerForm.availability.weekdays')}</label>
                              <label className={checkboxLabelStyles}><input type="checkbox" name="availability" value="weekends" className={checkboxInputStyles}/> {t('volunteerForm.availability.weekends')}</label>
                              <label className={checkboxLabelStyles}><input type="checkbox" name="availability" value="evenings" className={checkboxInputStyles}/> {t('volunteerForm.availability.evenings')}</label>
                          </div>
                      </div>
                      <div>
                          <label className={labelStyles}>{t('volunteerForm.interests.label')}</label>
                          <div className="mt-2 space-y-2">
                              <label className={checkboxLabelStyles}><input type="checkbox" name="interest" value="animal-care" className={checkboxInputStyles}/> {t('volunteerForm.interests.animalCare')}</label>
                              <label className={checkboxLabelStyles}><input type="checkbox" name="interest" value="events" className={checkboxInputStyles}/> {t('volunteerForm.interests.events')}</label>
                              <label className={checkboxLabelStyles}><input type="checkbox" name="interest" value="fundraising" className={checkboxInputStyles}/> {t('volunteerForm.interests.fundraising')}</label>
                              <label className={checkboxLabelStyles}><input type="checkbox" name="interest" value="admin" className={checkboxInputStyles}/> {t('volunteerForm.interests.admin')}</label>
                          </div>
                      </div>
                  </div>
              </fieldset>
              
              {/* Motivation */}
              <fieldset className="border-t border-slate-300 dark:border-slate-700 pt-5">
                  <legend className="text-xl font-semibold text-slate-700 dark:text-slate-200 mb-3">{t('volunteerForm.motivation.title')}</legend>
                  <div>
                      <label htmlFor="motivation" className={labelStyles}>{t('volunteerForm.motivation.label')} <span className="text-red-500">*</span></label>
                      <textarea id="motivation" rows={4} required placeholder={t('volunteerForm.motivation.placeholder')} className={inputStyles}></textarea>
                  </div>
              </fieldset>

              <div className="pt-5 border-t border-slate-300 dark:border-slate-700">
                <div className="flex justify-end space-x-3">
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

export default VolunteerFormModal;