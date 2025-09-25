import React, { useMemo, useState } from 'react';

/* ====================== Types ====================== */
type Achievement = { title: string; note?: string };
type ExpItem = {
  id: 'sravni' | 'uchi' | 'netology' | 'shashlikoff' | 'magora';
  period: string;
  company: string;
  subtitle: string;
  roles: string[];
  achievements: Achievement[];
  expandable: boolean;
};

/* ====================== Assets (relative paths!) ====================== */
import imgSravniDynamic from '../assets/images/achivements/sravniDynamic.png';
import imgClicksAndExpenses from '../assets/images/achivements/clicksAndExpenses.png';
import imgReward1 from '../assets/images/achivements/reward1.png';
import imgReward2 from '../assets/images/achivements/reward2.png';
import imgExcel from '../assets/images/achivements/exel.png';

/* ====================== Data ====================== */
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
        title:
          'Запустил две вертикали (старшая и средняя школа) — суммарно 800 млн. руб./год',
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
    subtitle:
      'Топ-20 в мире разработчик мобильных приложений и высоконагруженных систем',
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

/* ====================== Icons ====================== */
const Arrow: React.FC<{ open: boolean }> = ({ open }) => (
  <svg
    className={`h-5 w-5 shrink-0 text-[#C6F57A] transition-transform ${open ? 'rotate-180' : ''}`}
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path d="M10 12.5l-5-5h10l-5 5z" />
  </svg>
);

/* ====================== Helpers ====================== */
const splitPeriod = (s: string) => {
  const [a, b] = s.split('—').map((t) => t.trim());
  return [a, b] as const;
};

const DOT = 20;
const LINE_H = 720;

/* ====================== SRAVNI Expanded Blocks ====================== */
const SravniExpand0: React.FC = () => (
  <div className="mt-4 space-y-6 text-[#B5B5B5]">
    <figure className="overflow-hidden rounded-[14px] border border-white/10 bg-black/20">
      <img src={imgSravniDynamic} alt="Динамика долей кликов SRAVNI и конкурентов" className="w-full" />
    </figure>

    <p className="text-[14px] leading-[140%]">
      Обратите внимание, как маленькие игроки схлопнулись почти до нуля.
    </p>

    <figure className="overflow-hidden rounded-[14px] border border-white/10 bg-black/20">
      <img src={imgClicksAndExpenses} alt="Соотношение CPC, кликов и расходов" className="w-full" />
    </figure>

    <p className="text-[14px] leading-[140%]">
      Обратите внимание, как маленькие кружочки стали почти незаметными.
    </p>

    <ul className="list-disc space-y-3 pl-5 text-[14px] leading-[140%]">
      <li>
        Подготовили продукт, расширили монетизацию, собрали агрессивный план,
        расписали 7 стратегий ответной реакции рынка и у нас получилось.
      </li>
      <li>Полное поглощение по всем каналам сформированного спроса.</li>
      <li>
        За это огромное кол-во наград и десятки миллионов рублей на премирование команды.
      </li>
    </ul>

    <div>
      <h5 className="mb-4 text-[16px] font-medium text-white">Награды</h5>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <figure className="overflow-hidden rounded-[14px] border border-white/10 bg-black/20">
          <img src={imgReward1} alt="Награда 1" className="w-full" />
        </figure>
        <figure className="overflow-hidden rounded-[14px] border border-white/10 bg-black/20">
          <img src={imgReward2} alt="Награда 2" className="w-full" />
        </figure>
      </div>
      <p className="mt-3 text-[14px] leading-[140%]">
        И множество других более мелких наград.
      </p>
    </div>
  </div>
);

const SravniExpand1: React.FC = () => (
  <div className="mt-4 space-y-4 text-[14px] leading-[140%] text-[#B5B5B5]">
    <p>
      На фоне рыночного давления (жалобы в ФАС, давление среди партнёров) экстренно
      пересобрал вектор вертикали на медийно-пассивную финансовую сушку.
    </p>
    <p>
      Благодаря этому впервые в истории всей компании (за 10 лет) закрыл год в плюс по
      EBITDА, вытянул прибылью убытки других направлений (более 50% валовой выручки всей
      компании в этот год обеспечил со своего направления).
    </p>
  </div>
);

const SravniExpand2: React.FC = () => (
  <div className="mt-4 space-y-6 text-[14px] leading-[140%] text-[#B5B5B5]">
    <ul className="list-disc space-y-3 pl-5">
      <li>
        Огромная продуктовая работа, десятки исследований, сделали ставку на изменение
        потребительского поведения.
      </li>
      <li>
        Помимо работы с потребностью поставили фокус на строительство самой эффективной
        бизнес-модели в рынке. Чтобы на единицу трафика зарабатывать больше остальных и
        обеспечить себе преимущество в дистрибуции.
      </li>
      <li>
        За 2 года работы получилась полная доминация над рынком и экстра рост до лидера
        рынка (top-5 по кол-ву договоров).
      </li>
    </ul>

    <div>
      <p className="mb-3">
        Ниже фрагмент сравнения воронки нашего продукта и самого технологичного игрока
        на рынке Legal Tech (НСДД).
      </p>
      <figure className="overflow-hidden rounded-[14px] border border-white/10 bg-black/20">
        <img src={imgExcel} alt="Сравнение воронок" className="w-full" />
      </figure>
      <p className="mt-3">
        Подтверждение победы от лидеров рынка будет в контактах для рекомендаций.
      </p>
    </div>
  </div>
);

/* ====================== Component ====================== */
export const Experience: React.FC = () => {
  const [current, setCurrent] = useState<ExpItem['id']>('sravni');
  const [openSet, setOpenSet] = useState<Set<number>>(new Set());

  const item = useMemo(() => DATA.find((x) => x.id === current)!, [current]);

  React.useEffect(() => setOpenSet(new Set()), [current]);

  const activeIdx = useMemo(() => DATA.findIndex((x) => x.id === current), [current]);
  const isLast = activeIdx === DATA.length - 1;
  const [first, second] = splitPeriod(DATA[activeIdx].period);

  const trackTopPx = DOT / 2;
  const gapPx = (LINE_H - DOT) / (DATA.length - 1);
  const labelOffsetPx = isLast ? activeIdx * gapPx : (activeIdx + 0.5) * gapPx;
  const labelTopPx = trackTopPx + labelOffsetPx;

  const toggleIdx = (idx: number) => {
    if (!item.expandable) return;
    setOpenSet((prev) => {
      const next = new Set(prev);
      next.has(idx) ? next.delete(idx) : next.add(idx);
      return next;
    });
  };

  const renderSravniExtra = (idx: number) => {
    if (item.id !== 'sravni' || !openSet.has(idx)) return null;
    if (idx === 0) return <SravniExpand0 />;
    if (idx === 1) return <SravniExpand1 />;
    if (idx === 2) return <SravniExpand2 />;
    return null;
  };

  return (
    <section id="experience" className="container relative mx-auto px-4 py-[60px] md:px-8">
      <h2 className="text-center text-[40px] font-medium leading-none text-[#F3F3F3] md:text-[64px]">
        Опыт работы
      </h2>

      <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-[200px_1fr]">
        {/* LEFT: timeline */}
        <aside className="relative">
          <div className="relative mx-auto w-[12px]" style={{ height: `${LINE_H}px` }}>
            <div
              className="absolute left-1/2 w-[3px] -translate-x-1/2 rounded-full bg-[#0a3b3c]"
              style={{ top: DOT / 2, bottom: DOT / 2 }}
            />
            {(() => {
              const segTop = DOT / 2;
              const segHeight = Math.min((activeIdx + 1) * gapPx, LINE_H - DOT / 2);
              return (
                <div
                  className="absolute left-1/2 w-[3px] -translate-x-1/2 rounded-t-full bg-[#009596] transition-[height] duration-500 ease-out"
                  style={{ top: segTop, height: segHeight }}
                />
              );
            })()}

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

            <div className="pointer-events-none absolute inset-0">
              <div
                className={[
                  'absolute right-[calc(100%+16px)] -translate-y-1/2 whitespace-pre text-left',
                  'bg-clip-text text-transparent',
                  'bg-[linear-gradient(90deg,#009596_0%,#C6F57A_50.5%,#E8FFC3_100%)]',
                  'text-[12px] font-medium uppercase tracking-[-0.02em] md:text-[18px]',
                ].join(' ')}
                style={{ top: `${labelTopPx}px` }}
              >
                <span className="block">{first} —</span>
                <span className="block">{second}</span>
              </div>
            </div>
          </div>
        </aside>

        {/* RIGHT: company card */}
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

          {/* Achievements */}
          <div className="mt-10">
            <h4 className="mb-6 text-[28px] leading-[110%] tracking-[-0.04em] text-[#F3F3F3] md:text-[32px]">
              {item.id === 'sravni' ? 'Достижения' : 'Что делал'}
            </h4>

            <ul className="space-y-4">
              {item.achievements.map((a, idx) => {
                const canExpand = item.expandable;
                const isOpen = openSet.has(idx);

                return (
                  <li key={idx}>
                    {/* ЕДИНЫЙ контейнер с border/rounded для кнопки + контента */}
                    <div
                      className={[
                        'group rounded-[16px] border border-[#C6F57A] transition-colors',
                        canExpand ? 'hover:border-emerald-300' : '',
                      ].join(' ')}
                    >
                      <button
                        type="button"
                        onClick={() => (canExpand ? toggleIdx(idx) : undefined)}
                        className={[
                          'flex w-full items-start justify-between gap-4 px-5 py-5 text-left',
                          // убираем нижние скругления когда открыт блок (визуально это единая рамка)
                          isOpen ? 'rounded-t-[16px] rounded-b-none' : 'rounded-[16px]',
                        ].join(' ')}
                      >
                        <div className="min-w-0 flex-1">
                          <p className="text-[18px] leading-[120%] text-white md:text-[20px]">
                            {a.title}
                          </p>
                          {!!a.note && !canExpand && (
                            <p className="mt-3 text-[14px] leading-[140%] text-[#B5B5B5]">{a.note}</p>
                          )}
                        </div>
                        {canExpand ? <Arrow open={isOpen} /> : null}
                      </button>

                      {canExpand && isOpen && (
                        // никаких бордеров здесь — чтобы не было "второй рамки"
                        <div className="px-5 pb-5 pt-0">
                          {renderSravniExtra(idx)}
                        </div>
                      )}
                    </div>
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
