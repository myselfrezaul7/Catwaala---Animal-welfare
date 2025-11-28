import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const FAQItem: React.FC<{ question: string, children: React.ReactNode }> = ({ question, children }) => (
  <div className="py-6 border-b border-slate-200 dark:border-slate-700">
    <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">{question}</h3>
    <div className="text-slate-600 dark:text-slate-400 mt-2 text-base leading-relaxed space-y-4">
      {children}
    </div>
  </div>
);

const FAQPage: React.FC = () => {
  const { t } = useLanguage();
  
  const faqs = [
    {
      question: t('faq.q1.question'),
      answer: t('faq.q1.answer')
    },
    {
      question: t('faq.q2.question'),
      answer: t('faq.q2.answer')
    },
    {
      question: t('faq.q3.question'),
      answer: t('faq.q3.answer')
    },
    {
      question: t('faq.q4.question'),
      answer: t('faq.q4.answer')
    },
    {
      question: t('faq.q5.question'),
      answer: t('faq.q5.answer')
    }
  ];

  return (
    <div className="container mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 dark:text-slate-100">{t('faq.title')}</h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mt-4">
          {t('faq.subtitle')}
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question}>
            <p dangerouslySetInnerHTML={{ __html: faq.answer }}></p>
          </FAQItem>
        ))}
      </div>
    </div>
  );
};

export default FAQPage;