import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { getPerfectMatch } from '../services/geminiService';
import { MOCK_ANIMALS } from '../constants';
import type { Animal } from '../types';
import AnimalCard from '../components/AnimalCard';
import { SparklesIcon } from '../components/icons';
import Alert from '../components/Alert';

interface MatchResult {
    animalId: number;
    reasoning: string;
}

const quizQuestions = [
    {
        question: "How would you describe your household's energy level?",
        options: ["Calm & Quiet", "Moderately Active", "Busy & Energetic"],
        key: 'energy'
    },
    {
        question: "What's your living situation like?",
        options: ["Apartment", "House with outdoor access", "House with no outdoor access"],
        key: 'livingSituation'
    },
    {
        question: "Do you have other pets or children?",
        options: ["Yes, other pets", "Yes, children", "Both other pets and children", "No, neither"],
        key: 'household'
    },
    {
        question: "What kind of feline personality are you looking for?",
        options: ["A cuddly lap cat", "An independent explorer", "A playful companion"],
        key: 'personality'
    }
];

const PerfectMatchQuizPage: React.FC = () => {
    const [step, setStep] = useState(0);
    const [answers, setAnswers] = useState<Record<string, string>>({});
    const [isLoading, setIsLoading] = useState(false);
    const [results, setResults] = useState<MatchResult[]>([]);
    const [error, setError] = useState('');

    const handleSubmit = useCallback(async (finalAnswers: Record<string, string>) => {
        setIsLoading(true);
        setError('');
        setResults([]);
        
        const preferencesString = Object.entries(finalAnswers)
            .map(([key, value]) => `${quizQuestions.find(q=>q.key === key)?.question}: ${value}`)
            .join('. ');
        
        try {
            const responseText = await getPerfectMatch(preferencesString, MOCK_ANIMALS);
            const parsedResponse = JSON.parse(responseText);
            if(parsedResponse.matches && parsedResponse.matches.length > 0) {
                setResults(parsedResponse.matches);
            } else {
                 setError("The AI couldn't find a perfect match right now, but feel free to browse all our lovely cats!");
            }
        } catch (err) {
            console.error(err);
            const errorMessage = err instanceof Error ? err.message : "Sorry, an error occurred while finding your match. Please try again.";
            setError(errorMessage);
        } finally {
            setIsLoading(false);
        }
    }, []);

    const handleAnswer = useCallback((key: string, option: string) => {
        const newAnswers = { ...answers, [key]: option };
        setAnswers(newAnswers);
        if (step < quizQuestions.length - 1) {
            setStep(step + 1);
        } else {
            handleSubmit(newAnswers);
        }
    }, [step, answers, handleSubmit]);

    const handleRestart = useCallback(() => {
        setStep(0);
        setAnswers({});
        setResults([]);
        setError('');
    }, []);

    const matchedAnimals = results.map(result => {
        const animal = MOCK_ANIMALS.find(a => a.id === result.animalId);
        return { ...animal, reasoning: result.reasoning };
    }).filter(a => a.id !== undefined) as (Animal & { reasoning: string })[];

    return (
        <div className="container mx-auto px-6 py-12 flex-grow flex items-center justify-center">
            <div className="w-full max-w-3xl">
                <div className="bg-slate-100/30 dark:bg-slate-800/30 backdrop-blur-lg border border-white/20 dark:border-slate-700/50 p-8 md:p-12 rounded-2xl shadow-xl">
                    {results.length === 0 && !isLoading && !error && (
                        <>
                            <div className="text-center mb-8">
                                <h1 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-100">Find Your Perfect Match</h1>
                                <p className="text-lg text-slate-600 dark:text-slate-400 mt-2">Answer a few questions to let our AI find the best cat for you.</p>
                                <div className="w-full bg-slate-200/50 dark:bg-slate-700/50 rounded-full h-2.5 mt-6">
                                    <div className="bg-orange-500 h-2.5 rounded-full" style={{ width: `${((step + 1) / quizQuestions.length) * 100}%`, transition: 'width 0.3s ease-in-out' }}></div>
                                </div>
                            </div>
                            <div>
                                <h2 className="text-2xl font-semibold text-center text-slate-700 dark:text-slate-200">{quizQuestions[step].question}</h2>
                                <div className="mt-8 grid grid-cols-1 gap-4">
                                    {quizQuestions[step].options.map(option => (
                                        <button
                                            key={option}
                                            onClick={() => handleAnswer(quizQuestions[step].key, option)}
                                            className="w-full text-left p-5 bg-slate-200/50 dark:bg-slate-700/50 rounded-lg text-lg font-medium text-slate-800 dark:text-slate-100 hover:bg-orange-500/20 hover:ring-2 hover:ring-orange-500 transition-all duration-200"
                                        >
                                            {option}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </>
                    )}
                    
                    {isLoading && (
                        <div className="text-center py-10">
                            <SparklesIcon className="w-16 h-16 text-orange-500 mx-auto animate-pulse" />
                            <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mt-6">Finding your match...</h2>
                            <p className="text-lg text-slate-600 dark:text-slate-400 mt-2">Our AI is analyzing your preferences!</p>
                        </div>
                    )}
                    
                    {error && !isLoading && (
                         <div className="text-center py-10">
                            <Alert type="error" title="An Error Occurred" message={error} />
                            <div className="mt-8 flex justify-center gap-4">
                                <button onClick={handleRestart} className="bg-orange-500 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-orange-600">Try Again</button>
                                <Link to="/adopt" className="font-semibold text-slate-600 dark:text-slate-300 hover:text-orange-600 dark:hover:text-orange-400 py-3 px-8 rounded-full hover:bg-slate-500/10">Browse All</Link>
                            </div>
                        </div>
                    )}

                    {!isLoading && results.length > 0 && (
                        <div>
                            <div className="text-center mb-10">
                                <h1 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-100">Here are your perfect matches!</h1>
                                <p className="text-lg text-slate-600 dark:text-slate-400 mt-2">Based on your answers, our AI thinks you'll get along great with these friends.</p>
                            </div>
                            <div className="space-y-8">
                                {matchedAnimals.map(animal => (
                                    <div key={animal.id}>
                                        <div className="bg-orange-500/10 border-l-4 border-orange-500 p-4 rounded-r-lg mb-4">
                                            <p className="font-semibold text-orange-800 dark:text-orange-200"><SparklesIcon className="w-5 h-5 inline-block mr-2"/>AI Recommendation:</p>
                                            <p className="text-orange-700 dark:text-orange-300 italic">"{animal.reasoning}"</p>
                                        </div>
                                        <AnimalCard animal={animal} />
                                    </div>
                                ))}
                            </div>
                             <div className="text-center mt-12">
                                <button onClick={handleRestart} className="bg-orange-500 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-orange-600">Start Over</button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PerfectMatchQuizPage;
