import React, { useState } from 'react';

export const CallMeBtn: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex justify-end">
      <div className="relative inline-block text-left">
        <button
          onClick={() => setOpen((p) => !p)}
          className="group inline-flex cursor-pointer items-center gap-2 rounded-[36px] bg-[#C6F57A] px-5 py-3 text-[15px] font-medium text-black shadow-[0_10px_40px_-10px_rgba(16,185,129,.9)] transition-all duration-300 hover:scale-105 hover:bg-emerald-300 hover:shadow-[0_15px_50px_-10px_rgba(16,185,129,1)] active:translate-y-[1px] active:scale-95"
        >
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-black/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-black/20">
            💬
          </span>
          <span className="transition-all duration-300 group-hover:tracking-wide">
            Связаться со мной
          </span>
        </button>

        {open && (
          <div className="absolute right-0 bottom-full mb-3 flex w-[214px] flex-col gap-3">
            <a
              href="https://t.me/Kudryavtcev"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-[20px] bg-[#C6F57A] px-3 py-2 text-center text-[14px] font-medium text-black transition hover:bg-emerald-300"
            >
              Связаться в Telegram
            </a>
            <a
              href="tel:+79607793254"
              className="rounded-[20px] bg-[#C6F57A] px-3 py-2 text-center text-[14px] font-medium text-black transition hover:bg-emerald-300"
            >
              Позвонить
            </a>
            <a
              href="/resume.pdf"
              download
              className="rounded-[20px] bg-[#C6F57A] px-3 py-2 text-center text-[14px] font-medium text-black transition hover:bg-emerald-300"
            >
              Скачать PDF-резюме
            </a>
          </div>
        )}
      </div>
    </div>
  );
};
