import amacssLogo from "../../assets/amacssIcon.png";
import qaifsLogo from "../../assets/qaifsIcon.png";
import webdevIcon from "../../assets/pixel-icons/SVG/regular/headphones.svg";

const experiences = [
  {
    title: "finance executive @ amacss",
    image: amacssLogo,
  },
  {
    title: "vice president of marketing @ qaifs",
    image: qaifsLogo,
  },
  {
    title: "Freelance Web Developer",
    image: webdevIcon,
  },
];

export default function Experiences() {
  return (
    <div className="section-page experiences-main">
      <h2 className="section-title font-heading">experiences</h2>

      <div className="experience-cards">
        {experiences.map((experience) => (
          <div key={experience.title} className="experience-card">
            <img
              src={experience.image}
              alt={experience.title}
              className="experience-card-image"
              draggable={false}
            />
            <p className="experience-card-title font-body">
              {experience.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}