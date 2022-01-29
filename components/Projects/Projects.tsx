import styles from './Projects.module.scss';

import { projects } from '../../data/projects';
import Project from './Project/Project';

const Projects = () => {
  return (
    <section className='section-container bg-primary'>
      <div className='container'>
        <h2 className='section-heading'>Projects</h2>
        <div className={styles['projects-flex-container']}>
          {projects.map((project) => (
            <Project key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
