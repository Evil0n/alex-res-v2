import React from 'react';
import {CallMeBtn} from "./CallMeBtn.tsx";
import ContactsModal from './ContactsModal';
import headerBackground from '../assets/images/headerBackground.png';
import headerImg from '../assets/images/headerImg.png';

export const Header: React.FC = () => {
  const [contactsOpen, setContactsOpen] = React.useState(false);
  return (
    <header className="relative container mx-auto">
      <div
        className="relative isolate flex flex-col items-center gap-[70px] overflow-hidden rounded-b-[48px] bg-cover bg-left-bottom bg-no-repeat px-[60px] pt-[20px] pb-[60px]"
        style={{ backgroundImage: `url(${headerBackground})` }}
      >
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/40"
        />

        <div className="flex h-[40px] w-full items-center justify-between gap-2">
          <div className="flex h-[36px] items-center gap-[6px] rounded-full border border-white/10 bg-[#060807] px-4 py-[7px] shadow-[0_4px_50px_rgba(198,245,122,0.4),inset_0_0_12px_rgba(255,255,255,0.2)]">
            <span className="text-[14px] leading-[22px] font-normal text-[#F3F3F3]">
              Александр Кудрявцев
            </span>
          </div>

          <nav className="flex h-[40px] items-center justify-center gap-x-[50px] px-6 py-[13px]">
            <a
              href="#experience"
              className="group relative cursor-pointer text-[14px] leading-none text-[#DDDDDD] transition-all duration-300 hover:text-emerald-300 hover:scale-105"
            >
              <span className="relative z-10">Опыт работы</span>
              <div className="absolute inset-0 -z-10 rounded-lg bg-emerald-300/10 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-110" />
            </a>
            <a
              href="#team"
              className="group relative cursor-pointer text-[14px] leading-none text-[#DDDDDD] transition-all duration-300 hover:text-emerald-300 hover:scale-105"
            >
              <span className="relative z-10">Фото с командой</span>
              <div className="absolute inset-0 -z-10 rounded-lg bg-emerald-300/10 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-110" />
            </a>
            <a
              href="#recommendations"
              className="group relative cursor-pointer text-[14px] leading-none text-[#DDDDDD] transition-all duration-300 hover:text-emerald-300 hover:scale-105"
            >
              <span className="relative z-10">Рекомендации</span>
              <div className="absolute inset-0 -z-10 rounded-lg bg-emerald-300/10 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-110" />
            </a>
            <a
              href="#about"
              className="group relative cursor-pointer text-[14px] leading-none text-[#DDDDDD] transition-all duration-300 hover:text-emerald-300 hover:scale-105"
            >
              <span className="relative z-10">О себе</span>
              <div className="absolute inset-0 -z-10 rounded-lg bg-emerald-300/10 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-110" />
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setContactsOpen(true)}
            className="group relative cursor-pointer text-[14px] leading-none text-[#DDDDDD] transition-all duration-300 hover:text-emerald-300 hover:scale-105"
          >
            <span className="relative z-10">Контакты</span>
            <div className="absolute inset-0 -z-10 rounded-lg bg-emerald-300/10 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-110" />
          </button>
        </div>

        <div className="flex w-full flex-row items-start gap-[70px]">
          <div className="relative h-[432px] w-[408px] overflow-hidden rounded-[20px]">
            <img
              src={headerImg}
              alt="Фото"
              className="h-full w-full object-contain object-bottom"
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
              <div className="group box-border flex h-[84px] w-[110px] flex-col justify-center rounded-[16px] border border-[#C6F57A] px-4 py-5 transition-all duration-500 hover:scale-105 hover:border-emerald-300 hover:shadow-[0_0_30px_rgba(198,245,122,0.4)] hover:shadow-lg">
                <span className="text-[22px] leading-none font-medium text-white transition-all duration-300 group-hover:text-emerald-300">
                  Forbes до 30
                </span>
              </div>

              <div className="group box-border flex h-[84px] w-[303px] flex-col justify-center rounded-[16px] border border-[#C6F57A] px-4 py-5 transition-all duration-500 hover:scale-105 hover:border-emerald-300 hover:shadow-[0_0_30px_rgba(198,245,122,0.4)] hover:shadow-lg">
                <span className="text-[22px] leading-none font-medium text-white transition-all duration-300 group-hover:text-emerald-300">
                  Топ-1 самый быстрорастущий FinTech
                </span>
              </div>

              <div className="group box-border flex h-[84px] w-[202px] flex-col justify-center rounded-[16px] border border-[#C6F57A] px-4 py-5 transition-all duration-500 hover:scale-105 hover:border-emerald-300 hover:shadow-[0_0_30px_rgba(198,245,122,0.4)] hover:shadow-lg">
                <span className="text-[22px] leading-none font-medium text-white transition-all duration-300 group-hover:text-emerald-300">
                  Топ-1 детский EdTech
                </span>
              </div>

              <div className="group box-border flex h-[84px] w-[145px] flex-col justify-center rounded-[16px] border border-[#C6F57A] px-4 py-5 transition-all duration-500 hover:scale-105 hover:border-emerald-300 hover:shadow-[0_0_30px_rgba(198,245,122,0.4)] hover:shadow-lg">
                <span className="text-[22px] leading-none font-medium text-white transition-all duration-300 group-hover:text-emerald-300">
                  Топ-5 Legal Tech
                </span>
              </div>

              <div className="group box-border flex h-[84px] w-[122px] flex-col justify-center rounded-[16px] border border-[#C6F57A] px-4 py-5 transition-all duration-500 hover:scale-105 hover:border-emerald-300 hover:shadow-[0_0_30px_rgba(198,245,122,0.4)] hover:shadow-lg">
                <span className="text-[22px] leading-none font-medium text-white transition-all duration-300 group-hover:text-emerald-300">
                  9 млрд. выручки
                </span>
              </div>

              <div className="group box-border flex h-[84px] w-[217px] flex-col justify-center rounded-[16px] border border-[#C6F57A] px-4 py-5 transition-all duration-500 hover:scale-105 hover:border-emerald-300 hover:shadow-[0_0_30px_rgba(198,245,122,0.4)] hover:shadow-lg">
                <span className="text-[22px] leading-none font-medium text-white transition-all duration-300 group-hover:text-emerald-300">
                  700 млн. / в мес. на рекламу
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 flex justify-end">
          <CallMeBtn />
      </div>
      <ContactsModal open={contactsOpen} onClose={() => setContactsOpen(false)} />
    </header>
  );
};
