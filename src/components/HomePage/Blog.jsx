"use client";

import Link from "next/link";
import Heading from "../Heading/Heading";
import Subheading from "../Subheading/Subheading";
import blogs from "@/data/blogs"; // adjust path if needed
import Image from "next/image";

export default function Blog() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-[150px]">
      <Subheading title={"Our Blog"} />
      <Heading title={"Fresh Harvest Blog"} align="text-center" />
      <p className="text-center mb-8">
        Experience the vibrant flavors of the season with our <br />
        latest fresh harvest—straight from farm to!
      </p>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {blogs.map((blog, index) => (
          <div key={index} className="rounded-lg ">
            <Image
              src={blog.image}
              alt={blog.title}
              width={400}
              height={200}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <p className="text-xs text-gray-500 mb-1">{blog.date}</p>
            <h3 className="text-lg font-bold text-[#212337] tracking-tight leading-tight">
              {blog.title}
            </h3>
            <Link
              href={`/blog/${blog.slug}`}
              className="text-[#FF6A1A] font-medium hover:underline text-[18px] mt-4"
            >
              Read more →
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
