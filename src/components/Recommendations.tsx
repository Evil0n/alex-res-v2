// src/components/Recommendations.tsx
import React from 'react';
import { recommendationsData } from '../data/recommendations';
import { RecBlock } from './Recommendations/RecBlock';
import { ContactLink } from './Recommendations/ContactLink';


export const Recommendations: React.FC = () => {
  return (
    <section id="recommendations" className="container mx-auto px-4 pb-[120px] md:px-[100px]">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-[60px]">
        <h2 className="text-center text-[40px] leading-[1] font-medium text-[#F3F3F3] md:text-[64px]">
          Рекомендации
        </h2>

        {recommendationsData.map((block) => (
          <RecBlock key={block.title} {...block} />
        ))}

        <ContactLink />
      </div>
    </section>
  );
};
