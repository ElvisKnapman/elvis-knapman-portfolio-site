import styles from './About.module.scss';
import Image from 'next/image';

import photo from '../../public/images/elvis-knapman-photo.jpg';

import {
  SiJavascript,
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiNodedotjs,
  SiHtml5,
  SiCss3,
  SiSass,
} from 'react-icons/si';

const About = () => {
  return (
    <section id='about' className='section-container bg-accent'>
      <div className='container'>
        <h2 className='section-heading'>About</h2>
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
          <div className='card bg-pattern'>
            <p className={styles['about-text']}>
              <span style={{ fontSize: '2.5rem' }}>👋</span> Hi, I&apos;m Elvis.
              I&apos;m a full-stack software developer with a focus on front-end
              development. I have been using JavaScript (and all its friends)
              since 2017, and have been developing JavaScript fatigue ever since
              😂
              <div className={styles['technologies-flex-container']}>
                <span
                  className={`${styles['tech-icon']} ${styles['html-icon']}`}>
                  <SiHtml5 />
                </span>
                <span
                  className={`${styles['tech-icon']} ${styles['css-icon']}`}>
                  <SiCss3 />
                </span>
                <span
                  className={`${styles['tech-icon']} ${styles['sass-icon']}`}>
                  <SiSass />
                </span>
                <span
                  className={`${styles['tech-icon']} ${styles['javascript-icon']}`}>
                  <SiJavascript />
                </span>
                <span
                  className={`${styles['tech-icon']} ${styles['typescript-icon']}`}>
                  <SiTypescript />
                </span>
                <span
                  className={`${styles['tech-icon']} ${styles['react-icon']}`}>
                  <SiReact />
                </span>
                <span className={`${styles['tech-icon']}`}>
                  <SiNextdotjs />
                </span>
                <span
                  className={`${styles['tech-icon']} ${styles['nodejs-icon']}`}>
                  <SiNodedotjs />
                </span>
              </div>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
