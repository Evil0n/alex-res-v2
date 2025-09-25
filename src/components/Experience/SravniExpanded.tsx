import React from 'react';
import { RewardCard } from './RewardCard';

// Assets
import imgSravniDynamic from '../../assets/images/achievements/sravniDynamic.png';
import imgClicksAndExpenses from '../../assets/images/achievements/clicksAndExpenses.png';
import imgReward1 from '../../assets/images/achievements/reward1.png';
import imgReward2 from '../../assets/images/achievements/reward2.png';
import imgExcel from '../../assets/images/achievements/exel.png';

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
            href="#"
            img={imgReward1}
            imgAlt="Награда Forbes"
          />
          <RewardCard
            number="2"
            text="1-место в рейтинге самых быстрорастущих финтех компаний Рунета"
            href="#"
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
  <div className="mt-4 space-y-4 border-t border-white/10 pt-5 text-[14px] leading-[140%] text-[#B5B5B5]">
    <p>
      На фоне рыночного давления (жалобы в ФАС, давление среди партнёров) экстренно пересобрал
      вектор вертикали на медийно-пассивную финансовую сушку.
    </p>
    <p>
      Благодаря этому впервые в истории всей компании (за 10 лет) закрыл год в плюс по EBITDА,
      вытянул прибылью убытки других направлений (более 50% валовой выручки всей компании в этот год
      обеспечил со своего направления).
    </p>
  </div>
);

export const SravniExpand2: React.FC = () => (
  <div className="mt-4 space-y-6 border-t border-white/10 pt-5 text-[14px] leading-[140%] text-[#B5B5B5]">
    <ul className="list-disc space-y-2 pl-5">
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
      <p className="mb-3">
        Ниже фрагмент сравнения воронки нашего продукта и самого технологичного игрока на рынке
        Legal Tech (НСДД).
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
      <p className="mt-3">
        Подтверждение победы от лидеров рынка будет в контактах для рекомендаций.
      </p>
    </div>
  </div>
);
