import { Project, projects } from '../../../data/projects';
import styles from './Project.module.scss';

interface ProjectProps {
  project: Project;
}

const Project = ({ project }: ProjectProps) => {
  return (
    <div className={`card ${styles['project-bg']}`}>
      <h3 className={styles['project-title']}>{project.title}</h3>
      <h5 className={styles['project-subtitle']}>Technologies Used</h5>
      <p className={styles['project-technologies']}>
        ({project.techStack.join(', ')})
      </p>
      <h5 className={styles['project-subtitle']}>Description</h5>
      <p>{project.description}</p>
      <div className={styles['buttons-container']}>
        <div className={styles['projects-buttons-flex']}>
          <a
            className={styles['projects-link']}
            href='https://www.github.com/ElvisKnapman'>
            View Online
          </a>
          <a
            className={styles['projects-link']}
            href='https://www.github.com/ElvisKnapman'>
            View on Github
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
