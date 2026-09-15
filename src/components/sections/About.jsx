export default function About() {
  return (
    <div className="about-wrapper">
      <h2 className="about-heading">a bit about me</h2>
      <div className="about-container">
        <div className="about-text">
          <p>
            I'm a third-year Statistics Specialist (Data Science and Machine
            Learning) student at the University of Toronto, minoring in
            Computer Science and Economics.
          </p>
          <p>
            I like sitting at the intersection of data, software, and
            design — turning messy datasets into useful models, and models
            into interfaces people actually enjoy using.
          </p>
          <p>
            Outside of school I'm currently on a co-op placement, teaching
            robotics and coding curriculum to kids, which somehow makes me a
            better communicator about technical ideas too.
          </p>
          <p>
            I'm especially drawn to product analytics, UX research, and
            data visualization — roles where being curious about people and
            comfortable with numbers both matter.
          </p>
        </div>
        <div className="about-avatar-wrapper">
          <img className="about-avatar" src="/src/assets/cuteheadshot.png" alt="Faiza" />
        </div>
      </div>
    </div>
  );
}