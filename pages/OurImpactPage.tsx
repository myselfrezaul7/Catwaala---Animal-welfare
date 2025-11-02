import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MOCK_IMPACT_STATS } from '../constants';
import useCountUp from '../hooks/useCountUp';
import { CatIcon, HeartIcon } from '../components/icons';
import DonationModal from '../components/DonationModal';

const StatCard: React.FC<{ value: number, label: string, icon: React.ReactNode }> = ({ value, label, icon }) => {
    const count = useCountUp(value, 2000);
    return (
        <div className="bg-slate-100/30 dark:bg-slate-800/30 backdrop-blur-lg border border-white/20 dark:border-slate-700/50 rounded-2xl shadow-xl p-6 text-center flex flex-col items-center justify-center">
            <div className="text-orange-500 mb-3">{icon}</div>
            <p className="text-4xl sm:text-5xl font-extrabold text-slate-800 dark:text-slate-100">{count.toLocaleString()}</p>
            <p className="text-lg font-semibold text-slate-600 dark:text-slate-400 mt-1">{label}</p>
        </div>
    );
};

const OurImpactPage: React.FC = () => {
    const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);
    const { rescuedThisYear, successfulAdoptions, mealsProvided, shelterFundGoal, shelterFundCurrent } = MOCK_IMPACT_STATS;
    const shelterFundProgress = useCountUp(Math.round((shelterFundCurrent / shelterFundGoal) * 100), 2500);
    const raisedAmount = useCountUp(shelterFundCurrent);

    return (
    <>
        <div className="container mx-auto px-6 py-16">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-slate-100">Your Support in Action</h1>
                <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mt-4">
                    See the tangible difference you make. Every donation, adoption, and share contributes to these numbers and helps us save more lives.
                </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <StatCard value={rescuedThisYear} label="Animals Rescued This Year" icon={<CatIcon className="w-12 h-12" />} />
                <StatCard value={successfulAdoptions} label="Successful Adoptions" icon={<HeartIcon className="w-12 h-12" />} />
                <StatCard value={mealsProvided} label="Meals Provided This Month" icon={<CatIcon className="w-12 h-12" />} />
            </div>

            <div className="mt-16 text-center">
                <Link 
                    to="/happy-tails" 
                    className="inline-block bg-white dark:bg-slate-700/50 border border-slate-300 dark:border-slate-600/50 shadow-lg rounded-full py-4 px-10 transform hover:scale-105 transition-transform duration-300"
                >
                    <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100">Read our Happy Tails!</h3>
                    <p className="text-slate-600 dark:text-slate-400 mt-1">See the real-life stories of animals who found their forever homes.</p>
                </Link>
            </div>

            <div className="mt-16 bg-slate-100/30 dark:bg-slate-800/30 backdrop-blur-lg border border-white/20 dark:border-slate-700/50 rounded-2xl shadow-xl p-8 md:p-12 text-center">
                <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-4">Help Us Build a New Shelter!</h2>
                <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-8">
                    We're raising funds for a larger, modern facility to rescue and care for even more animals.
                </p>

                <div className="w-full bg-slate-200/50 dark:bg-slate-700/50 rounded-full h-8 overflow-hidden">
                    <div 
                        className="bg-gradient-to-r from-orange-500 to-red-500 h-full rounded-full transition-all duration-1000 ease-out flex items-center justify-center text-white font-bold"
                        style={{ width: `${shelterFundProgress}%` }}
                    >
                       {shelterFundProgress > 10 && `${shelterFundProgress}%`}
                    </div>
                </div>
                <div className="flex justify-between items-center mt-3 text-sm font-semibold text-slate-700 dark:text-slate-300">
                    <span>${raisedAmount.toLocaleString()} Raised</span>
                    <span>Goal: ${shelterFundGoal.toLocaleString()}</span>
                </div>
                 <button 
                    onClick={() => setIsDonationModalOpen(true)}
                    className="mt-8 bg-red-500 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-red-600 transition-transform transform hover:scale-105 duration-300 shadow-lg"
                 >
                    Donate to the Shelter Fund
                </button>
            </div>
        </div>
        <DonationModal
            isOpen={isDonationModalOpen}
            onClose={() => setIsDonationModalOpen(false)}
        />
    </>
  );
};

export default OurImpactPage;
