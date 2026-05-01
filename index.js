import Link from 'next/link';
import projects from '../data/projects';

export default function Home() {
  return (
    <div className="container">
      <h1>My Portfolio</h1>
      <div className="project-list">
        {projects.map(project => (
          <Link href={`/projects/${project.slug}`} key={project.slug} className="card">
            <div>
              {project.image && <img src={project.image} alt={project.title} className="card-img" />}
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </div>
          </Link>
        ))}
      </div>
      <style jsx>{`
        .container { max-width: 800px; margin: 0 auto; padding: 2rem; }
        .project-list { display: grid; gap: 1.5rem; grid-template-columns: 1fr 1fr; }
        .card { display: block; padding: 1rem; border-radius: 8px; background: #fff; text-decoration: none; color: #111; box-shadow: 0 2px 8px rgba(0,0,0,0.05);}
        .card-img { width: 100%; height: 160px; object-fit: cover; border-radius: 4px; }
        h1 { font-size: 2.5rem; margin-bottom: 2rem;}
        h2 { margin: 0.5rem 0;}
        p { margin: 0;}
        @media (max-width: 600px) {
          .project-list { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
}