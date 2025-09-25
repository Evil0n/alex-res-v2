import React from 'react';

type RewardCardProps = {
  number: string;
  text: string;
  href?: string;
  img: string;
  imgAlt: string;
};

export const RewardCard: React.FC<RewardCardProps> = ({ number, text, href, img, imgAlt }) => (
  <div className="flex flex-col gap-6 rounded-[24px] border border-white/10 bg-[#0B0B0B]/30 p-6 md:flex-row md:items-start md:gap-[60px]">
    {/* Левая колонка */}
    <div className="flex-1">
      <div className="flex flex-col gap-8">
        {/* Бейдж: лавры + номер */}
        <div className="inline-flex items-center gap-3">
          {(() => {
            const src = number === '2' ? '/images/2place.png' : '/images/1place.png';
            const alt = number === '2' ? '2 место' : '1 место';
            return <img src={src} alt={alt} className="h-10 w-10" loading="lazy" decoding="async" />;
          })()}
        </div>

        {/* Текст */}
        <p className="text-[18px] leading-[130%] tracking-[-0.02em] text-[#F3F3F3] md:text-[20px]">{text}</p>

        {/* Чип-ссылка */}
        {href && (
          <a
            className="inline-flex w-fit items-center gap-2 rounded-[36px] bg-[#C6F57A] px-3 py-2 text-[14px] font-medium text-[#060807] transition hover:brightness-95"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="grid h-6 w-6 place-items-center rounded-full bg-[#121313]">
              <svg viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5 text-[#C6F57A]">
                <path d="M11 3h6v6h-2V6.41l-7.29 7.3-1.42-1.42L13.59 5H11V3z" />
                <path d="M5 5h4V3H3v6h2V5zM15 15h-4v2h6v-6h-2v4zM5 13H3v4h6v-2H5v-2z" />
              </svg>
            </span>
            Ссылка на публикацию
          </a>
        )}
      </div>
    </div>

    {/* Правая колонка: изображение */}
    <figure className="w-full overflow-hidden rounded-[12px] md:w-[420px]">
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
