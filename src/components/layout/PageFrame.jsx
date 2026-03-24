export default function PageFrame({ children }) {
  return (
    <main
      className="min-h-screen p-5"
      style={{ backgroundColor: "var(--bg)", color: "var(--text)" }}
    >
      <div
        className="min-h-[calc(100vh-40px)] rounded-[30px] border"
        style={{
          backgroundColor: "var(--frame-bg)",
          borderColor: "var(--border)",
        }}
      >
        {children}
      </div>
    </main>
  );
}