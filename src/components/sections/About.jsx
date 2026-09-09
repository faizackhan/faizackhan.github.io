import avatarImg from "../../assets/avatarv2.png";
import cuteHeadshot from "../../assets/cuteheadshot.png";

export default function About() {
  return (
    <div className="about-wrapper">
      <h2 className="font-heading about-heading">about me</h2>

      <div className="about-container">
        <div className="about-text font-body">
          <p>
            Hi, I'm Faiza Khan, a Statistics student at the University of
            Toronto with a passion for building products at the intersection of
            data science, machine learning, and user experience design. I enjoy transforming
            complex data and technical concepts into intuitive, human-centered
            solutions that people actually want to use.
          </p>
          <p>
            My interests span machine learning, product analytics, and interface design, and I'm especially drawn to
            projects that combine technical problem-solving with thoughtful user
            experience.
          </p>
          <p>
            Whether I'm analyzing data, prototyping a product idea, or building tools, I'm motivated by creating technology that is both
            intelligent and accessible.
          </p>
        </div>

        <div className="about-avatar-wrapper">
          <img src={cuteHeadshot} alt="Faiza" className="about-avatar" />
        </div>
      </div>
    </div>
  );
}