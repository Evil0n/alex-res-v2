import React from 'react';
import { tagIcon } from './TagIcon';
import { type RecGroup, type RecItem } from '../../data/recommendations';

type RecCardProps = {
  group: RecGroup;
  item: RecItem;
};

export const RecCard: React.FC<RecCardProps> = ({ group, item }) => {
  return (
    <div className="flex flex-col justify-between gap-9 rounded-[28px] border border-white/10 p-6">
      <div className="space-y-4">
        <div className="inline-flex items-center gap-3 text-[18px] leading-[130%] tracking-[-0.02em] text-[#C6F57A] uppercase">
          {tagIcon(group, item.tag)}
          <span>{item.tag}</span>
        </div>

        <div className="text-[24px] leading-[110%] tracking-[-0.04em] text-[#F3F3F3]">
          {item.person}
        </div>

        {/* Многострочный список без буллетов */}
        <div className="space-y-1 text-[18px] leading-[130%] text-[#B5B5B5]">
          {item.lines.map((line, i) => (
            <div key={i}>{line}</div>
          ))}
        </div>
      </div>

      <a
        href="#contacts"
        className="mx-auto inline-flex h-[50px] items-center justify-center rounded-[36px] border border-[#B5B5B5] px-4 text-[14px] font-medium text-[#B5B5B5] transition hover:border-[#C6F57A] hover:bg-[#C6F57A] hover:text-black"
      >
        Запросить контакт
      </a>
    </div>
  );
};
