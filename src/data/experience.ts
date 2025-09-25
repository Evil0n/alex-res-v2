export type Achievement = { title: string; note?: string };

export type ExpItem = {
  id: 'sravni' | 'uchi' | 'netology' | 'shashlikoff' | 'magora';
  period: string;
  company: string;
  subtitle: string;
  roles: string[];
  achievements: Achievement[];
  expandable: boolean;
};

export const experienceData: ExpItem[] = [
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
    period: 'март 2015 — февраль 2017',
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
