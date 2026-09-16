const HOBBIES = [
  {
    title: "Painting",
    detail: "Mostly acrylic — a slow, quiet counterweight to staring at code all day.",
  },
  {
    title: "Guitar",
    detail: "Still learning, still enjoying the process more than the results.",
  }
];

export default function Fun() {
  return (
    <div className="fun-main">
      <h2 className="about-heading">outside of school & work</h2>
      <div className="fun-grid">
        {HOBBIES.map((hobby) => (
          <div key={hobby.title} className="fun-item">
            <h3 className="fun-item-title">{hobby.title}</h3>
            <p className="fun-item-detail">{hobby.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
