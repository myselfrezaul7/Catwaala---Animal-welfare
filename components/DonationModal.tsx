
import React, { useState } from 'react';
import { XIcon, BkashIcon, NagadIcon, BankIcon, HealthIcon } from './icons';
import { useLanguage } from '../contexts/LanguageContext';

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type PaymentMethod = 'bkash' | 'nagad' | 'bank' | 'medicine';

const CopyButton: React.FC<{ textToCopy: string }> = ({ textToCopy }) => {
  const [copied, setCopied] = useState(false);
  const { t } = useLanguage();

  const handleCopy = () => {
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="bg-white/50 dark:bg-black/30 border border-white/20 text-xs font-semibold px-3 py-1.5 rounded-lg hover:bg-white/80 dark:hover:bg-black/50 transition-colors backdrop-blur-sm shadow-sm"
    >
      {copied ? t('buttons.copied') : t('buttons.copy')}
    </button>
  );
};

const DonationModal: React.FC<DonationModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<PaymentMethod>('bkash');
  const { t } = useLanguage();

  if (!isOpen) return null;

  const renderContent = () => {
    switch (activeTab) {
      case 'bkash':
        return (
          <div>
            <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3">{t('donation.bkash.title')}</h3>
            <p className="text-slate-600 dark:text-slate-300 mb-6">{t('donation.bkash.description')}</p>
            <div className="bg-white/40 dark:bg-black/20 p-5 rounded-2xl flex justify-between items-center border border-white/30 dark:border-white/10 shadow-inner">
              <span className="font-mono text-xl font-bold text-slate-800 dark:text-slate-100 tracking-wider">01234567890</span>
              <CopyButton textToCopy="01234567890" />
            </div>
          </div>
        );
      case 'nagad':
        return (
          <div>
            <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3">{t('donation.nagad.title')}</h3>
            <p className="text-slate-600 dark:text-slate-300 mb-6">{t('donation.nagad.description')}</p>
            <div className="bg-white/40 dark:bg-black/20 p-5 rounded-2xl flex justify-between items-center border border-white/30 dark:border-white/10 shadow-inner">
              <span className="font-mono text-xl font-bold text-slate-800 dark:text-slate-100 tracking-wider">01987654321</span>
              <CopyButton textToCopy="01987654321" />
            </div>
          </div>
        );
      case 'bank':
        return (
          <div>
            <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3">{t('donation.bank.title')}</h3>
            <p className="text-slate-600 dark:text-slate-300 mb-6">{t('donation.bank.description')}</p>
            <div className="space-y-3 text-base text-slate-700 dark:text-slate-200 bg-white/40 dark:bg-black/20 p-6 rounded-2xl border border-white/30 dark:border-white/10">
              <p className="flex justify-between border-b border-slate-300/30 pb-2"><span>{t('donation.bank.accountNameLabel')}:</span> <span className="font-semibold">{t('donation.bank.accountName')}</span></p>
              <p className="flex justify-between border-b border-slate-300/30 pb-2"><span>{t('donation.bank.accountNumberLabel')}:</span> <span className="font-mono font-bold">1234567890123</span></p>
              <p className="flex justify-between border-b border-slate-300/30 pb-2"><span>{t('donation.bank.bankNameLabel')}:</span> <span className="font-semibold">Dhaka Bank</span></p>
              <p className="flex justify-between border-b border-slate-300/30 pb-2"><span>{t('donation.bank.branchLabel')}:</span> <span>Dhanmondi</span></p>
              <p className="flex justify-between"><span>{t('donation.bank.swiftCodeLabel')}:</span> <span className="font-mono">DHAKBDDH</span></p>
            </div>
          </div>
        );
      case 'medicine':
        return (
          <div>
            <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3">{t('donation.medicine.title')}</h3>
            <div className="bg-white/40 dark:bg-black/20 p-6 rounded-2xl border border-white/30 dark:border-white/10 text-slate-700 dark:text-slate-300 leading-relaxed">
                 <p dangerouslySetInnerHTML={{ __html: t('donation.medicine.description') }}></p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const TabButton: React.FC<{ method: PaymentMethod, icon: React.ReactNode, label: string }> = ({ method, icon, label }) => (
      <button
        onClick={() => setActiveTab(method)}
        className={`flex-1 p-4 flex flex-col items-center justify-center gap-2 font-semibold transition-all duration-300 ${
          activeTab === method
            ? 'bg-white/40 dark:bg-black/20 text-orange-600 dark:text-orange-400 shadow-inner'
            : 'text-slate-500 dark:text-slate-400 hover:bg-white/20 dark:hover:bg-white/5'
        }`}
      >
        <div className={`p-2 rounded-full ${activeTab === method ? 'bg-orange-100 dark:bg-orange-900/50' : 'bg-transparent'}`}>
            {icon}
        </div>
        <span className="text-sm">{label}</span>
      </button>
  );

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex justify-center items-center p-4 transition-all duration-500" onClick={onClose}>
      <div 
        className="bg-white/60 dark:bg-slate-900/60 backdrop-blur-2xl border border-white/40 dark:border-white/10 w-full rounded-[2rem] shadow-2xl max-w-xl overflow-hidden animate-fade-in-up" 
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 sm:p-8">
            <div className="flex justify-between items-start mb-8">
              <div>
                  <h2 className="text-3xl font-extrabold text-slate-800 dark:text-slate-100">{t('donation.title')}</h2>
                  <p className="text-slate-600 dark:text-slate-300 text-lg mt-1 font-light">{t('donation.subtitle')}</p>
              </div>
              <button onClick={onClose} className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 text-slate-500 hover:text-slate-800 dark:hover:text-white transition-colors">
                  <XIcon className="w-6 h-6" />
              </button>
            </div>

            <div className="rounded-2xl overflow-hidden border border-white/30 dark:border-white/10">
                <div className="flex bg-white/20 dark:bg-black/20 backdrop-blur-md">
                    <TabButton method="bkash" icon={<BkashIcon className="w-6 h-6" />} label="bKash" />
                    <TabButton method="nagad" icon={<NagadIcon className="w-6 h-6" />} label="Nagad" />
                    <TabButton method="bank" icon={<BankIcon className="w-6 h-6" />} label={t('donation.tabs.bank')} />
                    <TabButton method="medicine" icon={<HealthIcon className="w-6 h-6" />} label={t('donation.tabs.medicine')} />
                </div>

                <div className="bg-white/30 dark:bg-slate-800/30 p-6 backdrop-blur-xl">
                    {renderContent()}
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default DonationModal;
