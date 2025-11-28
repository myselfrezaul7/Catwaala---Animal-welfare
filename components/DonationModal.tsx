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
      className="bg-slate-200 dark:bg-slate-600 text-xs font-semibold px-2 py-1 rounded-md hover:bg-slate-300 dark:hover:bg-slate-500"
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
            <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-2">{t('donation.bkash.title')}</h3>
            <p className="text-slate-600 dark:text-slate-400">{t('donation.bkash.description')}</p>
            <div className="mt-4 bg-slate-200 dark:bg-slate-700/50 p-3 rounded-lg flex justify-between items-center">
              <span className="font-mono text-lg text-slate-700 dark:text-slate-200">01234567890</span>
              <CopyButton textToCopy="01234567890" />
            </div>
          </div>
        );
      case 'nagad':
        return (
          <div>
            <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-2">{t('donation.nagad.title')}</h3>
            <p className="text-slate-600 dark:text-slate-400">{t('donation.nagad.description')}</p>
            <div className="mt-4 bg-slate-200 dark:bg-slate-700/50 p-3 rounded-lg flex justify-between items-center">
              <span className="font-mono text-lg text-slate-700 dark:text-slate-200">01987654321</span>
              <CopyButton textToCopy="01987654321" />
            </div>
          </div>
        );
      case 'bank':
        return (
          <div>
            <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-2">{t('donation.bank.title')}</h3>
            <p className="text-slate-600 dark:text-slate-400">{t('donation.bank.description')}</p>
            <div className="mt-4 space-y-2 text-sm text-slate-700 dark:text-slate-300">
              <p><strong>{t('donation.bank.accountNameLabel')}:</strong> {t('donation.bank.accountName')}</p>
              <p><strong>{t('donation.bank.accountNumberLabel')}:</strong> 1234567890123</p>
              <p><strong>{t('donation.bank.bankNameLabel')}:</strong> Dhaka Bank</p>
              <p><strong>{t('donation.bank.branchLabel')}:</strong> Dhanmondi</p>
              <p><strong>{t('donation.bank.swiftCodeLabel')}:</strong> DHAKBDDH</p>
            </div>
          </div>
        );
      case 'medicine':
        return (
          <div>
            <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-2">{t('donation.medicine.title')}</h3>
            <p className="text-slate-600 dark:text-slate-400" dangerouslySetInnerHTML={{ __html: t('donation.medicine.description') }}></p>
          </div>
        );
      default:
        return null;
    }
  };

  const TabButton: React.FC<{ method: PaymentMethod, icon: React.ReactNode, label: string }> = ({ method, icon, label }) => (
      <button
        onClick={() => setActiveTab(method)}
        className={`flex-1 p-3 rounded-t-lg flex flex-col sm:flex-row items-center justify-center gap-2 font-semibold transition-colors ${
          activeTab === method
            ? 'bg-slate-100 dark:bg-slate-800 text-orange-600 dark:text-orange-400 border-b-2 border-orange-500'
            : 'text-slate-500 dark:text-slate-400 hover:bg-slate-200/50 dark:hover:bg-slate-700/50'
        }`}
      >
        {icon}
        <span>{label}</span>
      </button>
  );

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center p-0 sm:p-4" onClick={onClose}>
      <div 
        className="bg-slate-100/70 dark:bg-slate-800/70 backdrop-blur-lg border border-white/20 dark:border-slate-700/50 w-full h-full sm:rounded-2xl shadow-2xl sm:max-w-xl sm:h-auto overflow-y-auto" 
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 sm:p-8">
            <div className="flex justify-between items-start mb-6">
              <div>
                  <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100">{t('donation.title')}</h2>
                  <p className="text-slate-600 dark:text-slate-300 text-lg mt-1">{t('donation.subtitle')}</p>
              </div>
              <button onClick={onClose} className="text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 text-4xl font-light">&times;</button>
            </div>

            <div className="flex border-b border-slate-300 dark:border-slate-700 text-sm">
                <TabButton method="bkash" icon={<BkashIcon className="w-6 h-6" />} label="bKash" />
                <TabButton method="nagad" icon={<NagadIcon className="w-6 h-6" />} label="Nagad" />
                <TabButton method="bank" icon={<BankIcon className="w-6 h-6" />} label={t('donation.tabs.bank')} />
                <TabButton method="medicine" icon={<HealthIcon className="w-6 h-6" />} label={t('donation.tabs.medicine')} />
            </div>

            <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-b-lg">
                {renderContent()}
            </div>
        </div>
      </div>
    </div>
  );
};

export default DonationModal;