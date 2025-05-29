export default function Copyright() {
  return (
    <div className="bg-[#f8f8f8] px-32 footer sm:footer-horizontal text-base-content p-4 border-t border-[#D9D9D9] text-left">
      <aside>
        <p className="rubik-font-class font-medium text-[15px]">
          Copyright © {new Date().getFullYear()} - All right reserved by ACME
          Industries Ltd
        </p>
      </aside>
    </div>
  );
}
