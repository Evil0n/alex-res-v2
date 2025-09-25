import { ResumeIcon } from './icons/ResumeIcon';
import TelegramIcon from './icons/TelegramIcon';
import React, { useState } from 'react';
import { PhoneIcon ,ChatBubbleLeftRightIcon } from '@heroicons/react/24/solid';

export const CallMeBtn: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex justify-end">
      <div className="relative inline-block text-left">
        <button
          onClick={() => setOpen((p) => !p)}
          className="group relative inline-flex cursor-pointer items-center gap-2 rounded-[36px] px-5 py-3 text-[15px] font-medium text-black shadow-[0_10px_40px_-10px_rgba(16,185,129,.9)] transition-all duration-500 hover:scale-105 hover:shadow-[0_15px_50px_-10px_rgba(16,185,129,1)] active:translate-y-[1px] active:scale-95 overflow-hidden"
        >
          {/* Анимированный фон с градиентом */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#C6F57A] via-emerald-300 to-[#C6F57A] bg-[length:200%_100%] transition-all duration-1000 group-hover:bg-[length:100%_100%] group-hover:animate-gradient-shift" />

          {/* Дополнительный слой для перелива */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-hover:animate-shimmer" />

          {/* Контент */}
          <span className="relative z-10 inline-flex h-7 w-7 items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110">
            <ChatBubbleLeftRightIcon />
          </span>
          <span className="relative z-10 transition-all duration-300 group-hover:tracking-wide">
            Связаться со мной
          </span>
        </button>

        {open && (
          <div className="absolute right-0 bottom-full mb-3 flex w-[214px] flex-col gap-3">
            <a
              href="https://t.me/Kudryavtcev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-[20px] bg-[#C6F57A] px-3 py-2 text-center text-[14px] font-medium text-black transition hover:bg-emerald-300"
            >
              <TelegramIcon />
              Связаться в Telegram
            </a>
            <a
              href="tel:+79607793254"
              className="inline-flex items-center gap-2 rounded-[20px] bg-[#C6F57A] px-3 py-2 text-center text-[14px] font-medium text-black transition hover:bg-emerald-300"
            >
              <PhoneIcon className="size-6" />
              Позвонить
            </a>
            <a
              href={(import.meta as any).env.BASE_URL ? `${import.meta.env.BASE_URL}images/resume.png` : '/images/resume.png'}
              download="resume.png"
              className="inline-flex items-center gap-2 rounded-[20px] bg-[#C6F57A] px-3 py-2 text-center text-[14px] font-medium text-black transition hover:bg-emerald-300"
            >
              <ResumeIcon className="h-5 w-5" />
              Скачать PDF-резюме
            </a>
          </div>
        )}
      </div>
    </div>
  );
};
