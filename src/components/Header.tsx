import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="relative container mx-auto">
      <div
        className="relative isolate flex flex-col items-center gap-[70px] overflow-hidden rounded-b-[48px] px-[60px] pt-[20px] pb-[60px]"
        style={{ backgroundImage: 'url(/images/headerBackground.png)' }}
      >
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/50"
        />

        <div className="flex h-[40px] w-full items-center justify-between gap-2 p-0">
          <div className="flex h-[36px] items-center gap-[6px] rounded-full border border-white/10 bg-[#060807] px-4 py-[7px] shadow-[0_4px_50px_rgba(198,245,122,0.4),inset_0_0_12px_rgba(255,255,255,0.2)]">
            <span className="text-[14px] leading-[22px] font-normal text-[#F3F3F3]">
              Александр Кудрявцев
            </span>
          </div>

          <nav className="flex h-[40px] items-center justify-center gap-x-[50px] px-6 py-[13px]">
            <a className="text-[14px] leading-none text-[#DDDDDD]">Опыт работы</a>
            <a className="text-[14px] leading-none text-[#DDDDDD]">Фото с командой</a>
            <a className="text-[14px] leading-none text-[#DDDDDD]">Рекомендации</a>
            <a className="text-[14px] leading-none text-[#DDDDDD]">О себе</a>
          </nav>

          <a className="text-[14px] leading-none text-[#DDDDDD]">Контакты</a>
        </div>

        <div className="flex flex-row items-center gap-[70px]">
          <div className="relative h-[432px] w-[408px] overflow-hidden rounded-[20px]">
              <img
                src="/images/headerImg.png"
                alt="Фото"
                className="absolute -top-[36.52px] -left-[6.24px] h-[571.61px] w-[428.71px] object-cover"
              />
          </div>

          <div className="flex flex-col gap-[32px]">
            <div className="flex w-[642px] flex-col items-start gap-6">
              <h1 className="h-[104px] w-full text-[52px] leading-none font-medium text-[#F3F3F3]">
                Chief Product &amp; Growth Officer / Ex. CMO
              </h1>
              <p className="h-[72px] w-full text-[16px] leading-[150%] text-[#DDDDDD]">
                8 лет в digital-продуктах и финтехе. Руководил направлениями с выручкой в 9 млрд.
                руб., командой 60+ человек и полной бизнес-ответственностью (P&amp;L, рост,
                стратегия).
              </p>
            </div>

            <div className="flex w-[642px] flex-row flex-wrap content-start items-center gap-2">
              <div className="box-border flex h-[84px] w-[110px] flex-col justify-center rounded-[16px] border border-[#C6F57A] bg-black/0 px-4 py-5">
                <span className="h-[44px] w-[78px] text-[22px] leading-none font-medium text-white">
                  Forbes до 30
                </span>
              </div>

              <div className="box-border flex h-[84px] w-[303px] flex-col justify-center rounded-[16px] border border-[#C6F57A] bg-black/0 px-4 py-5">
                <span className="h-[44px] w-[271px] text-[22px] leading-none font-medium text-white">
                  Топ-1 самый быстрорастущий FinTech
                </span>
              </div>

              <div className="box-border flex h-[84px] w-[202px] flex-col justify-center rounded-[16px] border border-[#C6F57A] bg-black/0 px-4 py-5">
                <span className="h-[44px] w-[170px] text-[22px] leading-none font-medium text-white">
                  Топ-1 детский EdTech
                </span>
              </div>

              <div className="h/[84px] box-border flex w-[145px] flex-col justify-center rounded-[16px] border border-[#C6F57A] bg-black/0 px-4 py-5">
                <span className="h-[44px] w-[113px] text-[22px] leading-none font-medium text-white">
                  Топ-5 Legal Tech
                </span>
              </div>

              <div className="box-border flex h-[84px] w-[122px] flex-col justify-center rounded-[16px] border border-[#C6F57A] bg-black/0 px-4 py-5">
                <span className="h-[44px] w-[90px] text-[22px] leading-none font-medium text-white">
                  9 млрд. выручки
                </span>
              </div>

              <div className="box-border flex h-[84px] w-[217px] flex-col justify-center rounded-[16px] border border-[#C6F57A] bg-black/0 px-4 py-5">
                <span className="h-[44px] w-[185px] text-[22px] leading-none font-medium text-white">
                  700 млн. / в мес. на рекламу
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none -mt-[24px] h-[48px] w-full rounded-b-[48px] bg-transparent" />
    </header>
  );
};
