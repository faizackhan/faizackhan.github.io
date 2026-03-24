export default function Sections({ id, children, className = "" }) {
  return (
    <section
      id={id}
      className={`min-h-screen flex items-center justify-center px-8 py-20 scroll-mt-24 ${className}`}
    >
      <div className="w-full max-w-6xl">{children}</div>
    </section>
  );
}