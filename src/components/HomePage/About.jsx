import Image from "next/image";
import Subheading from "../Subheading/Subheading";

export default function About() {
  return (
    <section>
      <div className="w-11/12 md:w-9/12 mx-auto flex flex-col lg:flex-row gap-10 lg:gap-24 py-20">
        <div className="chef-image flex-1 relative h-96">
          <Image
            fill
            alt="Person image"
            src="/assets/images/chef.jpg"
            className="object-cover"
          />
        </div>
        <div className="my-story flex-1">
          <div className="flex flex-col justify-center h-full">
            <Subheading title="About us" />
            <p className="">
              From humble beginnings, Chef Alex started in a small kitchen,
              facing countless challenges. With limited resources and a deep
              passion for cooking, he honed his skills, working tirelessly to
              perfect his craft. His journey wasn't easy—many sleepless nights
              and failed attempts—but his love for food kept him going. Slowly,
              word spread about his unique flavors and dedication to quality.
              After years of perseverance, Chef Alex opened his own restaurant,
              turning it into a success. Today, his restaurant is renowned for
              its innovative dishes and exceptional dining experience, a
              testament to his hard work and resilience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
