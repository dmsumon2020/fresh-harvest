export default function Subheading({ title }) {
  return (
    <h3
      className="bg-[#f1f5ec] subheading inline-block px-4 py-1 rounded text-2xl font-medium"
      style={{ letterSpacing: "-0.02em" }}
    >
      {title}
    </h3>
  );
}
