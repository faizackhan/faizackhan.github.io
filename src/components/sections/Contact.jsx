const CONTACT_LINKS = [
  { label: "email", href: "mailto:hello@example.com" },
  { label: "github", href: "https://github.com" },
  { label: "linkedin", href: "https://linkedin.com" },
  { label: "resume", href: "/resume.pdf" },
];

export default function Contact() {
  return (
    <div className="contact-main">
      <h2 className="about-heading">let's make something curious.</h2>

      <div className="contact-content">
        <div className="contact-links">
          {CONTACT_LINKS.map((link) => (
            <a
              key={link.label}
              className="contact-item"
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="contact-avatar-wrap">
          <div className="avatar-bubble-wrap">
            <img className="contact-avatar" src="/src/assets/avatarv2.png" alt="Pixel avatar of Faiza" />
            <p className="speech-text">bye!</p>
          </div>
        </div>
      </div>
    </div>
  );
}