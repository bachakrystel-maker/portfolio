import projects from '../../data/projects';

export async function getStaticPaths() {
  const paths = projects.map(p => ({ params: { slug: p.slug } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const project = projects.find(p => p.slug === params.slug);
  return { props: { project } };
}

export default function ProjectPage({ project }) {
  return (
    <div className="container">
      <a href="/" style={{textDecoration:'underline'}}>← Back to Projects</a>
      <h1>{project.title}</h1>
      {project.image && <img src={project.image} alt={project.title} className="detail-img" />}
      <p>{project.details}</p>
      <style jsx>{`
        .container { max-width: 700px; margin: 0 auto; padding: 2rem; }
        .detail-img { width: 100%; max-height: 350px; object-fit: cover; border-radius: 10px; margin-bottom: 2rem; }
        h1 { margin-bottom: 1rem;}
        p { font-size: 1.15rem;}
      `}</style>
    </div>
  );
}