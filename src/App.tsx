import React from 'react';
import gradientBg from './assets/gradient.png';
import { Header } from './components/Header';
import { Experience } from './components/Experience.tsx';
import { TeamPhotos } from './components/TeamPhotos.tsx';
import { Recommendations } from './components/Recommendations.tsx';
import { AboutMe } from './components/AboutMe.tsx';
import { Footer } from './components/Footer.tsx';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#060807]">
      <div className="container mx-auto flex flex-col justify-center">
        <Header />
        <div
          className="bg-cover bg-top bg-no-repeat"
          style={{ backgroundImage: `url(${gradientBg})` }}
        >
          <Experience />
          <TeamPhotos />
          <Recommendations />
        </div>
        <AboutMe />
        <Footer />
      </div>
    </div>
  );
};
