import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AdoptPage from './pages/AdoptPage';
import ReportPage from './pages/ReportPage';
import AIAssistantPage from './pages/AIAssistantPage';
import AnimalDetailPage from './pages/AnimalDetailPage';
import CommunityPage from './pages/CommunityPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import { AuthProvider } from './contexts/AuthContext';
import { ThemeProvider } from './contexts/ThemeContext';
import OnlineVetPage from './pages/OnlineVetPage';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <HashRouter>
          <div className="min-h-screen flex flex-col bg-transparent text-slate-800 dark:text-slate-200">
            <Header />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/adopt" element={<AdoptPage />} />
                <Route path="/adopt/:id" element={<AnimalDetailPage />} />
                <Route path="/community" element={<CommunityPage />} />
                <Route path="/report" element={<ReportPage />} />
                <Route path="/online-vet" element={<OnlineVetPage />} />
                <Route path="/ai-assistant" element={<AIAssistantPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignUpPage />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </HashRouter>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;