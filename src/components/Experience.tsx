import React, { useMemo, useState, useCallback } from 'react';
import { experienceData, type ExpItem } from '../data/experience';
import { Timeline } from './Experience/Timeline';
import { ExperienceCard } from './Experience/ExperienceCard';

export const Experience: React.FC = () => {
  const [current, setCurrent] = useState<ExpItem['id']>('sravni');
  const [openSet, setOpenSet] = useState<Set<number>>(new Set());

  const item = useMemo(() => experienceData.find((x) => x.id === current)!, [current]);

  React.useEffect(() => setOpenSet(new Set()), [current]);

  const toggleIdx = useCallback(
    (idx: number) => {
      if (!item.expandable) return;
      setOpenSet((prev) => {
        // единовременно открыт только один пункт
        if (prev.has(idx)) {
          return new Set(); // клик по открытому — закрыть всё
        }
        return new Set([idx]); // открыть только текущий
      });
    },
    [item.expandable],
  );

  return (
    <section id="experience" className="relative container mx-auto px-4 py-[60px] md:px-8">
      <h2 className="text-center text-[40px] leading-none font-medium text-[#F3F3F3] md:text-[64px]">
        Опыт работы
      </h2>

      <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-[200px_1fr]">
        <Timeline current={current} onItemChange={setCurrent} />
        <ExperienceCard item={item} openSet={openSet} onToggleIdx={toggleIdx} />
      </div>

      <div className="mt-16 h-px w-full border-b border-white/10" />
    </section>
  );
};
