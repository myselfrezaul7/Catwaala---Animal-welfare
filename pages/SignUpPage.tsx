import React, { useState, useCallback } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { GoogleIcon } from '../components/icons';
import Alert from '../components/Alert';

const SignUpPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { signup, login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (password.length < 6) {
        setError("Password must be at least 6 characters long.");
        return;
    }
    setIsLoading(true);
    try {
      await signup(name, email, password);
      navigate('/');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred.');
    } finally {
      setIsLoading(false);
    }
  }, [name, email, password, signup, navigate]);

  const handleGoogleSignUp = useCallback(async () => {
    setError('');
    setIsLoading(true);
    try {
      // In a real app, this would trigger the Google OAuth flow and create a new user if one doesn't exist.
      // Here, we simulate it by logging in with a predefined mock Google user.
      await login('google@example.com', 'googlepassword');
      navigate('/');
    } catch (err) {
      setError("Could not sign up with Google. Please try again.");
    } finally {
        setIsLoading(false);
    }
  }, [login, navigate]);

  const inputStyles = "w-full p-3 bg-transparent border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500";

  return (
    <div className="container mx-auto px-6 py-12 flex-grow flex items-center justify-center">
      <div className="w-full max-w-md bg-slate-100/30 dark:bg-slate-800/30 backdrop-blur-lg border border-white/20 dark:border-slate-700/50 p-8 md:p-10 rounded-2xl shadow-xl">
        <h1 className="text-3xl font-bold text-center text-slate-800 dark:text-slate-100 mb-6">Join Our Community</h1>
        
        {error && <Alert type="error" title="Sign Up Failed" message={error} className="mb-4" />}
        
        <div className="space-y-4">
          <button 
              type="button" 
              onClick={handleGoogleSignUp}
              disabled={isLoading}
              className="w-full flex justify-center items-center space-x-3 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 font-semibold py-3 px-4 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-600 transition-colors disabled:opacity-50"
          >
              <GoogleIcon className="w-6 h-6" />
              <span>Sign Up with Google</span>
          </button>

          <div className="flex items-center">
              <div className="flex-grow border-t border-slate-300 dark:border-slate-600"></div>
              <span className="flex-shrink mx-4 text-slate-500 dark:text-slate-400 text-sm">OR</span>
              <div className="flex-grow border-t border-slate-300 dark:border-slate-600"></div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-base font-semibold text-slate-700 dark:text-slate-300 mb-2">Full Name</label>
              <input 
                type="text" 
                id="name" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                required 
                className={inputStyles}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-base font-semibold text-slate-700 dark:text-slate-300 mb-2">Email Address</label>
              <input 
                type="email" 
                id="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
                className={inputStyles}
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-base font-semibold text-slate-700 dark:text-slate-300 mb-2">Password</label>
              <input 
                type="password" 
                id="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required 
                className={inputStyles}
              />
            </div>
            <div>
              <button type="submit" disabled={isLoading} className="w-full bg-orange-500 text-white font-bold py-3 px-4 rounded-lg text-lg hover:bg-orange-600 transition-colors disabled:bg-orange-300">
                {isLoading ? 'Creating Account...' : 'Create Account'}
              </button>
            </div>
          </form>
        </div>
         <p className="text-center mt-6 text-slate-600 dark:text-slate-400">
          Already have an account? <Link to="/login" className="font-bold text-orange-600 dark:text-orange-400 hover:underline">Log in</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
