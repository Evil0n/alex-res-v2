// src/components/Recommendations.tsx
import React from 'react';
import {
  SparklesIcon,
  StarIcon,
  PresentationChartLineIcon,
  CodeBracketIcon,
  PaintBrushIcon,
  MegaphoneIcon,
} from '@heroicons/react/24/outline';

type RecGroup = 'leaders' | 'partners' | 'employees';

type RecItem = {
  tag: string;
  person: string;
  lines: string[]; // <-- КАЖДАЯ СТРОКА ОТДЕЛЬНО
};

type RecBlockData = {
  title: string;
  group: RecGroup;
  items: RecItem[];
};

const tagIcon = (group: RecGroup, tag: string) => {
  if (group === 'leaders') return <SparklesIcon className="h-6 w-6 stroke-[1.5] text-[#C6F57A]" />;
  if (group === 'partners') return <StarIcon className="h-6 w-6 stroke-[1.5] text-[#C6F57A]" />;
  const t = tag.toLowerCase();
  if (t.includes('аналит'))
    return <PresentationChartLineIcon className="h-6 w-6 stroke-[1.5] text-[#C6F57A]" />;
  if (t.includes('разраб'))
    return <CodeBracketIcon className="h-6 w-6 stroke-[1.5] text-[#C6F57A]" />;
  if (t.includes('дизайн'))
    return <PaintBrushIcon className="h-6 w-6 stroke-[1.5] text-[#C6F57A]" />;
  return <MegaphoneIcon className="h-6 w-6 stroke-[1.5] text-[#C6F57A]" />;
};

const RecCard: React.FC<{ group: RecGroup; item: RecItem }> = ({ group, item }) => {
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

const RecBlock: React.FC<RecBlockData> = ({ title, group, items }) => {
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

// ==== ДАННЫЕ (каждая строка отдельно) ====
const DATA: RecBlockData[] = [
  {
    title: 'От руководителей',
    group: 'leaders',
    items: [
      {
        tag: 'Сравни, CFO',
        person: 'Дмитрий Прокошев',
        lines: ['Мой руководитель.', 'Текущий CFO Сравни.', 'Известный CFO на рынке medtech'],
      },
      {
        tag: 'Сравни, основатель',
        person: 'Сергей Леонидов',
        lines: [
          'Вице-президент Baring Vostok,',
          'Основатель и ex. CEO Сравни.ру,',
          'Ex. Вице-президент Т-Банк (Ex. Тинькофф)',
        ],
      },
      {
        tag: 'Сравни, CCO',
        person: 'Станислав Крухмалёв',
        lines: [
          'Основатель Вкус Вилл Казахстан,',
          'ex. CСO Сравни,',
          'Топ-1 коммерческий директор России (Коммерсантъ, 2022)',
        ],
      },
      {
        tag: 'Сравни, CBDO',
        person: 'Евгений Коротаев',
        lines: [
          'Ex. Директор по развитию Сравни.ру,',
          'Сооснователь и инвестор Вкус Вилл Казахстан.',
          'Крупный венчурный инвестор на рынке Латинской Америки',
        ],
      },
    ],
  },
  {
    title: 'От внешних партнёров',
    group: 'partners',
    items: [
      {
        tag: 'CCO',
        person: 'Александр Рассказов',
        lines: ['Директор по маркетингу и продажам НССД'],
      },
      {
        tag: 'CCO',
        person: 'Денис Махнёв',
        lines: ['Коммерческий директор группы компаний:', 'ФЦБГ, Банкрот-консалт, 2Лекс'],
      },
      {
        tag: 'CMO',
        person: 'Степан Фролов',
        lines: ['Директор по маркетингу Кредита.нет'],
      },
      {
        tag: 'основатель',
        person: 'Арсений',
        lines: [
          'Собственник и основатель НССД.',
          'Топ-1 самый технологичный игрок на рынке банкротства',
        ],
      },
    ],
  },
  {
    title: 'От сотрудников',
    group: 'employees',
    items: [
      {
        tag: 'Аналитика',
        person: 'Николай Полушкин',
        lines: ['Ex. Lead Product Analyst Сравни.', 'Сейчас Lead AI поиска Яндекс'],
      },
      {
        tag: 'Разработка',
        person: 'Степан Безносиков',
        lines: [
          'Ex. Гл. инженер Туту.ру,',
          'Ex. Ст. разработчик Иннотеха,',
          'Ex. Лид разработки Сравни',
        ],
      },
      {
        tag: 'Дизайн',
        person: 'Максим Матюхин',
        lines: ['Ex. Лид продуктового дизайна Сравни.', 'Лид продуктового дизайна ВК Видео.'],
      },
      {
        tag: 'Маркетинг',
        person: 'Андрей Ночевкин',
        lines: ['Текущий Lead PMM Сравни'],
      },
    ],
  },
];

export const Recommendations: React.FC = () => {
  return (
    <section id="recommendations" className="container mx-auto px-4 pb-[120px] md:px-[100px]">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-[60px]">
        <h2 className="text-center text-[40px] leading-[1] font-medium text-[#F3F3F3] md:text-[64px]">
          Рекомендации
        </h2>

        {DATA.map((block) => (
          <RecBlock key={block.title} {...block} />
        ))}

        <a
          href="#contacts"
          className="group relative self-start text-center text-[18px] font-medium tracking-[-0.02em] uppercase transition-all duration-500 hover:scale-105"
        >
          {/* Анимированный градиент */}
          <span className="relative z-10 bg-gradient-to-r from-[#009596] via-[#C6F57A] to-[#E8FFC3] bg-[length:200%_100%] bg-clip-text text-transparent transition-all duration-1000 group-hover:bg-[length:100%_100%] group-hover:animate-gradient-shift">
            [ любой контакт дам по запросу ]
          </span>
          
          {/* Эффект перелива */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-hover:animate-shimmer" />
          
          {/* Подсветка фона */}
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#009596]/10 via-[#C6F57A]/10 to-[#E8FFC3]/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </a>
      </div>
    </section>
  );
};
