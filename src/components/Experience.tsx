import React, { useMemo, useState } from 'react';

/* ===== types & data (хардкод) ===== */
type Achievement = { title: string; note?: string };
type ExpItem = {
  id: string;
  period: string;
  company: string;
  subtitle: string;
  roles: string[];
  achievements: Achievement[];
  expandable: boolean;
};

const DATA: ExpItem[] = [
  {
    id: 'sravni',
    period: 'октябрь 2022 — сентябрь 2025',
    company: 'Сравни',
    subtitle: 'Топ-1 финансовый маркетплейс',
    roles: [
      'Business Owner (CEO), 2024–2025',
      'CPO финансовой вертикали, 2024',
      'CMO финансовой вертикали, 2023',
      'CMO займы, 2022',
    ],
    achievements: [
      { title: 'Обеспечил рост выручки с 30 млн. до 550 млн. / мес. за 8 мес.' },
      {
        title: 'Вывел убыточное направление на стабильные 150 млн. прибыли в мес.',
        note: 'И защитил вертикаль от удара ФАС и круглых столов рынка',
      },
      { title: 'Построил топ-5 Legal Tech с нуля за 2 года' },
      {
        title: 'За первый год вырастил всё платное продвижение с 400 млн. до 4 млрд. рублей / год',
      },
      {
        title: 'Руководил созданием новых направлений, выстроил лидерскую структуру',
      },
    ],
    expandable: true,
  },
  {
    id: 'uchi',
    period: 'июль 2020 — ноябрь 2022',
    company: 'Учи.ру (Учи.Дома)',
    subtitle: 'Топ-1 детский EdTech',
    roles: ['CPO, 2021–2022', 'CMO, 2020', 'Lead PMM, 2020'],
    achievements: [
      {
        title: 'Запустил две вертикали (старшая и средняя школа) — суммарно 800 млн. руб./год',
      },
      {
        title:
          'Лидировал маркетинг, продажи и продукт; траты ~600 млн./год (Ads, видео, TikTok Ads, Influence)',
      },
      { title: 'Работал с методистами и с GR (Мин. цифры и Мин. обр.)' },
    ],
    expandable: false,
  },
  {
    id: 'netology',
    period: 'июнь 2019 — июль 2020',
    company: 'Нетология',
    subtitle: 'Топ-3 взрослый EdTech',
    roles: ['Sr. PMM, 2020', 'Jr. PMM, 2019'],
    achievements: [
      {
        title: 'Лидировал три продуктовых направления внутри юнита «Маркетинг»',
        note: 'Perf, Influence/комьюнити, продакшн контента',
      },
      {
        title: 'Отвечал за экономику продуктов от продакшна до рекламных кампаний',
      },
    ],
    expandable: false,
  },
  {
    id: 'shashlikoff',
    period: 'март 2017 — июнь 2019',
    company: 'ШашлыкоFF',
    subtitle: 'Топ-1 сеть гриль-баров (по кол-ву точек)',
    roles: ['Бренд-маркетолог'],
    achievements: [
      { title: 'Открывал новые гриль-бары и выводил их на плановую выручку' },
      { title: 'Работал с ГЦНР и гл. архитектором города (13 городов)' },
      { title: 'Категорийный маркетинг: ассортимент, цены, анализ конкурентов' },
      { title: 'Планировал бюджет и проводил федеральные РК (13 городов)' },
      { title: 'Разрабатывал POSM и носители внутри баров' },
    ],
    expandable: false,
  },
  {
    id: 'magora',
    period: 'март 2017 — февраль 2015',
    company: 'Magora Systems',
    subtitle: 'Топ-20 в мире разработчик мобильных приложений и высоконагруженных систем',
    roles: ['PR-manager'],
    achievements: [
      { title: 'Организовал внешние «IT-митапы» под ключ' },
      { title: 'Лендинги на «Тильде», воронки писем (MailChimp)' },
      { title: 'Ивенты (TimePad), парсинг/таргетинг (pepper.ninja)' },
      { title: 'Работа со спикерами и партнёрскими пакетами' },
    ],
    expandable: false,
  },
];

/* ===== ui bits ===== */
const Arrow = ({ open }: { open: boolean }) => (
  <svg
    className={`h-5 w-5 shrink-0 transition-transform ${open ? 'rotate-180' : ''}`}
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path d="M10 12.5l-5-5h10l-5 5z" />
  </svg>
);

/* ===== helpers ===== */
const splitPeriod = (s: string) => {
  const [a, b] = s.split('—').map((t) => t.trim());
  return [a, b] as const;
};

/* ===== timeline constants ===== */
const DOT = 20; // диаметр точки
const LINE_H = 720; // фиксированная высота линии

export const Experience: React.FC = () => {
  const [current, setCurrent] = useState<string>('sravni');
  const [openSet, setOpenSet] = useState<Set<number>>(new Set());

  const item = useMemo(() => DATA.find((x) => x.id === current)!, [current]);

  // сброс открытых пунктов при смене компании
  React.useEffect(() => setOpenSet(new Set()), [current]);

  const toggleIdx = (idx: number) => {
    if (!item.expandable) return;
    setOpenSet((prev) => {
      const next = new Set(prev);
      next.has(idx) ? next.delete(idx) : next.add(idx);
      return next;
    });
  };

  /* === вычисления зависят от current — держим их ВНУТРИ компонента === */
  const activeIdx = useMemo(() => DATA.findIndex((x) => x.id === current), [current]);
  const isLast = activeIdx === DATA.length - 1;
  const [first, second] = splitPeriod(DATA[activeIdx].period);

  const trackTopPx = DOT / 2; // отступ от верха до центра первой точки


  const gapPx = (LINE_H - DOT) / (DATA.length - 1);

  const labelOffsetPx = isLast
    ? activeIdx * gapPx // последняя — напротив точки
    : (activeIdx + 0.5) * gapPx; // иначе — по центру между точками
  const labelTopPx = trackTopPx + labelOffsetPx;

  return (
    <section id="experience" className="relative container mx-auto px-4 py-[60px] md:px-8">
      <h2 className="text-center text-[40px] leading-none font-medium text-[#F3F3F3] md:text-[64px]">
        Опыт работы
      </h2>

      <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-[200px_1fr]">
        {/* LEFT: фиксированная линия + точки + подпись слева (между точками/либо на последней) */}
        <aside className="relative">
          <div className="relative mx-auto w-[12px]" style={{ height: `${LINE_H}px` }}>
            {/* базовая линия */}
            <div
              className="absolute left-1/2 w-[3px] -translate-x-1/2 rounded-full bg-[#0a3b3c]"
              style={{ top: DOT / 2, bottom: DOT / 2 }}
            />
            {/* активный бирюзовый сегмент (анимация высоты) */}
            {(() => {
              const gap = (LINE_H - DOT) / (DATA.length - 1);
              const segTop = DOT / 2;
              const segHeight = Math.min((activeIdx + 1) * gap, LINE_H - DOT);
              return (
                <div
                  className="absolute left-1/2 w-[3px] -translate-x-1/2 rounded-t-full bg-[#009596] transition-[height] duration-500 ease-out"
                  style={{ top: segTop, height: segHeight }}
                />
              );
            })()}

            {/* точки — ровно по центру оси и равномерно */}
            <ul
              className="absolute inset-0 flex flex-col items-center justify-between"
              style={{ paddingTop: DOT / 2, paddingBottom: DOT / 2 }}
            >
              {DATA.map((x) => {
                const active = x.id === current;
                return (
                  <li key={x.id} className="relative">
                    <button
                      type="button"
                      onClick={() => setCurrent(x.id)}
                      className="grid place-items-center"
                      aria-label={x.period}
                      title={x.period}
                    >
                      <span
                        className={[
                          'h-5 w-5 rounded-full border-2',
                          active
                            ? 'border-[#039696] bg-[#C6F57A] shadow-[0_0_0_3px_rgba(0,149,150,0.15)]'
                            : 'border-[#039696] bg-[#101a16]',
                        ].join(' ')}
                      />
                    </button>
                  </li>
                );
              })}
            </ul>

            {/* ОДНА подпись активного периода слева */}
            <div className="pointer-events-none absolute inset-0">
              <div
                className={[
                  'absolute right-[calc(100%+16px)] -translate-y-1/2 text-left whitespace-pre',
                  'bg-clip-text text-transparent',
                  'bg-[linear-gradient(90deg,#009596_0%,#C6F57A_50.5%,#E8FFC3_100%)]',
                  'text-[12px] font-medium tracking-[-0.02em] uppercase md:text-[18px]',
                  'transition-all duration-300',
                ].join(' ')}
                style={{ top: `${labelTopPx}px` }}
              >
                <span className="block">{first} —</span>
                <span className="block">{second}</span>
              </div>
            </div>
          </div>
        </aside>

        {/* RIGHT: карточка компании */}
        <div className="rounded-[20px] border border-white/10 p-6 md:p-10">
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
                const isOpen = openSet.has(idx);
                return (
                  <li key={idx}>
                    <button
                      type="button"
                      onClick={() => toggleIdx(idx)}
                      className={`flex w-full items-start justify-between gap-4 rounded-[16px] border border-[#C6F57A] px-5 py-5 text-left transition ${
                        item.expandable
                          ? 'cursor-pointer hover:border-emerald-300'
                          : 'cursor-default'
                      }`}
                    >
                      <div className="min-w-0 flex-1">
                        <p className="text-[20px] leading-[100%] text-white">{a.title}</p>
                        {item.expandable && a.note && (
                          <div
                            className={`grid overflow-hidden transition-[grid-template-rows,opacity] duration-300 ${
                              isOpen
                                ? 'mt-3 grid-rows-[1fr] opacity-100'
                                : 'grid-rows-[0fr] opacity-0'
                            }`}
                          >
                            <p className="min-h-0 text-[14px] leading-[100%] text-[#B5B5B5]">
                              {a.note}
                            </p>
                          </div>
                        )}
                        {!item.expandable && a.note && (
                          <p className="mt-3 text-[14px] leading-[100%] text-[#B5B5B5]">{a.note}</p>
                        )}
                      </div>
                      <Arrow open={item.expandable ? isOpen : false} />
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-16 h-px w-full border-b border-white/10" />
    </section>
  );
};
