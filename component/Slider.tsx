
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    title: "به دنیای Mini Blog خوش آمدید",
    description: "مطالب جذاب و تازه را در یک جا دنبال کنید.",
    label: "به دنیای مطالعه خوش آمدید",
    image:
      "/image/japan-artistic-5120x2880-25406.jpg",
  },
  {
    title: "مطالب جدید را کشف کنید",
    description: "با خواندن هر مطلب، چیز تازه‌ای یاد بگیرید.",
    label: "مطالب منتخب",
    image:
      "/image/chicago-city-7680x4320-18599.jpg",
  },
  {
    title: "همیشه در حال یادگیری",
    description: "با مطالعه، دنیای تازه‌ای از اطلاعات را کشف کنید.",
    label: "یادگیری را ادامه دهید",
    image:
      "/image/rumi-huntrix-5120x2880-24623.jpg",
  },
];

export default function Slider() {
  return (
    <section className="mx-auto max-w-7xl px-4 pt-6">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop
        className="overflow-hidden rounded-2xl"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.title}>
            <div
              className="relative flex min-h-[320px] items-center justify-center bg-cover bg-center px-8 py-12 text-center text-white md:min-h-[420px]"
              style={{
                backgroundImage: `url("${slide.image}")`,
              }}
            >
              <div className="absolute inset-0 bg-black/55" />

              <div className="relative z-10 max-w-2xl">
                <span className="mb-4 block text-sm text-sky-300">
                  {slide.label}
                </span>

                <h2 className="mb-4 text-2xl font-bold md:text-4xl">
                  {slide.title}
                </h2>

                <p className="text-sm leading-7 text-gray-200 md:text-base">
                  {slide.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
