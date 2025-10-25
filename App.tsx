import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ImageEnhancerPage from './pages/ImageEnhancerPage';
import BackgroundRemoverPage from './pages/BackgroundRemoverPage';
import ContactPage from './pages/ContactPage';
import BackgroundImageSlider from './components/BackgroundImageSlider';

const App: React.FC = () => {
  return (
    <HashRouter>
      <BackgroundImageSlider />
      <div className="flex flex-col min-h-screen font-sans relative z-10">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/enhancer" element={<ImageEnhancerPage />} />
            <Route path="/background-remover" element={<BackgroundRemoverPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;