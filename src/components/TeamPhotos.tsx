import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';


export const TeamPhotos: React.FC = () => {
  const [swiper, setSwiper] = useState<any>(null);

  return (
    <section id="team" className="container mx-auto px-4 py-[60px] md:px-[100px]">
      {/* Заголовок */}
      <div className="mx-auto flex max-w-[1240px] flex-col items-center gap-3">
        <h2 className="text-center font-medium text-[#F3F3F3] leading-[1] text-[40px] md:text-[64px]">
          Фото с командой
        </h2>
        <p className="text-center text-[#DDDDDD] leading-[150%] text-[16px] md:text-[20px]">
          Десятки ребят под моим началом стали лидерами и ведущими инженерами
        </p>
      </div>

      {/* Слайдер */}
      <div className="mx-auto mt-10 max-w-[1240px]">
        <Swiper
          className="team-swiper"
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView="auto"
          spaceBetween={20}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          onSwiper={setSwiper}
        >
          {/* team.png */}
          <SwiperSlide className="!w-[770px]">
            <figure className="relative h-[550px] w-full overflow-hidden rounded-[20px]">
              <img
                src="/images/team/team.png"
                alt="Команда в офисе"
                className="h-full w-full object-cover"
              />
            </figure>
          </SwiperSlide>

          {/* presentation.png */}
          <SwiperSlide className="!w-[500px]">
            <figure className="relative h-[550px] w-full overflow-hidden rounded-[20px]">
              <img
                src="/images/team/presentation.png"
                alt="Презентация"
                className="h-full w-full object-cover"
              />
            </figure>
          </SwiperSlide>

          {/* teamwork.png */}
          <SwiperSlide className="!w-[531px]">
            <figure className="relative h-[545px] w-full overflow-hidden rounded-[20px]">
              <img
                src="/images/team/teamwork.png"
                alt="Совместная работа"
                className="h-full w-full object-cover"
              />
            </figure>
          </SwiperSlide>

          {/* teambuilding.png */}
          <SwiperSlide className="!w-[500px]">
            <figure className="relative h-[550px] w-full overflow-hidden rounded-[20px]">
              <img
                src="/images/team/teambuilding.png"
                alt="Тимбилдинг"
                className="h-full w-full object-cover"
              />
            </figure>
          </SwiperSlide>

          {/* professional.png */}
          <SwiperSlide className="!w-[500px]">
            <figure className="relative h-[550px] w-full overflow-hidden rounded-[20px]">
              <img
                src="/images/team/professional.png"
                alt="Профессиональные моменты"
                className="h-full w-full object-cover"
              />
            </figure>
          </SwiperSlide>
        </Swiper>

        {/* панель управления */}
        <div className="mt-6 flex items-center justify-between">
          {/* точки */}
          <div className="flex justify-center flex-1" />

          {/* стрелки */}
          <div className="flex items-center gap-3 ml-6">
            <button
              aria-label="Назад"
              onClick={() => swiper?.slidePrev()}
              className="grid h-11 w-11 place-items-center rounded-full bg-[rgba(198,245,122,0.32)] transition hover:bg-[#C6F57A]"
            >
              <ChevronLeftIcon className="h-6 w-6 text-[#060807]" />
            </button>
            <button
              aria-label="Вперёд"
              onClick={() => swiper?.slideNext()}
              className="grid h-11 w-11 place-items-center rounded-full bg-[rgba(198,245,122,0.32)] transition hover:bg-[#C6F57A]"
            >
              <ChevronRightIcon className="h-6 w-6 text-[#060807]" />
            </button>
          </div>
        </div>

        {/* подпись */}
        <p className="mt-8 text-center text-[#DDDDDD] text-[16px] md:text-[20px] leading-[150%]">
          Легко укомплектую штат любой сложности командой редких специалистов
        </p>
      </div>
    </section>
  );
};
