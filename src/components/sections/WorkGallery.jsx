import { useParams, Link } from "react-router-dom";
import { getTopicById } from "../../data/workData";

export default function WorkGallery() {
  const { topicId } = useParams();
  const topic = getTopicById(topicId);

  if (!topic) {
    return (
      <div className="gallery-main">
        <p>Topic not found.</p>
        <Link className="gallery-back-link" to="/work">← back to work</Link>
      </div>
    );
  }

  return (
    <div className="gallery-main">
      <Link className="gallery-back-link" to="/work">← back to work</Link>

      <div className="gallery-header">
        <p className="gallery-eyebrow">Topic</p>
        <h1 className="gallery-title">{topic.title}</h1>
        <p className="gallery-description">{topic.description}</p>
      </div>

      <div className="gallery-grid">
        {topic.projects.map((project) => {
          const isInternal = project.link.startsWith("/");
          return (
            <div className="gallery-card" key={project.title}>
              <img className="gallery-card-image" src={project.image} alt={project.title} />
              <p className="gallery-card-title">{project.title}</p>
              {isInternal ? (
                <Link className="gallery-card-link" to={project.link}>Link</Link>
              ) : (
                <a className="gallery-card-link" href={project.link}>Link</a>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}