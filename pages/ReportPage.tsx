
import React, { useState, useRef, useCallback } from 'react';
import { MapPinIcon, ImageIcon } from '../components/icons';
import { analyzeAnimalImage } from '../services/geminiService';
import Alert from '../components/Alert';
import { useLanguage } from '../contexts/LanguageContext';

const ReportPage: React.FC = () => {
  const [location, setLocation] = useState('');
  const [condition, setCondition] = useState('');
  const [animalType, setAnimalType] = useState('Cat');
  const [status, setStatus] = useState('');
  const [isLocating, setIsLocating] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [imageBase64, setImageBase64] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<{
    type: 'success' | 'error' | 'info';
    title: string;
    message: string | React.ReactNode;
  } | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const { t } = useLanguage();

  const handleGetLocation = useCallback(() => {
    if (!navigator.geolocation) {
      setStatus(t('report.geolocationNotSupported'));
      return;
    }
    
    setIsLocating(true);
    setStatus(t('report.locating'));

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setStatus(t('report.locationFound'));
        setLocation(`${position.coords.latitude.toFixed(5)}, ${position.coords.longitude.toFixed(5)}`);
        setIsLocating(false);
      },
      () => {
        setStatus(t('report.locationError'));
        setIsLocating(false);
      }
    );
  }, [t]);

  const handleImageChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
        const base64String = (reader.result as string).split(',')[1];
        setImageBase64(base64String);
      };
      reader.readAsDataURL(file);
    }
  }, []);

  const resetForm = useCallback(() => {
      setLocation('');
      setCondition('');
      setAnimalType('Cat');
      setImagePreview(null);
      setImageBase64(null);
      if (fileInputRef.current) fileInputRef.current.value = '';
  }, []);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionStatus(null);
    
    let aiDescription = t('report.noImageAssessment');
    try {
      if (imageBase64) {
        setSubmissionStatus({ type: 'info', title: t('report.submissionStatus.processingTitle'), message: t('report.submissionStatus.processingMessage') });
        aiDescription = await analyzeAnimalImage(imageBase64);
      }
      
      await new Promise(resolve => setTimeout(resolve, 1000));

      setSubmissionStatus({
        type: 'success',
        title: t('report.submissionStatus.successTitle'),
        message: (
            <>
                <p>{t('report.submissionStatus.successMessage')}</p>
                <div className="mt-4 p-4 bg-orange-50 dark:bg-orange-900/20 border border-orange-100 dark:border-orange-800 rounded-lg">
                    <p className="text-xs font-bold text-orange-800 dark:text-orange-200 uppercase tracking-wide mb-1">{t('report.aiAssessmentTitle')}</p>
                    <p className="text-sm text-slate-700 dark:text-slate-300 italic">"{aiDescription}"</p>
                </div>
            </>
        )
      });
      resetForm();
      
    } catch (error) {
        const errorMessage = error instanceof Error ? t(`errors.${error.message}`, { default: error.message }) : t('errors.unknown');
        setSubmissionStatus({
            type: 'error',
            title: t('report.submissionStatus.errorTitle'),
            message: `${errorMessage} ${t('errors.tryAgain')}`
        });
    } finally {
      setIsSubmitting(false);
    }
  }, [imageBase64, location, condition, animalType, t, resetForm]);
  
  const inputStyles = "w-full p-4 bg-white/50 dark:bg-slate-900/50 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-4 focus:ring-orange-500/20 focus:border-orange-500 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 transition-all outline-none";
  const labelStyles = "block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-wide";


  return (
    <div className="container mx-auto px-4 py-12 flex-grow flex items-center justify-center">
      <div className="w-full max-w-2xl bg-white/60 dark:bg-slate-900/60 backdrop-blur-2xl border border-white/40 dark:border-slate-700/50 p-8 md:p-12 rounded-[2rem] shadow-2xl animate-fade-in-up">
        <h1 className="text-3xl md:text-4xl font-extrabold text-center text-slate-800 dark:text-slate-100 mb-4">{t('report.title')}</h1>
        <p className="text-lg text-center text-slate-600 dark:text-slate-400 mb-10 font-light">
          {t('report.subtitle')}
        </p>
        
        {submissionStatus && !isSubmitting && <Alert type={submissionStatus.type} title={submissionStatus.title} message={submissionStatus.message} className="mb-8" />}
        
        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label htmlFor="animal-type" className={labelStyles}>{t('report.animalTypeLabel')}</label>
            <div className="relative">
                <select id="animal-type" required value={animalType} onChange={e => setAnimalType(e.target.value)} className={`${inputStyles} appearance-none cursor-pointer`}>
                <option className="text-slate-800">{t('report.animalTypes.cat')}</option>
                <option className="text-slate-800">{t('report.animalTypes.dog')}</option>
                <option className="text-slate-800">{t('report.animalTypes.bird')}</option>
                <option className="text-slate-800">{t('report.animalTypes.other')}</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-700 dark:text-slate-300">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
            </div>
          </div>

          <div>
            <label htmlFor="condition" className={labelStyles}>{t('report.conditionLabel')}</label>
            <textarea id="condition" rows={4} required value={condition} onChange={e => setCondition(e.target.value)} placeholder={t('report.conditionPlaceholder')} className={inputStyles}></textarea>
          </div>

          <div>
            <label className={labelStyles}>{t('report.photoLabel')}</label>
            {imagePreview ? (
              <div className="mt-2 relative group rounded-xl overflow-hidden shadow-md">
                <img src={imagePreview} alt={t('report.photoPreviewAlt')} className="w-full h-auto max-h-80 object-cover bg-slate-200 dark:bg-slate-700 transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button type="button" onClick={() => { setImagePreview(null); setImageBase64(null); if(fileInputRef.current) fileInputRef.current.value = ""; }} className="bg-red-500 text-white rounded-full px-4 py-2 font-bold shadow-lg hover:bg-red-600 transition-colors transform hover:scale-105">Remove Photo</button>
                </div>
              </div>
            ) : (
              <button type="button" onClick={() => fileInputRef.current?.click()} className="w-full flex flex-col items-center justify-center p-8 border-2 border-dashed border-slate-300 dark:border-slate-600 rounded-xl hover:bg-slate-100/50 dark:hover:bg-slate-800/50 hover:border-orange-400 dark:hover:border-orange-400 transition-all duration-300 group">
                <div className="p-4 bg-slate-100 dark:bg-slate-800 rounded-full mb-3 group-hover:scale-110 transition-transform duration-300">
                    <ImageIcon className="w-8 h-8 text-slate-500 dark:text-slate-400 group-hover:text-orange-500 transition-colors" />
                </div>
                <span className="text-sm font-semibold text-slate-600 dark:text-slate-300 group-hover:text-orange-500 transition-colors">{t('report.photoUploadText')}</span>
              </button>
            )}
            <input type="file" accept="image/*" capture="environment" ref={fileInputRef} onChange={handleImageChange} className="hidden" />
          </div>

          <div>
            <label htmlFor="location" className={labelStyles}>{t('report.locationLabel')}</label>
            <div className="flex flex-col sm:flex-row gap-3">
              <input 
                type="text" 
                id="location" 
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required 
                placeholder={t('report.locationPlaceholder')}
                className={inputStyles}
              />
              <button 
                type="button"
                onClick={handleGetLocation}
                disabled={isLocating}
                className="flex items-center justify-center bg-slate-700 text-white font-bold py-3 px-6 rounded-xl hover:bg-slate-800 transition-all disabled:bg-slate-400 whitespace-nowrap shadow-lg hover:shadow-xl active:scale-95"
              >
                <MapPinIcon className="w-5 h-5 mr-2" />
                {isLocating ? t('report.locating') : t('report.useMyLocationButton')}
              </button>
            </div>
            {status && <p className="text-sm font-medium text-orange-600 dark:text-orange-400 mt-2 animate-fade-in">{status}</p>}
          </div>

          <div>
            <button type="submit" disabled={isSubmitting} className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold py-5 px-6 rounded-xl text-lg hover:shadow-lg hover:shadow-orange-500/30 transition-all transform hover:-translate-y-1 hover:scale-[1.02] disabled:opacity-70 disabled:transform-none disabled:cursor-not-allowed">
              {isSubmitting ? t('report.submittingButton') : t('report.submitButton')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReportPage;
