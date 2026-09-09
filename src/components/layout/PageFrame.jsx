export default function PageFrame({ children }) {
  return (
    <main style={{ background: "#db2777", minHeight: "500vh" }}>
      {children}
    </main>
  );
}