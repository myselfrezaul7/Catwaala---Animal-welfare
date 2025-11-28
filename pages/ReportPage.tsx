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
                <p className="mt-2 text-xs p-2 bg-slate-200 dark:bg-slate-700 rounded"><strong>{t('report.aiAssessmentTitle')}:</strong> {aiDescription}</p>
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
  
  const inputStyles = "w-full p-3 bg-transparent border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500";


  return (
    <div className="container mx-auto px-4 py-12 flex-grow flex items-center justify-center">
      <div className="w-full max-w-2xl bg-slate-100/30 dark:bg-slate-800/30 backdrop-blur-lg border border-white/20 dark:border-slate-700/50 p-8 md:p-12 rounded-2xl shadow-xl">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-slate-800 dark:text-slate-100 mb-4">{t('report.title')}</h1>
        <p className="text-lg text-center text-slate-600 dark:text-slate-400 mb-10">
          {t('report.subtitle')}
        </p>
        
        {submissionStatus && !isSubmitting && <Alert type={submissionStatus.type} title={submissionStatus.title} message={submissionStatus.message} className="mb-6" />}
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="animal-type" className="block text-base font-semibold text-slate-700 dark:text-slate-300 mb-2">{t('report.animalTypeLabel')}</label>
            <select id="animal-type" required value={animalType} onChange={e => setAnimalType(e.target.value)} className={inputStyles}>
              <option className="text-black">{t('report.animalTypes.cat')}</option>
              <option className="text-black">{t('report.animalTypes.dog')}</option>
              <option className="text-black">{t('report.animalTypes.bird')}</option>
              <option className="text-black">{t('report.animalTypes.other')}</option>
            </select>
          </div>

          <div>
            <label htmlFor="condition" className="block text-base font-semibold text-slate-700 dark:text-slate-300 mb-2">{t('report.conditionLabel')}</label>
            <textarea id="condition" rows={4} required value={condition} onChange={e => setCondition(e.target.value)} placeholder={t('report.conditionPlaceholder')} className={inputStyles}></textarea>
          </div>

          <div>
            <label className="block text-base font-semibold text-slate-700 dark:text-slate-300 mb-2">{t('report.photoLabel')}</label>
            {imagePreview ? (
              <div className="mt-2 relative">
                <img src={imagePreview} alt={t('report.photoPreviewAlt')} className="w-full h-auto max-h-60 object-contain rounded-lg bg-slate-200 dark:bg-slate-700" />
                <button type="button" onClick={() => { setImagePreview(null); setImageBase64(null); if(fileInputRef.current) fileInputRef.current.value = ""; }} className="absolute top-2 right-2 bg-black/50 text-white rounded-full h-7 w-7 flex items-center justify-center font-bold text-lg hover:bg-black/80">&times;</button>
              </div>
            ) : (
              <button type="button" onClick={() => fileInputRef.current?.click()} className="w-full flex flex-col items-center justify-center p-6 border-2 border-dashed border-slate-300 dark:border-slate-600 rounded-lg hover:bg-slate-500/10 transition-colors">
                <ImageIcon className="w-10 h-10 text-slate-500 dark:text-slate-400" />
                <span className="mt-2 text-sm font-semibold text-slate-600 dark:text-slate-300">{t('report.photoUploadText')}</span>
              </button>
            )}
            <input type="file" accept="image/*" capture="environment" ref={fileInputRef} onChange={handleImageChange} className="hidden" />
          </div>

          <div>
            <label htmlFor="location" className="block text-base font-semibold text-slate-700 dark:text-slate-300 mb-2">{t('report.locationLabel')}</label>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
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
                className="flex items-center justify-center bg-slate-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-slate-700 transition-colors disabled:bg-slate-400"
              >
                <MapPinIcon className="w-5 h-5 mr-2" />
                {isLocating ? t('report.locating') : t('report.useMyLocationButton')}
              </button>
            </div>
            {status && <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">{status}</p>}
          </div>

          <div>
            <button type="submit" disabled={isSubmitting} className="w-full bg-orange-500 text-white font-bold py-4 px-4 rounded-lg text-lg hover:bg-orange-600 transition-colors transform hover:scale-105 disabled:bg-orange-300 disabled:scale-100 disabled:cursor-not-allowed">
              {isSubmitting ? t('report.submittingButton') : t('report.submitButton')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReportPage;