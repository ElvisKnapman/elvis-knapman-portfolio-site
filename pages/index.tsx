import type { NextPage } from 'next';
import Head from 'next/head';

import NavBar from '../components/NavBar/Navbar';
import About from '../components/About/About';

import styles from '../styles/Home.module.scss';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Elvis Knapman - Software Engineer</title>
        <meta
          name='description'
          content='Website and portfolio for Elvis Knapman, Software Engineer.'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <NavBar />
        <About />
      </main>
    </div>
  );
};

export default Home;
