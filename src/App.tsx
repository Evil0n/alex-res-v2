import React from 'react';
import { Header } from './components/Header';
import { Experience } from './components/Experience.tsx';
import { TeamPhotos } from './components/TeamPhotos.tsx';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black">
      <div className="flex flex-col justify-center">
        <Header />
        <Experience />
        <TeamPhotos />
      </div>
    </div>
  );
};
