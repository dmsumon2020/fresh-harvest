import Image from "next/image";
import Subheading from "../Subheading/Subheading";
import Heading from "../Heading/Heading";
import Button from "../Button/Button";

export default function About() {
  return (
    <section>
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-24 py-20">
        <div className="flex-1 relative ">
          <Image
            alt="Person image"
            src="/assets/images/man33.png"
            className="object-cover"
            width={500}
            height={700}
          />
        </div>
        <div className="my-story flex-1">
          <div className="flex flex-col justify-center items-start h-full">
            <Subheading title="About us" />
            <Heading title={"About Fresh Harvest"} />
            <p className="text-justify mb-7">
              From humble beginnings, Chef Alex started in a small kitchen,
              facing countless challenges. With limited resources and a deep
              passion for cooking, he honed his skills, working tirelessly to
              perfect his craft. His journey wasn't easy—many sleepless nights
              and failed attempts—but his love for food kept him going. Slowly,
              word spread about his unique flavors and dedication to quality.
              After years of perseverance.
            </p>
            <Button text={"Read More"} />
          </div>
        </div>
      </div>
    </section>
  );
}
