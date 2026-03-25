import avatarImg from "../../assets/avatarBye.png";
import githubIcon from "../../assets/pixel-icons/SVG/brands/github.svg";
import linkedInIcon from "../../assets/pixel-icons/SVG/brands/linkedin.svg";
import emailIcon from "../../assets/pixel-icons/SVG/solid/envelope-solid.svg";
import resumeIcon from "../../assets/pixel-icons/SVG/solid/copy-solid.svg";

export default function Contact() {
  return (
    <div className="section-page contact-main">

      <h2 className="section-title font-heading text-center">contact</h2>

      <div className="contact-content">

        {/* LEFT */}
        <div className="contact-links font-body">

          <a
            href="https://github.com/faizackhan"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
          >
            <img src={githubIcon} alt="" className="contact-icon" />
            <span>github</span>
          </a>

          <a
            href="https://www.linkedin.com/in/faiza-khanc/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
          >
            <img src={linkedInIcon} alt="" className="contact-icon" />
            <span>linkedin</span>
          </a>

          <div className="contact-item">
            <img src={emailIcon} alt="" className="contact-icon" />
            <span>faizakhanc@gmail.com</span>
          </div>

          <a
            href="/Faiza_Khan_Resume_2026 (4).pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
          >
            <img src={resumeIcon} alt="" className="contact-icon" />
            <span>resume</span>
          </a>

        </div>

        {/* RIGHT */}
        <div className="contact-avatar-wrap">
          <div className="avatar-bubble-wrap">
              <img
                src={avatarImg}
                alt="avatar"
                className="contact-avatar"
              />

              <p className="speech-text font-body">
                thanks for <br /> visiting!
              </p>
            </div>
          </div>

      </div>
    </div>
  );
}