import amacssLogo from "../../assets/amacssIcon.png";
import qaifsLogo from "../../assets/qaifsIcon.png";
import webdevIcon from "../../assets/pixel-icons/SVG/regular/headphones.svg";
import prototypeLogo from "../../assets/prototypeIcon.png";
import csecLogo from "../../assets/csecIcon.png";
import ds3Logo from "../../assets/ds3icon.png";
import makerKidsLogo from "../../assets/MakerKidsIcon.png";
import uoftLogo from "../../assets/uoftIcon.png";




const experiences = [
  {
    title: "teaching assistant @ the university of toronto",
    image: uoftLogo,
  },
  {
    title: "programming instructor & developer @ maker kids",
    image: makerKidsLogo,
  },
  {
    title: "president & founder of PROTOTYPE!",
    image: prototypeLogo,
  },
  {
    title: "vice president of technology @ ds3",
    image: ds3Logo,
  },
  {
    title: "vice president of technology @ csec",
    image: csecLogo,
  },
  {
    title: "finance executive @ amacss",
    image: amacssLogo,
  },
  {
    title: "vice president of marketing @ qaifs",
    image: qaifsLogo,
  }
];

export default function Experiences() {
  return (
    <div className="experiences-main">
      <h2 className="about-heading">experiences</h2>

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