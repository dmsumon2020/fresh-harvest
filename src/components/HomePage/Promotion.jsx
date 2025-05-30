import Link from "next/link";

export default function Promotion() {
  return (
    <section
      className="bg-cover bg-center bg-no-repeat w-full"
      style={{
        backgroundImage: "url(/assets/images/promotion-bg.png)",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 py-[150px]">
        <h3
          className="subheading text-2xl font-medium text-left"
          style={{ letterSpacing: "-0.02em" }}
        >
          <span className="bg-[#f1f5ec] px-4 py-1 rounded inline-block mx-auto">
            Special Offer
          </span>
        </h3>

        <h2 className="text-7xl font-medium tracking-[-0.02em] my-7">
          Sessional Fruit Bundle
        </h2>

        <h4 className="font-bold text-4xl">
          Discount upto <span className="text-[#FF6A1A]">80% Off</span>
        </h4>

        <Link
          href={""}
          className="bg-[#176d38] px-6 py-[13px] mt-5 text-white inline-block font-bold rounded-[28px]"
        >
          CODE : <span className="text-[#fac714]">FRESH28</span>
        </Link>
      </div>
    </section>
  );
}
