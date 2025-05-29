import { FiPhone } from "react-icons/fi";
import { MdMailOutline } from "react-icons/md";
import { LuMapPin } from "react-icons/lu";
import Image from "next/image";
import Copyright from "./Copyright";

export default function Footer() {
  return (
    <>
      <footer className="footer sm:footer-horizontal bg-base-200 text-base-content py-16 px-32">
        <aside>
          <div className="flex items-center gap-4 mb-20">
            <svg
              width="50"
              height="50"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
              className="fill-current text-[#749B3F]"
            >
              <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
            </svg>
            <h3 className="text-5xl font-bold tracking-[-1px] text-[#212337]">
              Fresh Harvests
            </h3>
          </div>
          <h6 className="text-[#212337] font-medium text-[15px] leading-[100%] tracking-[-0.02em] mt-[30px]">
            Download App
          </h6>
          <div className="flex items-center gap-4">
            <Image
              src="/assets/images/applestore.png"
              width={162}
              height={44}
              alt="Apple Store"
            />
            <Image
              src="/assets/images/playstore.png"
              width={162}
              height={44}
              alt="Play Store"
            />
          </div>
        </aside>
        <nav>
          <h6 className="text-[#212337] font-medium text-[18px] leading-[100%] tracking-[-0.02em]">
            Quick Links 1
          </h6>

          <a className="text-[#4A4A52] font-normal text-[14px] leading-[24px] tracking-[-0.02em] link link-hover questrial-font-class">
            Home
          </a>

          <a className="text-[#4A4A52] font-normal text-[14px] leading-[24px] tracking-[-0.02em] link link-hover questrial-font-class">
            Shop
          </a>
          <a className="text-[#4A4A52] font-normal text-[14px] leading-[24px] tracking-[-0.02em] link link-hover questrial-font-class">
            About Us
          </a>
          <a className="text-[#4A4A52] font-normal text-[14px] leading-[24px] tracking-[-0.02em] link link-hover questrial-font-class">
            Blog
          </a>
          <a className="text-[#4A4A52] font-normal text-[14px] leading-[24px] tracking-[-0.02em] link link-hover questrial-font-class">
            Detail Blog
          </a>
        </nav>
        <nav>
          <h6 className="text-[#212337] font-medium text-[18px] leading-[100%] tracking-[-0.02em]">
            Quick Links 2
          </h6>

          <a className="text-[#4A4A52] font-normal text-[14px] leading-[24px] tracking-[-0.02em] link link-hover questrial-font-class">
            favorites
          </a>

          <a className="text-[#4A4A52] font-normal text-[14px] leading-[24px] tracking-[-0.02em] link link-hover questrial-font-class">
            Cart
          </a>
          <a className="text-[#4A4A52] font-normal text-[14px] leading-[24px] tracking-[-0.02em] link link-hover questrial-font-class">
            Sign in
          </a>
          <a className="text-[#4A4A52] font-normal text-[14px] leading-[24px] tracking-[-0.02em] link link-hover questrial-font-class">
            register
          </a>
        </nav>
        <nav>
          <h6 className="text-[#212337] font-medium text-[18px] leading-[100%] tracking-[-0.02em]">
            Contact us
          </h6>
          <p className="flex items-center gap-2  text-[#4A4A52] font-normal text-[14px] leading-[24px] tracking-[-0.02em] link link-hover questrial-font-class">
            <span>
              <FiPhone className="text-[#749B3F]" />
            </span>
            1234 5678 90
          </p>
          <p className="flex items-center gap-2  text-[#4A4A52] font-normal text-[14px] leading-[24px] tracking-[-0.02em] link link-hover questrial-font-class">
            <span>
              <MdMailOutline className="text-[#749B3F]" />
            </span>
            freshharvest@gmail.com
          </p>
          <p className="flex items-center gap-2  text-[#4A4A52] font-normal text-[14px] leading-[24px] tracking-[-0.02em] link link-hover questrial-font-class">
            <span>
              <LuMapPin className="text-[#749B3F]" />
            </span>
            12/D Block C Dhanmondi
          </p>

          <h6 className="text-[#212337] font-medium text-[15px] leading-[100%] tracking-[-0.02em] mt-[30px]">
            Accepted Payment Methods
          </h6>
          <div className="flex items-center gap-4">
            <Image
              src="/assets/images/visa.png"
              width={82}
              height={40}
              alt="visa"
            />
            <Image
              src="/assets/images/paypal.png"
              width={82}
              height={40}
              alt="visa"
            />
            <Image
              src="/assets/images/apple.png"
              width={82}
              height={40}
              alt="visa"
            />
          </div>
        </nav>
      </footer>
      <Copyright />
    </>
  );
}
