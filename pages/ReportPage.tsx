import React, { useState } from 'react';
import { MapPinIcon } from '../components/icons';

const ReportPage: React.FC = () => {
  const [location, setLocation] = useState('');
  const [status, setStatus] = useState('');
  const [isLocating, setIsLocating] = useState(false);

  const handleGetLocation = () => {
    if (!navigator.geolocation) {
      setStatus('Geolocation is not supported by your browser.');
      return;
    }
    
    setIsLocating(true);
    setStatus('Locating...');

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setStatus('Location found!');
        setLocation(`${position.coords.latitude.toFixed(5)}, ${position.coords.longitude.toFixed(5)}`);
        setIsLocating(false);
      },
      () => {
        setStatus('Unable to retrieve your location. Please enter it manually.');
        setIsLocating(false);
      }
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you! Your report has been submitted. Our team will look into it shortly.');
    // Here you would typically send the form data to a server
  };
  
  const inputStyles = "w-full p-3 bg-transparent border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500";


  return (
    <div className="container mx-auto px-4 py-12 flex-grow flex items-center justify-center">
      <div className="w-full max-w-2xl bg-slate-100/30 dark:bg-slate-800/30 backdrop-blur-lg border border-white/20 dark:border-slate-700/50 p-8 md:p-12 rounded-2xl shadow-xl">
        <h1 className="text-4xl font-bold text-center text-slate-800 dark:text-slate-100 mb-4">Report an Animal in Need</h1>
        <p className="text-lg text-center text-slate-600 dark:text-slate-400 mb-10">
          See an animal that needs help? Fill out the form below, and our rescue team will be alerted.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="animal-type" className="block text-base font-semibold text-slate-700 dark:text-slate-300 mb-2">Type of Animal</label>
            <select id="animal-type" required className={inputStyles}>
              <option className="text-black">Dog</option>
              <option className="text-black">Cat</option>
              <option className="text-black">Bird</option>
              <option className="text-black">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="condition" className="block text-base font-semibold text-slate-700 dark:text-slate-300 mb-2">Description of Condition</label>
            <textarea id="condition" rows={4} required placeholder="e.g., Injured leg, looks lost and scared, etc." className={inputStyles}></textarea>
          </div>

          <div>
            <label htmlFor="location" className="block text-base font-semibold text-slate-700 dark:text-slate-300 mb-2">Location (Address or Coordinates)</label>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
              <input 
                type="text" 
                id="location" 
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required 
                placeholder="e.g., Near City Park, 123 Main St"
                className={inputStyles}
              />
              <button 
                type="button"
                onClick={handleGetLocation}
                disabled={isLocating}
                className="flex items-center justify-center bg-slate-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-slate-700 transition-colors disabled:bg-slate-400"
              >
                <MapPinIcon className="w-5 h-5 mr-2" />
                {isLocating ? 'Locating...' : 'Use My Location'}
              </button>
            </div>
            {status && <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">{status}</p>}
          </div>

          <div>
            <button type="submit" className="w-full bg-orange-500 text-white font-bold py-4 px-4 rounded-lg text-lg hover:bg-orange-600 transition-colors transform hover:scale-105">
              Submit Report
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReportPage;