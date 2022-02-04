import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/images/ek-only-nav-opti.png';

import styles from './NavBar.module.scss';

const NavBar = () => {
  const handleScroll = (e: React.SyntheticEvent, id: string) => {
    e.preventDefault();
    const section = document.querySelector(id);
    section?.scrollIntoView({
      // top: 40,
      behavior: 'smooth',
    });
  };
  return (
    <nav className={styles.navbar}>
      <div className={styles['nav-container']}>
        <Image src={logo} alt="Elvis Knapman's logo" width={100} height={50} />
        <ul>
          <li>
            <Link href='/'>
              <a onClick={(e) => handleScroll(e, '#about')}>About</a>
            </Link>
          </li>
          <li>
            <Link href='/'>
              <a onClick={(e) => handleScroll(e, '#projects')}>Projects</a>
            </Link>
          </li>
          <li>
            <Link href='/'>
              <a onClick={(e) => handleScroll(e, '#contact')}>Contact</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
