import footerIcon from "../../assets/footerIcon.png";

export default function Footer() {
  return (
    <footer className="relative w-full mt-10 pt-16 pb-6 px-6">

      {/* LEFT TEXT */}
      <p className="font-body absolute bottom-4 left-6 text-sm opacity-80">
        © faizackhan.github.io
      </p>

      {/* RIGHT ICONS */}
      <div className="absolute bottom-4 right-6 flex items-end gap-3">
        <img src={footerIcon} className="w-60" draggable={false} />
      </div>

    </footer>
  );
}