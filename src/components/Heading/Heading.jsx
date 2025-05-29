export default function Heading({ title, align = "text-left" }) {
  return (
    <h2 className={`text-[48px] font-medium tracking-[-0.02em] my-7 ${align}`}>
      {title}
    </h2>
  );
}
