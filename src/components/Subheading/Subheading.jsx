export default function Subheading({ title }) {
  return (
    <h3
      className="subheading text-2xl font-medium text-center"
      style={{ letterSpacing: "-0.02em" }}
    >
      <span className="bg-[#f1f5ec] px-4 py-1 rounded inline-block mx-auto">
        {title}
      </span>
    </h3>
  );
}
