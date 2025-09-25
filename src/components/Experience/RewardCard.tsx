import React from 'react';

type RewardCardProps = {
  number: string;
  text: string;
  href?: string;
  img: string;
  imgAlt: string;
};

export const RewardCard: React.FC<RewardCardProps> = ({ number, text, href, img, imgAlt }) => (
  <div className="flex flex-col gap-6 rounded-[24px] border border-white/10 bg-black/0 p-6 md:flex-row md:items-start md:gap-[60px]">
    {/* Левая колонка */}
    <div className="flex-1">
      <div className="flex flex-col gap-8">
        {/* Бейдж: лавры + номер */}
        <div className="inline-flex items-center gap-3">
          <span className="inline-grid h-8 min-w-8 place-items-center rounded-full bg-[#0B0B0B]">
            <span className="relative inline-flex items-center justify-center">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-[20px] w-[20px] text-[#C6F57A]"
                fill="currentColor"
              >
                <path d="M6.5 18c-2-1.8-3-4-3-6 0-2 .8-3.8 2-5l1.4 1.4C5.9 9.5 5.5 10.7 5.5 12c0 1.8.8 3.5 2.2 4.8L6.5 18zm11 0-1.2-1.2A6.7 6.7 0 0 0 18.5 12c0-1.3-.4-2.5-1.4-3.6L18.5 7c1.2 1.2 2 3 2 5 0 2-1 4.2-3 6z" />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-[13.484px] leading-[130%] tracking-[-0.02em] text-[#B5B5B5]">
                {number}
              </span>
            </span>
          </span>
        </div>

        {/* Текст */}
        <p className="text-[14px] leading-[130%] tracking-[-0.02em] text-[#F3F3F3]">{text}</p>

        {/* Чип-ссылка */}
        {href && (
          <a
            className="inline-flex h-6 items-center gap-1 rounded-[32px] bg-[#C6F57A] px-2 py-1 text-[12px] leading-[100%] font-medium text-[#060807] underline"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
              <path d="M11 3h6v6h-2V6.41l-7.29 7.3-1.42-1.42L13.59 5H11V3z" />
              <path d="M5 5h4V3H3v6h2V5zM15 15h-4v2h6v-6h-2v4zM5 13H3v4h6v-2H5v-2z" />
            </svg>
            Ссылка на публикацию
          </a>
        )}
      </div>
    </div>

    {/* Правая колонка: изображение */}
    <figure className="w-full overflow-hidden rounded-[12px] md:w-[267px]">
      <img
        src={img}
        alt={imgAlt}
        className="h-auto w-full rounded-[12px] object-cover"
        loading="lazy"
        decoding="async"
        style={{ aspectRatio: '267 / 160' }}
      />
    </figure>
  </div>
);
