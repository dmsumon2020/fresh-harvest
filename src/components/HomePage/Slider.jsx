"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import slides from "@/data/slides"; // Ensure this is correct path
import Image from "next/image";
import { Autoplay } from "swiper/modules";

export default function Slider() {
  return (
    <section className="w-full">
      <Swiper
        modules={[Autoplay]}
        //  autoplay={{ delay: 5000 }}
        loop={true}
        slidesPerView={1}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="w-full h-[90vh] flex items-center justify-between px-10 md:px-20"
              style={{
                backgroundImage: `url(${slide.backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Left Content */}
              <div className="max-w-xl text-white space-y-6">
                <h2 className="text-4xl md:text-6xl font-bold leading-tight drop-shadow-lg">
                  {slide.title}
                </h2>
                <p className="text-lg md:text-xl leading-relaxed drop-shadow">
                  {slide.description}
                </p>
                <button className="bg-[#FF6A1A] hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg">
                  Shop Now
                </button>
              </div>

              {/* Right Image */}
              <div className="hidden md:block">
                <Image
                  src={slide.secondaryImage}
                  alt={slide.title}
                  width={400}
                  height={400}
                  className="object-contain"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
