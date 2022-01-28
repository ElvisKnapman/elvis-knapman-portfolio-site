import styles from './NavBar.module.scss';
import Link from 'next/link';
const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles['nav-container']}>
        <h3 className={styles.logo}>Logo</h3>
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
