import { Link } from "react-router-dom";
import { WORK_TOPICS } from "../../data/workData";

function TopicCard({ topic }) {
  return (
    <Link className="topic-card" to={`/work/${topic.id}`}>
      <div className="topic-card-stack">
        <span className="topic-card-badge">{topic.projects.length}</span>
        {topic.images.map((img, i) => (
          <img key={i} src={img} alt="" className={`topic-card-photo topic-card-photo-${i}`} />
        ))}
      </div>
      <h3 className="topic-card-title">{topic.title}</h3>
    </Link>
  );
}

export default function Work() {
  return (

    <div className="work-section">
        <h2 className="about-heading">my work!</h2>
        <div className="work-header"> </div>
      <div className="work-topics-grid">
        {WORK_TOPICS.map((topic) => (
          <TopicCard key={topic.id} topic={topic} />
        ))}
      </div>
    </div>
  );
}