import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/images/ek-only-nav-opti.png';

import styles from './NavBar.module.scss';

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles['nav-container']}>
        <Image src={logo} alt="Elvis Knapman's logo" width={100} height={50} />
        <ul>
          <li>
            <Link href='/'>
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href='/'>
              <a>Projects</a>
            </Link>
          </li>
          <li>
            <Link href='/'>
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
