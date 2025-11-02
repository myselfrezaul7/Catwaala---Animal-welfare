import React, { useState } from 'react';
import { XIcon, BkashIcon, NagadIcon, BankIcon, HealthIcon } from './icons';

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type PaymentMethod = 'bkash' | 'nagad' | 'bank' | 'medicine';

const CopyButton: React.FC<{ textToCopy: string }> = ({ textToCopy }) => {
  const [copied, setCopied] = useState(false);

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
      {copied ? 'Copied!' : 'Copy'}
    </button>
  );
};

const DonationModal: React.FC<DonationModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<PaymentMethod>('bkash');

  if (!isOpen) return null;

  const renderContent = () => {
    switch (activeTab) {
      case 'bkash':
        return (
          <div>
            <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-2">Donate via bKash</h3>
            <p className="text-slate-600 dark:text-slate-400">You can send money to our official bKash merchant number.</p>
            <div className="mt-4 p-4 bg-slate-200/50 dark:bg-slate-700/50 rounded-lg flex items-center justify-between">
              <span className="font-mono text-lg text-slate-800 dark:text-slate-200">01700000000</span>
              <CopyButton textToCopy="01700000000" />
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-500 mt-2">Please use the 'Send Money' option in your bKash app.</p>
          </div>
        );
      case 'nagad':
        return (
          <div>
            <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-2">Donate via Nagad</h3>
            <p className="text-slate-600 dark:text-slate-400">You can send money to our official Nagad personal number.</p>
            <div className="mt-4 p-4 bg-slate-200/50 dark:bg-slate-700/50 rounded-lg flex items-center justify-between">
              <span className="font-mono text-lg text-slate-800 dark:text-slate-200">01800000000</span>
              <CopyButton textToCopy="01800000000" />
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-500 mt-2">Please use the 'Send Money' option in your Nagad app.</p>
          </div>
        );
      case 'bank':
        return (
          <div>
            <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-2">Bank Transfer</h3>
            <p className="text-slate-600 dark:text-slate-400">You can directly deposit into our bank account.</p>
            <div className="mt-4 space-y-3 text-slate-700 dark:text-slate-300">
              <div className="flex justify-between items-center"><span>Account Name:</span> <strong className="font-mono">CATWAALA Foundation</strong></div>
              <div className="flex justify-between items-center"><span>Account Number:</span> <strong className="font-mono">1234567890123</strong></div>
              <div className="flex justify-between items-center"><span>Bank Name:</span> <strong className="font-mono">Dhaka Bank</strong></div>
              <div className="flex justify-between items-center"><span>Branch:</span> <strong className="font-mono">Gulshan Avenue</strong></div>
            </div>
          </div>
        );
      case 'medicine':
        return (
          <div>
            <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-2">Donate Essential Medicines</h3>
            <p className="text-slate-600 dark:text-slate-400">
                Your contribution of medical supplies can make a world of difference for an animal in recovery. We are always in need of:
            </p>
            <ul className="list-disc list-inside my-4 text-slate-700 dark:text-slate-300 space-y-1">
                <li>Flea, tick, and worm treatments</li>
                <li>Antiseptic sprays and wound care supplies</li>
                <li>Cat-safe pain relief medication</li>
                <li>Vitamins and supplements</li>
            </ul>
            <p className="text-slate-600 dark:text-slate-400">
                To arrange a drop-off or for more details, please contact us at:
            </p>
            <div className="mt-4 p-4 bg-slate-200/50 dark:bg-slate-700/50 rounded-lg space-y-2">
                <div className="flex items-center justify-between">
                    <span className="font-semibold">Phone:</span>
                    <a href="tel:01700000001" className="font-mono text-slate-800 dark:text-slate-200 hover:text-orange-600 dark:hover:text-orange-400 hover:underline">01700000001</a>
                </div>
                <div className="flex items-center justify-between">
                    <span className="font-semibold">Email:</span>
                    <a href="mailto:catwaala@gmail.com" className="font-mono text-slate-800 dark:text-slate-200 hover:text-orange-600 dark:hover:text-orange-400 hover:underline">catwaala@gmail.com</a>
                </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const getTabClass = (tab: PaymentMethod) => {
    return `flex-1 py-3 px-2 text-center font-bold border-b-4 transition-colors duration-300 flex items-center justify-center gap-2 ${
      activeTab === tab 
      ? 'border-orange-500 text-orange-600 dark:text-orange-400' 
      : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
    }`;
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center p-4" onClick={onClose}>
      <div className="bg-slate-100/70 dark:bg-slate-800/70 backdrop-blur-lg border border-white/20 dark:border-slate-700/50 rounded-2xl shadow-2xl w-full max-w-md" onClick={(e) => e.stopPropagation()}>
        <div className="p-6 relative">
          <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200">
            <XIcon className="w-6 h-6" />
          </button>
          <h2 className="text-2xl font-bold text-center text-slate-800 dark:text-slate-100 mb-4">Support Our Cause</h2>
          
          <div className="border-b border-slate-300 dark:border-slate-700 mb-6">
            <nav className="flex -mb-px">
              <button onClick={() => setActiveTab('bkash')} className={getTabClass('bkash')}><BkashIcon className="w-5 h-5" /> bKash</button>
              <button onClick={() => setActiveTab('nagad')} className={getTabClass('nagad')}><NagadIcon className="w-5 h-5" /> Nagad</button>
              <button onClick={() => setActiveTab('bank')} className={getTabClass('bank')}><BankIcon className="w-5 h-5" /> Bank</button>
              <button onClick={() => setActiveTab('medicine')} className={getTabClass('medicine')}><HealthIcon className="w-5 h-5" /> Medicine</button>
            </nav>
          </div>

          <div className="min-h-[150px]">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationModal;