"use client"; // Required if you're using App Router with Server Components

import dynamic from "next/dynamic";
import Link from "next/link";

// Correct dynamic import for JSX file
const Countdown = dynamic(
  () => import("react-countdown").then((mod) => mod.default),
  { ssr: false }
);

export default function Promotion() {
  const countdownEnd = new Date();
  countdownEnd.setDate(countdownEnd.getDate() + 3);

  return (
    <section
      className="bg-cover bg-center bg-no-repeat w-full"
      style={{
        backgroundImage: "url(/assets/images/promotion-bg.png)",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 py-[150px] text-white">
        <h3
          className="subheading text-2xl font-medium text-left"
          style={{ letterSpacing: "-0.02em" }}
        >
          <span className="bg-[#f1f5ec] text-black px-4 py-1 rounded inline-block mx-auto">
            Special Offer
          </span>
        </h3>

        <h2 className="text-7xl font-medium tracking-[-0.02em] my-7">
          Sessional Fruit Bundle
        </h2>

        <h4 className="font-bold text-4xl mb-2">
          Discount upto <span className="text-[#FF6A1A]">80% Off</span>
        </h4>

        {/* Countdown Timer */}
        <div className="text-2xl font-semibold mb-4">
          <Countdown
            date={countdownEnd}
            renderer={({ days, hours, minutes, seconds, completed }) => {
              if (completed) {
                return <span>Offer expired!</span>;
              } else {
                return (
                  <div className="flex flex-row gap-5 py-10">
                    <div className="bg-white p-5 shadow-xl text-[#4A4A52] text-[40px] text-center font-normal">
                      {days}
                      <span className="block text-sm font-normal">Days</span>
                    </div>

                    <div className="bg-white p-5 shadow-xl text-[#4A4A52] text-[40px] text-center font-normal">
                      {hours}{" "}
                      <span className="block text-sm font-normal">Hours</span>
                    </div>
                    <div className="bg-white p-5 shadow-xl text-[#4A4A52] text-[40px] text-center font-normal">
                      {minutes}{" "}
                      <span className="block text-sm font-normal">Minutes</span>
                    </div>
                    <div className="bg-white p-5 shadow-xl text-[#4A4A52] text-[40px] text-center font-normal">
                      {seconds}{" "}
                      <span className="block text-sm font-normal">Seconds</span>
                    </div>
                  </div>
                );
              }
            }}
          />
        </div>

        <Link
          href={""}
          className="bg-[#176d38] px-6 py-[13px] text-white inline-block font-bold rounded-[28px]"
        >
          CODE : <span className="text-[#fac714]">FRESH28</span>
        </Link>
      </div>
    </section>
  );
}
