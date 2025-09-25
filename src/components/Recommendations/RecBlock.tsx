import React from 'react';
import { RecCard } from './RecCard';
import { type RecBlockData } from '../../data/recommendations';

export const RecBlock: React.FC<RecBlockData> = ({ title, group, items }) => {
  return (
    <div className="w-full space-y-6">
      <h3 className="text-[32px] leading-[110%] tracking-[-0.04em] text-[#F3F3F3] md:text-[40px]">
        {title}
      </h3>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-4">
        {items.map((it) => (
          <RecCard key={`${group}-${it.person}`} group={group} item={it} />
        ))}
      </div>
    </div>
  );
};
