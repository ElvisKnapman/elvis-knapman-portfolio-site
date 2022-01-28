import styles from './About.module.scss';
import Image from 'next/image';

import photo from '../../public/images/elvis-knapman-photo.jpg';

const About = () => {
  return (
    <section className='section-container bg-accent'>
      <div className='container'>
        <h1 className='section-heading'>About</h1>
        <div className={styles['about-grid']}>
          <div className={styles.photo}>
            <Image
              className='photo'
              src={photo}
              alt='Elvis Knapman'
              width='300'
              height='300'
            />
          </div>
          <div className='card'>
            <h3 className={styles['about-name-heading']}>Elvis Knapman</h3>
            <p className={styles['about-text']}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae
              dignissimos deleniti quasi dicta neque magni consequatur nobis
              veritatis illo eum a in, similique quam maxime omnis sed voluptate
              perspiciatis dolore. Placeat rerum earum ipsum! Quis nisi eos
              molestiae omnis corporis. Nam esse ipsa provident nihil mollitia,
              pariatur minima, nesciunt autem nulla aperiam distinctio modi
              quibusdam ipsum quas veniam, quasi saepe? Adipisci, quis. Veniam
              libero eveniet repudiandae eius impedit quidem cupiditate tempora
              incidunt distinctio et, corporis ut assumenda non at cum alias, ea
              possimus iure sunt.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
