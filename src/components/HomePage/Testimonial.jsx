"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // ✅ Import Autoplay module
import "swiper/css";
import testimonials from "@/data/testimonials";
import Image from "next/image";
import Subheading from "../Subheading/Subheading";
import Heading from "../Heading/Heading";

export default function Testimonial() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-[150px]">
      <Subheading title={"Testimonial"} />
      <Heading title={"What Our Customers Say"} align="text-center" />

      <p className="text-center mb-16">
        Our customers love the freshness, quality, and convenience we deliver.
        <br />
        Hear directly from them how Fresh Harvest has transformed their shopping
        experience.
      </p>

      <Swiper
        slidesPerView={1}
        loop={true}
        spaceBetween={30}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]} // ✅ Include Autoplay module
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="flex items-center gap-6 shadow">
              <Image
                src={testimonial.reviewerImage}
                alt={testimonial.reviewerName}
                className="h-[30rem]"
                width={500}
                height={300}
              />
              <div className="bg-[#f9f9f9] p-8">
                <p className="text-gray-700 text-base mb-2 leading-relaxed ">
                  “{testimonial.reviewDescription}”
                </p>
                <h4 className="text-[#212337] font-semibold text-lg mt-10">
                  — {testimonial.reviewerName}
                </h4>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
