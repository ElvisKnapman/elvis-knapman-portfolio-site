import Image from 'next/image';
import { Project, projects } from '../../../data/projects';
import styles from './Project.module.scss';

interface ProjectProps {
  project: Project;
}

const Project = ({ project }: ProjectProps) => {
  return (
    <div className={`card ${styles['project-bg']}`}>
      <h3 className={styles['project-title']}>{project.title}</h3>
      <div className={styles['project-screenshot']}>
        <Image src={project.image} alt={project.title} />
      </div>
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
            href={project.onlineUrl}
            target='_blank'
            rel='noreferrer'>
            View Online
          </a>
          <a
            className={styles['projects-link']}
            href={project.githubUrl}
            target='_blank'
            rel='noreferrer'>
            View on Github
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
