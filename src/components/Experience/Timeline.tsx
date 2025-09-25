import React from 'react';
import { experienceData, type ExpItem } from '../../data/experience';

type TimelineProps = {
  current: ExpItem['id'];
  onItemChange: (id: ExpItem['id']) => void;
  /** желаемый вертикальный шаг между точками, px (по умолчанию 110) */
  gapPx?: number;
  /** диаметр точки (на всякий случай), px (по умолчанию 20) */
  dotSizePx?: number;
};

const splitPeriod = (s: string) => {
  const [a = '', b = ''] = (s || '').split(/—|–|-/).map((t) => t.trim());
  return [a, b] as const;
};

export const Timeline: React.FC<TimelineProps> = ({
  current,
  onItemChange,
  gapPx = 170,
  dotSizePx = 20,
}) => {
  const DOT = dotSizePx;
  const topPad = DOT / 2;
  const bottomPad = DOT / 2;

  const count = experienceData.length;
  const steps = Math.max(1, count - 1);

  // «правильная» авто-высота: паддинги + равномерные промежутки между точками
  const usableH = steps * gapPx;
  const trackH = topPad + usableH + bottomPad;

  const activeIdxRaw = experienceData.findIndex((x) => x.id === current);
  const activeIdx = activeIdxRaw < 0 ? 0 : activeIdxRaw;
  const isLast = activeIdx === count - 1;

  const [first, second] = splitPeriod(experienceData[activeIdx]?.period || '');

  // позиция подписи периода (последняя — напротив точки, остальные — по центру между точками)
  const labelOffsetPx = isLast ? activeIdx * gapPx : (activeIdx + 0.5) * gapPx;
  const labelTopPx = topPad + labelOffsetPx;

  // высота активного (подсвеченного) сегмента
  const activeSegH = Math.max(0, Math.min((activeIdx + 1) * gapPx, usableH));

  return (
    <aside className="relative">
      <div className="relative mx-auto w-[12px]" style={{ height: trackH }}>
        {/* базовая линия */}
        <div
          className="absolute left-1/2 w-[3px] -translate-x-1/2 rounded-full bg-[#0a3b3c]"
          style={{ top: topPad, bottom: bottomPad }}
        />

        {/* активный сегмент */}
        <div
          className="absolute left-1/2 w-[3px] -translate-x-1/2 rounded-t-full bg-[#009596] transition-[height] duration-400 ease-out"
          style={{ top: topPad, height: activeSegH }}
        />

        {/* точки */}
        <ul
          className="absolute inset-0 flex flex-col items-center justify-between"
          style={{ paddingTop: topPad, paddingBottom: bottomPad }}
        >
          {experienceData.map((x) => {
            const active = x.id === current;
            return (
              <li key={x.id} className="relative">
                <button
                  type="button"
                  onClick={() => onItemChange(x.id)}
                  className="grid place-items-center"
                  aria-label={`${x.company}: ${x.period}`}
                  aria-current={active ? 'step' : undefined}
                  title={x.period}
                >
                  <span
                    className={[
                      `h-[${DOT}px] w-[${DOT}px]] rounded-full border-2`, // для TSX безопаснее задать инлайн-стилем:
                    ].join(' ')}
                    style={{
                      height: DOT,
                      width: DOT,
                      borderWidth: 2,
                      borderColor: '#039696',
                      backgroundColor: active ? '#C6F57A' : '#101a16',
                      boxShadow: active ? '0 0 0 3px rgba(0,149,150,0.15)' : undefined,
                    }}
                  />
                </button>
              </li>
            );
          })}
        </ul>

        {/* подпись активного периода */}
        <div className="pointer-events-none absolute inset-0">
          <div
            className={[
              'absolute right-[calc(100%+16px)] -translate-y-1/2 text-left whitespace-pre',
              'bg-clip-text text-transparent',
              'bg-[linear-gradient(90deg,#009596_0%,#C6F57A_50.5%,#E8FFC3_100%)]',
              'text-[12px] font-medium tracking-[-0.02em] uppercase md:text-[18px]',
            ].join(' ')}
            style={{ top: `${labelTopPx}px` }}
          >
            <span className="block">{first} —</span>
            <span className="block">{second}</span>
          </div>
        </div>
      </div>
    </aside>
  );
};
