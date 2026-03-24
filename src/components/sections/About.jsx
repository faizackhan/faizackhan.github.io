import avatarImg from "../../assets/avatarv2.png";

export default function About() {
  return (
    <div className="about-wrapper">
      <h2 className="font-heading section-title">about me</h2>

      <div className="about-container">
        <img src={avatarImg} alt="Faiza" className="about-avatar" />

        <div className="about-text font-body">
          <p>
            Hey! I’m Faiza, a second-year student @uoft, pursuing
            <span className="highlight">
              {" "}Statistics, Computer Science, and Economics
            </span>
            , & an aspiring data scientist! I have a passion for analyzing data
            and presenting it in a digestible format, as well as uncovering
            meaningful insights from complex datasets.
          </p>

          <p>
            I’m actively involved in campus organizations and enjoy building
            projects at the intersection of data and technology. Beyond
            academics, I enjoy creating music, and indulging in
            creative pursuits such as web dev and painting.
          </p>
        </div>
      </div>

      <p className="font-body about-text">
        This website is my digital journal, showcasing my work, experience, and
        growth. Feel free to explore!
      </p>
    </div>
  );
}