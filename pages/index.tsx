import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const title = "Lillskrot & Jag";
  const year = new Date().getFullYear();

  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={`${title} ${year}`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>{title}</h1>
      </main>
    </div>
  );
};

export default Home;
