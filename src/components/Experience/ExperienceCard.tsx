import React from 'react';
import { Arrow } from './Arrow';
import { Accordion } from './Accordion';
import { SravniExpand0, SravniExpand1, SravniExpand2, SravniExpand3, SravniExpand4 } from './SravniExpanded';
import { type ExpItem } from '../../data/experience';

type ExperienceCardProps = {
  item: ExpItem;
  openSet: Set<number>;
  onToggleIdx: (idx: number) => void;
};

export const ExperienceCard: React.FC<ExperienceCardProps> = ({ item, openSet, onToggleIdx }) => {
  const renderSravniExtra = (idx: number) => {
    if (item.id !== 'sravni' || !openSet.has(idx)) return null;
    if (idx === 0) return <SravniExpand0 />;
    if (idx === 1) return <SravniExpand1 />;
    if (idx === 2) return <SravniExpand2 />;
    if (idx === 3) return <SravniExpand3 />;
    if (idx === 4) return <SravniExpand4 />;
    return null;
  };

  return (
    <div className="rounded-[20px] border border-white/10 bg-black/20 p-6 md:p-10">
      <div className="space-y-2">
        <h3 className="text-[28px] leading-[110%] tracking-[-0.04em] text-[#F3F3F3] md:text-[32px]">
          {item.company}
        </h3>
        <p className="text-[16px] leading-[110%] tracking-[-0.04em] text-[#B5B5B5]">
          {item.subtitle}
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-5">
          {item.roles.map((r) => (
            <li key={r} className="text-[20px] leading-[120%] tracking-[-0.04em] text-white">
              {r}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-10">
        <h4 className="mb-6 text-[28px] leading-[110%] tracking-[-0.04em] text-[#F3F3F3] md:text-[32px]">
          {item.id === 'sravni' ? 'Достижения' : 'Что делал'}
        </h4>

        <ul className="space-y-4">
          {item.achievements.map((a, idx) => {
            const canExpand = item.expandable;
            const isOpen = openSet.has(idx);

            return (
              <li key={a.title}>
                {/* общий контейнер-рамка */}
                <div
                  className={[
                    'group rounded-[16px] border border-[#C6F57A] transition-colors',
                    canExpand ? 'hover:border-emerald-300' : '',
                  ].join(' ')}
                >
                  <button
                    type="button"
                    onClick={() => (canExpand ? onToggleIdx(idx) : undefined)}
                    aria-expanded={isOpen}
                    aria-controls={`exp-${item.id}-${idx}`}
                    className={[
                      'flex w-full items-start justify-between gap-4 px-5 py-5 text-left',
                      isOpen ? 'rounded-t-[16px] rounded-b-none' : 'rounded-[16px]',
                    ].join(' ')}
                  >
                    <div className="min-w-0 flex-1">
                      <p
                        id={`exp-title-${item.id}-${idx}`}
                        className="text-[18px] leading-[120%] text-white md:text-[20px]"
                      >
                        {a.title}
                      </p>
                      {!!a.note && !canExpand && (
                        <p className="mt-3 text-[14px] leading-[140%] text-[#B5B5B5]">
                          {a.note}
                        </p>
                      )}
                    </div>
                    {canExpand ? <Arrow open={isOpen} /> : null}
                  </button>

                  {canExpand && (
                    <Accordion
                      open={isOpen}
                      labelledById={`exp-title-${item.id}-${idx}`}
                      className="px-5 pt-0 pb-5"
                    >
                      {renderSravniExtra(idx)}
                    </Accordion>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
