// src/components/AboutMe.tsx
import React from 'react';
import { PhoneIcon } from '@heroicons/react/24/solid';
import { PaperAirplaneIcon } from '@heroicons/react/24/outline';
import { aboutMeData } from '../data/aboutMe';

export const AboutMe: React.FC = () => {
  const [showPhone, setShowPhone] = React.useState(false);

  const tel = aboutMeData.phone;
  const tgUrl = aboutMeData.telegramUrl;
  const base = import.meta.env.BASE_URL || '/';

  return (
    <section id="about" className="relative container mx-auto px-0 pb-20 md:px-0">
      <div className="mx-auto max-w-[1360px] px-[60px]">
        <div
          className="relative mx-auto flex w-full max-w-[1240px] flex-col items-center gap-20 rounded-[48px] px-0 py-20"
          style={{
            background:
              `radial-gradient(97.26% 97.26% at 50% 100%, #060807 79.77%, rgba(5,0,36,0) 100%), url(${base}images/noise.png), url(${base}images/asset2@2x.png)`,
            backgroundBlendMode: 'normal, soft-light, normal',
          }}
        >
          {/* контент */}
          <div className="flex w-full flex-row items-start justify-center gap-[60px] px-0">
            {/* фото */}
            <div className="relative h-[486px] w-[380px] overflow-hidden rounded-[20px]">
              <img
                src={`${base}images/team/teambuilding.png`}
                alt="Хайкинг с командой"
                className="absolute -top-4 -left-px h-[520px] w-[390px] object-cover"
              />
            </div>

            {/* текст */}
            <div className="flex h-[486px] w-[609px] flex-col justify-center gap-[60px]">
              <div className="flex flex-col gap-10">
                <div className="flex max-w-[552px] flex-col gap-6">
                  <h3 className="text-[52px] leading-none font-medium text-[#F3F3F3]">О себе</h3>
                  <p className="max-w-[500px] text-[18px] leading-[130%] text-[#B5B5B5]">
                    {aboutMeData.aboutText}
                  </p>
                </div>

                <div className="flex max-w-[552px] flex-col gap-6">
                  <h3 className="text-[52px] leading-none font-medium text-[#F3F3F3]">Ищу</h3>
                  <p className="text-[18px] leading-[130%] text-[#B5B5B5]">
                    {aboutMeData.lookingForText}
                  </p>
                </div>
              </div>

              {/* кнопки */}
              <div className="flex h-[50px] w-full max-w-[552px] items-start gap-3">
                <a
                  href={tgUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-[50px] items-center gap-2 rounded-[36px] bg-[#C6F57A] px-4 text-[14px] font-medium text-[#060807] transition hover:brightness-95"
                >
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-[#121313]">
                    <PaperAirplaneIcon className="h-4 w-4 text-[#C6F57A]" />
                  </span>
                  Написать в Телеграм
                </a>

                {!showPhone ? (
                  <button
                    type="button"
                    onClick={() => setShowPhone(true)}
                    className="inline-flex h-[50px] items-center gap-2 rounded-[36px] border border-[#B5B5B5] px-4 text-[14px] font-medium text-[#B5B5B5] transition hover:border-[#C6F57A] hover:bg-[#C6F57A] hover:text-black"
                  >
                    <PhoneIcon className="h-5 w-5" />
                    Показать телефон
                  </button>
                ) : (
                  <a
                    href={`tel:${tel}`}
                    className="inline-flex h-[50px] items-center gap-2 rounded-[36px] border border-[#C6F57A] bg-transparent px-4 text-[14px] font-medium text-[#C6F57A] transition hover:bg-[#C6F57A] hover:text-[#060807]"
                  >
                    <PhoneIcon className="h-5 w-5" />
                    Позвонить {tel}
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* декоративный мягкий подсвет (опционально) */}
          <div
            className="pointer-events-none absolute top-full left-1/2 -z-10 h-[240px] w-[480px] -translate-x-1/2 -translate-y-10 opacity-10"
            style={{
              background:
                'radial-gradient(50% 50% at 50% 50%, #C6F57A 0%, rgba(198,245,122,0) 100%)',
            }}
          />
        </div>
      </div>
      <div className="mt-16 h-px w-full border-b border-white/10" />
    </section>
  );
};
