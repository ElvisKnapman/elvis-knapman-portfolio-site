import Image from 'next/image';
import logo from '../../public/images/ek-only-nav-opti.png';

import styles from './Footer.module.scss';

import { SiLinkedin, SiGithub } from 'react-icons/si';

const Footer = () => {
  return (
    <footer
      className={`section-container bg-secondary ${styles['footer-accent']}`}>
      <div className='container'>
        <div className={styles['footer-container']}>
          <div className={styles['footer-container-copyright']}>
            <span className={styles['image-container']}>
              <Image src={logo} alt='Elvis Knapman logo' />
            </span>
            <p>&copy; {new Date().getFullYear()} - Elvis Knapman</p>
          </div>
          <div className={styles['footer-container-social']}>
            <span className={`${styles['social-icon']} ${styles['linked-in']}`}>
              <a
                href='https://www.linkedin.com/in/ElvisKnapman'
                target='_blank'
                rel='noreferrer'>
                <SiLinkedin />
              </a>
            </span>
            <span className={`${styles['social-icon']} ${styles['github']}`}>
              <a
                href='https://www.github.com/ElvisKnapman'
                target='_blank'
                rel='noreferrer'>
                <SiGithub />
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
