import Link from "next/link";

export default function Button({ text, link = "#" }) {
  return (
    <Link href={link}>
      <span
        className="text-[#FF6A1A] border border-[#FF6A1A] rounded-xl px-8 py-4 font-medium rubik-font-class"
        style={{ letterSpacing: "-0.02em" }}
      >
        {text}
      </span>
    </Link>
  );
}
