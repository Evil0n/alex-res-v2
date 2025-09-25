import React from 'react';
import { RewardCard } from './RewardCard';

// Assets
import imgSravniDynamic from '../../assets/images/achievements/sravniDynamic.png';
import imgClicksAndExpenses from '../../assets/images/achievements/clicksAndExpenses.png';
import imgReward1 from '../../assets/images/achievements/reward1.png';
import imgReward2 from '../../assets/images/achievements/reward2.png';
import imgExcel from '../../assets/images/achievements/exel.png';
import imgGraphik from '../../assets/images/achievements/graphik.png';

export const SravniExpand0: React.FC = () => (
  <div className="border-t border-white/10 pt-5 md:pt-5">
    <div className="flex flex-col gap-10">
      {/* графики */}
      <div className="flex flex-col gap-8">
        <figure className="overflow-hidden rounded-[20px] border border-white/10">
          <img
            src={imgSravniDynamic}
            alt="Динамика долей кликов SRAVNI и конкурентов"
            className="w-full"
            loading="lazy"
            decoding="async"
          />
        </figure>
        <p className="text-[14px] leading-[125%] text-[#B5B5B5]">
          Обратите внимание, как маленькие игроки схлопнулись почти до нуля
        </p>

        <figure className="overflow-hidden rounded-[20px] border border-white/10">
          <img
            src={imgClicksAndExpenses}
            alt="Соотношение CPC, кликов и расходов"
            className="w-full"
            loading="lazy"
            decoding="async"
          />
        </figure>
        <p className="text-[14px] leading-[125%] text-[#B5B5B5]">
          Обратите внимание, как маленькие кружочки стали почти незаметными
        </p>
      </div>

      {/* список */}
      <ul className="list-disc space-y-2 pl-5">
        <li className="text-[18px] leading-[120%] tracking-[-0.04em] text-white">
          Подготовили продукт, расширили монетизацию, собрал агрессивный план, расписали 7 стратегий
          ответной реакции рынка и у нас получилось
        </li>
        <li className="text-[18px] leading-[120%] tracking-[-0.04em] text-white">
          Полное поглощение по всем каналам сформированного спроса
        </li>
        <li className="text-[18px] leading-[120%] tracking-[-0.04em] text-white">
          За это огромное кол-во наград и десятки миллионов рублей на премирование команды
        </li>
      </ul>

      {/* награды */}
      <div className="flex flex-col gap-8">
        <h5 className="text-[20px] leading-[100%] font-normal text-white">Награды</h5>

        <div className="flex flex-col gap-3">
          <RewardCard
            number="1"
            text="Впервые в истории компании попали в Forbes до 30, на 28-ю строку самых дорогих компаний Рунета"
            href="https://companies.rbc.ru/news/O8vuG6Pl4R/sravni-voshla-v-rejting-samyih-dorogih-kompanij-runeta/"
            img={imgReward1}
            imgAlt="Награда Forbes"
          />
          <RewardCard
            number="2"
            text="1-место в рейтинге самых быстрорастущих финтех компаний Рунета"
            href="https://smartranking.ru/ru/analytics/FINTECH/rezultaty-premii-fintech-awards/"
            img={imgReward2}
            imgAlt="Награда Fintech"
          />
        </div>

        <p className="text-[14px] leading-[125%] text-[#B5B5B5]">
          И множество других более мелких наград
        </p>
      </div>
    </div>
  </div>
);

export const SravniExpand1: React.FC = () => (
  <div className="mt-4 space-y-6 border-t border-white/10 pt-5">
    {/* подзаголовок */}
    <p className="text-[16px] leading-[140%] text-[#B5B5B5]">
      И защитил вертикаль от удара ФАС и круглых столов рынка
    </p>

    {/* пункты */}
    <ul className="list-disc space-y-6 pl-5 text-[18px] leading-[140%] text-white font-medium">
      <li>
        На фоне рыночного давления (жалобы в ФАС, давление среди партнёров) экстренно пересобрал
        вектор вертикали на медийно‑пассивную финансовую сушку.
      </li>
      <li>
        Благодаря этому впервые в истории всей компании (за 10 лет) закрыл год в плюс по EBITDА,
        вытянул прибылью убытки других направлений (более 50% валовой выручки всей компании в этот
        год обеспечил со своего направления).
      </li>
    </ul>
  </div>
);

export const SravniExpand2: React.FC = () => (
  <div className="mt-4 space-y-6 border-t border-white/10 pt-5">
    <ul className="list-disc space-y-4 pl-5 text-[18px] leading-[140%] text-white font-medium">
      <li>
        Огромная продуктовая работа, десятки исследований, сделали ставку на изменение
        потребительского поведения.
      </li>
      <li>
        Помимо работы с потребностью поставили фокус на строительство самой эффективной
        бизнес-модели в рынке. Чтобы на единицу трафика зарабатывать больше остальных и обеспечить
        себе преимущество в дистрибуции.
      </li>
      <li>
        За 2 года работы получилась полная доминация над рынком и экстра рост до лидера рынка (top-5
        по кол-ву договоров).
      </li>
    </ul>

    <div>
      <p className="mb-3 text-[#B5B5B5]">
        Ниже пруфы, сравнение воронки нашего продукта и самого технологичного игрока на рынке Legal
        Tech (НСДД)
      </p>
      <figure className="overflow-hidden rounded-[14px] border border-white/10">
        <img
          src={imgExcel}
          alt="Сравнение воронок"
          className="w-full"
          loading="lazy"
          decoding="async"
        />
      </figure>
      <p className="mt-3 text-[#B5B5B5]">
        Признание победы от лидеров рынка будет в контактах для рекомендаций
      </p>
    </div>
  </div>
);

export const SravniExpand3: React.FC = () => (
  <div className="mt-4 space-y-8 border-t border-white/10 pt-5">
    <ul className="list-disc space-y-4 pl-5 text-[18px] leading-[140%] text-white font-medium">
      <li>Выстроил прозрачность в многоканальной атрибуции</li>
      <li>
        Построил графики математической зависимости размера комиссионных и доли внутри портфеля
        каждого конкретного партнёра — сила переговорной позиции
      </li>
      <li>
        Исследовал запас прочности каждого партнёра: через долю SEO-выручки и прочих сверх
        маржинальных источников от всей выручки юр. лица партнёра
      </li>
      <li>
        Сформировал полную картину всех источников трафика всего рынка
      </li>
    </ul>

    <figure className="overflow-hidden rounded-[14px] border border-white/10">
      <img
        src={imgGraphik}
        alt="Конкуренты — сегментация по каналам"
        className="w-full"
        loading="lazy"
        decoding="async"
      />
    </figure>

    <ul className="list-disc space-y-4 pl-5 text-[18px] leading-[140%] text-white font-medium">
      <li>
        Собрал отдельный план по каждому партнёру на поглощение его источников и увеличение нашей
        доли в его портфеле
      </li>
      <li>
        Сформировал стратегию роста почти для всех B2C продуктов Сравни
      </li>
    </ul>
  </div>
);

export const SravniExpand4: React.FC = () => (
  <div className="mt-4 space-y-6 border-t border-white/10 pt-5">
    <ul className="list-disc space-y-4 pl-5 text-[18px] leading-[140%] text-white font-medium">
      <li>
        Курировал запуск новых продуктовых вертикалей от идеи и MVP, до первых денег и агрессивного
        роста
      </li>
      <li>
        Создавал направления, нанимал лидеров (продакты, маркетинг, сейлзы, инженеры, аналитики,
        операционка), строил работу через них
      </li>
      <li>
        Давал полномочия лидерам, делегировал исполнение и наблюдал за динамикой
      </li>
      <li>
        Контролировал динамику, стратегический вектор, при необходимости спускался в детали
      </li>
      <li>
        Формировал культуру самостоятельности, кросс‑функционального взаимодействия и ориентации на
        результат (фокус на динамику)
      </li>
      <li>
        Гипер‑ответственность и полномочия. Лидерам стало не всё равно, чем занят их бэклог
      </li>
      <li>
        Консультировал смежные вертикали, выступал внутренним советником по новым направлениям: МСБ,
        лизинг, вклады, беттинг, education
      </li>
      <li>
        Обеспечивал поддержку в Go‑To‑Market, проверке гипотез и построении первых метрик
      </li>
    </ul>
  </div>
);
