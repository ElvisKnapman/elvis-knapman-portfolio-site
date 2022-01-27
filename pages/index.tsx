import type { NextPage } from 'next';
import Head from 'next/head';
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
        <h1>Elvis Knapman</h1>
      </main>
    </div>
  );
};

export default Home;
