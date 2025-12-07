
import React, { useState, useRef, useEffect, useCallback } from 'react';
import type { ChatMessage } from '../types';
import { getVetAssistantResponse } from '../services/geminiService';
import { CatIcon, SendIcon, XIcon, CopyIcon, CheckCircleIcon, TrashIcon, AlertTriangleIcon } from '../components/icons';
import { useLanguage } from '../contexts/LanguageContext';

const CHAT_HISTORY_KEY = 'catwaala_ai_chat_history';

const CopyButton = ({ textToCopy }: { textToCopy: string }) => {
  const [isCopied, setIsCopied] = useState(false);
  const { t } = useLanguage();

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(textToCopy).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    });
  }, [textToCopy]);

  return (
    <button
      onClick={handleCopy}
      className="absolute top-2 right-2 p-2 bg-white/50 dark:bg-black/30 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-white/80 dark:hover:bg-black/50 opacity-0 group-hover:opacity-100 focus:opacity-100 transition-all duration-300 backdrop-blur-sm shadow-sm"
      aria-label={t('aiVet.copyAriaLabel')}
    >
      {isCopied ? (
        <CheckCircleIcon className="w-4 h-4 text-green-500" />
      ) : (
        <CopyIcon className="w-4 h-4" />
      )}
    </button>
  );
};

const AIAssistantPage: React.FC = () => {
  const { t } = useLanguage();
  
  const initialMessages = useCallback(() => [
      { sender: 'ai' as const, text: t('aiVet.initialGreeting') }
  ], [t]);
  
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>(() => {
    try {
        const savedHistory = sessionStorage.getItem(CHAT_HISTORY_KEY);
        return savedHistory ? JSON.parse(savedHistory) : initialMessages();
    } catch (error) {
        console.error("Failed to parse chat history from sessionStorage", error);
        return initialMessages();
    }
  });
  const [userInput, setUserInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isWarningVisible, setIsWarningVisible] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sessionStorage.getItem('catwaala_aiVetWarningDismissed') !== 'true') {
      setIsWarningVisible(true);
    }
  }, []);

  const scrollToBottom = () => {
      chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatHistory, isLoading]);

  useEffect(() => {
    try {
        sessionStorage.setItem(CHAT_HISTORY_KEY, JSON.stringify(chatHistory));
    } catch (error) {
        console.error("Failed to save chat history to sessionStorage", error);
    }
  }, [chatHistory]);
  
  const handleDismissWarning = useCallback(() => {
    sessionStorage.setItem('catwaala_aiVetWarningDismissed', 'true');
    setIsWarningVisible(false);
  }, []);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim() || isLoading) return;

    const newUserMessage: ChatMessage = { sender: 'user', text: userInput };
    setChatHistory(prev => [...prev, newUserMessage]);
    const currentInput = userInput;
    setUserInput('');
    setIsLoading(true);

    try {
      const aiResponseText = await getVetAssistantResponse(currentInput, t('aiVet.disclaimer'));
      const newAiMessage: ChatMessage = { sender: 'ai', text: aiResponseText };
      setChatHistory(prev => [...prev, newAiMessage]);
    } catch (error) {
      const errorMessageText = error instanceof Error ? t(`errors.${error.message}`, { default: error.message }) : t('errors.unknown');
      const errorMessage: ChatMessage = { sender: 'ai', text: errorMessageText };
      setChatHistory(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  }, [userInput, isLoading, t]);

  const handleClearChat = useCallback(() => {
    if (window.confirm(t('aiVet.clearChatConfirmation'))) {
        setChatHistory(initialMessages());
        sessionStorage.removeItem(CHAT_HISTORY_KEY);
    }
  }, [t, initialMessages]);

  return (
    <div className="flex flex-col flex-grow container mx-auto px-4 py-6 max-w-5xl h-[calc(100vh-120px)]">
       {isWarningVisible && (
         <div className="relative bg-red-500/10 border border-red-500/20 backdrop-blur-md dark:bg-red-900/30 text-red-800 dark:text-red-100 p-4 md:p-5 rounded-2xl mb-6 shadow-lg animate-fade-in-up">
            <div className="flex items-start gap-4">
                <div className="mt-0.5 p-2 bg-red-500/20 rounded-full"><AlertTriangleIcon className="w-5 h-5 text-red-600 dark:text-red-300"/></div>
                <div>
                    <h2 className="font-bold text-sm uppercase tracking-wider mb-1">{t('aiVet.warning.title')}</h2>
                    <p className="text-sm leading-relaxed opacity-90" dangerouslySetInnerHTML={{ __html: t('aiVet.warning.text') }}></p>
                </div>
            </div>
            <button 
              onClick={handleDismissWarning}
              className="absolute top-3 right-3 p-1.5 rounded-full hover:bg-red-500/20 text-red-600 dark:text-red-300 transition-colors"
              aria-label={t('aiVet.warning.dismissAriaLabel')}
            >
              <XIcon className="w-4 h-4" />
            </button>
        </div>
       )}
      
      <div className="text-center mb-6 animate-fade-in-up">
        <h1 className="text-3xl md:text-5xl font-black text-slate-800 dark:text-slate-100 flex items-center justify-center gap-3 drop-shadow-sm">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-red-600">AI Vet</span> Assistant
        </h1>
        <p className="text-slate-600 dark:text-slate-300 mt-2 text-base md:text-lg font-light">{t('aiVet.subtitle')}</p>
      </div>

      <div className="flex-grow bg-white/40 dark:bg-black/30 backdrop-blur-2xl border border-white/40 dark:border-white/10 rounded-[2rem] shadow-2xl flex flex-col overflow-hidden animate-fade-in-up">
        <div className="flex-grow p-4 md:p-8 overflow-y-auto custom-scrollbar space-y-6">
            {chatHistory.map((message, index) => (
              <div key={index} className={`flex items-end gap-3 md:gap-4 animate-fade-in ${message.sender === 'user' ? 'justify-end' : ''}`}>
                {message.sender === 'ai' && (
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-tr from-orange-400 to-red-500 flex items-center justify-center text-white shadow-lg flex-shrink-0 mb-1 ring-2 ring-white/50">
                    <CatIcon className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                )}
                <div className={`relative group p-4 md:p-6 rounded-3xl max-w-[85%] md:max-w-[75%] whitespace-pre-wrap leading-relaxed shadow-sm backdrop-blur-md transition-all duration-300 ${
                  message.sender === 'user' 
                  ? 'bg-orange-500 text-white rounded-br-none shadow-orange-500/20' 
                  : 'bg-white/70 dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 rounded-bl-none border border-white/50 dark:border-white/10'
                }`}>
                  <p className="text-sm md:text-base">{message.text}</p>
                  {message.sender === 'ai' && <CopyButton textToCopy={message.text} />}
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex items-end gap-3 md:gap-4 animate-fade-in">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-tr from-orange-400 to-red-500 flex items-center justify-center text-white shadow-lg flex-shrink-0 mb-1 ring-2 ring-white/50">
                  <CatIcon className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div className="bg-white/70 dark:bg-slate-800/80 p-5 rounded-3xl rounded-bl-none border border-white/50 dark:border-white/10 shadow-sm backdrop-blur-md">
                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-1.5">
                        <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                        <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                        <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce"></div>
                    </div>
                    <span className="text-sm text-slate-500 dark:text-slate-400 font-medium ml-3 animate-pulse">{t('aiVet.thinking')}</span>
                  </div>
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
        </div>
        
        <div className="p-4 md:p-6 bg-white/40 dark:bg-black/40 border-t border-white/30 dark:border-white/10 backdrop-blur-xl">
          <form onSubmit={handleSubmit} className="flex items-center gap-3 relative">
            {chatHistory.length > 1 && (
                <button
                    type="button"
                    onClick={handleClearChat}
                    disabled={isLoading}
                    className="p-3 md:p-4 text-slate-500 hover:text-red-500 hover:bg-red-500/10 rounded-full transition-all disabled:opacity-50"
                    aria-label={t('aiVet.clearChatAriaLabel')}
                >
                    <TrashIcon className="w-6 h-6" />
                </button>
            )}
            <div className="relative flex-grow">
                <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder={t('aiVet.inputPlaceholder')}
                className="w-full py-4 pl-6 pr-14 bg-white/80 dark:bg-slate-900/80 border border-white/50 dark:border-white/10 rounded-full focus:ring-4 focus:ring-orange-500/20 focus:border-orange-500 outline-none text-slate-800 dark:text-slate-100 placeholder:text-slate-500 transition-all shadow-inner backdrop-blur-md"
                disabled={isLoading}
                />
                <button 
                    type="submit" 
                    disabled={isLoading || !userInput.trim()} 
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2.5 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-full hover:shadow-lg hover:scale-105 disabled:bg-slate-400 disabled:from-slate-400 disabled:to-slate-400 disabled:cursor-not-allowed transition-all shadow-md"
                >
                <SendIcon className="w-5 h-5" />
                </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AIAssistantPage;
