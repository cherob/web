import useGithubProjects from '../../../hooks/useGithubProjects';
import styles from './Code.module.css';

function Code({ username }) {
  const projects = useGithubProjects(username);

  if (!projects || projects.length === 0) {
    return <div>Loading projects...</div>;
  }

  return (
    <div className={styles.projectList}>
      <h2>My Projects on GitHub</h2>
      <div className={styles.projectContainer}>
        {projects.map(project => (
          <div key={project.id} className={styles.project}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <div className={styles.projectLinks}>
              <a href={project.html_url} target="_blank" rel="noopener noreferrer">GitHub Repository</a>
              {project.homepage && <a href={project.homepage} target="_blank" rel="noopener noreferrer">Live Demo</a>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Code;
