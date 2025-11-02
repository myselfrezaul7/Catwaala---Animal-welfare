import React, { useState, useRef, useEffect, useCallback } from 'react';
import type { ChatMessage } from '../types';
import { getVetAssistantResponse } from '../services/geminiService';
import { CatIcon, SendIcon, XIcon, CopyIcon, CheckCircleIcon } from '../components/icons';

const CopyButton = ({ textToCopy }: { textToCopy: string }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(textToCopy).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    });
  }, [textToCopy]);

  return (
    <button
      onClick={handleCopy}
      className="absolute top-2 right-2 p-1.5 bg-slate-300/50 dark:bg-slate-800/50 rounded-md text-slate-600 dark:text-slate-300 hover:bg-slate-400/50 dark:hover:bg-slate-600/50 opacity-0 group-hover:opacity-100 focus:opacity-100 transition-all duration-200"
      aria-label="Copy response"
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
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
  const [userInput, setUserInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isWarningVisible, setIsWarningVisible] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Show warning only if it hasn't been dismissed in the current session
    if (sessionStorage.getItem('aiVetWarningDismissed') !== 'true') {
      setIsWarningVisible(true);
    }
  }, []);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatHistory]);
  
  const handleDismissWarning = useCallback(() => {
    sessionStorage.setItem('aiVetWarningDismissed', 'true');
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
      const aiResponseText = await getVetAssistantResponse(currentInput);
      const newAiMessage: ChatMessage = { sender: 'ai', text: aiResponseText };
      setChatHistory(prev => [...prev, newAiMessage]);
    } catch (error) {
      const errorMessageText = error instanceof Error ? error.message : "Oops! Something went wrong. Please try again.";
      const errorMessage: ChatMessage = { sender: 'ai', text: errorMessageText };
      setChatHistory(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  }, [userInput, isLoading]);

  return (
    <div className="flex flex-col flex-grow container mx-auto p-4 max-w-3xl">
       {isWarningVisible && (
         <div className="relative bg-red-500/10 border-l-4 border-red-500 text-red-800 dark:text-red-200 p-4 rounded-r-lg mb-6">
            <h2 className="font-bold pr-6">Important: For First Aid Guidance Only</h2>
            <p className="text-sm mt-1 pr-6">This AI Vet provides immediate, preliminary advice and is not a substitute for professional veterinary care. For any health concerns, <strong className="font-bold">always consult a licensed, in-person veterinarian.</strong></p>
            <button 
              onClick={handleDismissWarning}
              className="absolute top-2 right-2 p-1 rounded-full hover:bg-red-200 dark:hover:bg-red-900/50"
              aria-label="Dismiss warning"
            >
              <XIcon className="w-5 h-5" />
            </button>
        </div>
       )}
      <div className="text-center mb-6">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100">AI Vet</h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 mt-1">Ask for preliminary first aid and general cat care advice.</p>
      </div>
      <div className="flex-grow bg-slate-100/30 dark:bg-slate-800/30 backdrop-blur-lg border border-white/20 dark:border-slate-700/50 rounded-2xl shadow-xl flex flex-col overflow-hidden">
        <div className="flex-grow p-6 overflow-y-auto">
          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <div className="bg-orange-500 p-2 rounded-full text-white flex-shrink-0">
                  <CatIcon className="w-6 h-6" />
              </div>
              <div className="relative group bg-slate-200/50 dark:bg-slate-700/50 p-4 rounded-xl rounded-tl-none max-w-lg">
                <p className="text-slate-800 dark:text-slate-200">Hello! I'm CATWAALA's AI Vet. Please remember my advice is for first aid guidance only. How can I help you with your cat today?</p>
                <CopyButton textToCopy="Hello! I'm CATWAALA's AI Vet. Please remember my advice is for first aid guidance only. How can I help you with your cat today?" />
              </div>
            </div>

            {chatHistory.map((message, index) => (
              <div key={index} className={`flex items-start gap-3 ${message.sender === 'user' ? 'justify-end' : ''}`}>
                {message.sender === 'ai' && (
                  <div className="bg-orange-500 p-2 rounded-full text-white flex-shrink-0">
                    <CatIcon className="w-6 h-6" />
                  </div>
                )}
                <div className={`relative group p-4 rounded-xl max-w-lg whitespace-pre-wrap ${
                  message.sender === 'user' 
                  ? 'bg-orange-500 text-white rounded-br-none' 
                  : 'bg-slate-200/50 dark:bg-slate-700/50 text-slate-800 dark:text-slate-200 rounded-tl-none'
                }`}>
                  <p>{message.text}</p>
                  {message.sender === 'ai' && <CopyButton textToCopy={message.text} />}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex items-start gap-3">
                <div className="bg-orange-500 p-2 rounded-full text-white">
                  <CatIcon className="w-6 h-6" />
                </div>
                <div className="bg-slate-200/50 dark:bg-slate-700/50 p-4 rounded-xl rounded-tl-none">
                  <div className="flex items-center space-x-2 text-slate-700 dark:text-slate-300">
                    <div className="w-2 h-2 bg-slate-500 rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-slate-500 rounded-full animate-pulse [animation-delay:0.2s]"></div>
                    <div className="w-2 h-2 bg-slate-500 rounded-full animate-pulse [animation-delay:0.4s]"></div>
                    <span>Thinking...</span>
                  </div>
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>
        </div>
        <div className="p-4 bg-slate-500/10 border-t border-white/20 dark:border-slate-700/50">
          <form onSubmit={handleSubmit} className="flex items-center space-x-3">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Ask a question about cat care..."
              className="flex-grow p-3 bg-transparent border border-slate-300 dark:border-slate-600 rounded-full focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-slate-800 dark:text-slate-100"
              disabled={isLoading}
            />
            <button type="submit" disabled={isLoading || !userInput.trim()} className="bg-orange-500 text-white rounded-full p-3 hover:bg-orange-600 disabled:bg-orange-300 disabled:cursor-not-allowed transition-colors">
              <SendIcon className="w-6 h-6" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AIAssistantPage;
