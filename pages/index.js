import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import budgie from "../public/budgie.png";
import deadpanBudgie from "../public/deadpan_budgie.png";
import twobudgies from "../public/3budgies.png";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>You need a budgie</title>
        <meta name="description" content="You need a budgie" />
      </Head>

      <main className={styles.main}>
        <div className={styles.titleSection}>
          <div className={styles.bannerImage}>
            <Image src={budgie} />
          </div>
          <h1 className={styles.title}>You need a budgie!</h1>
        </div>
        <div className={styles.info}>
          <p>
            Buy one (or a few!) here at{" "}
            <a className={styles.link} href="https://birdsville.net.au/">
              Birdsville
            </a>{" "}
            or consider adopting one at the{" "}
            <a
              className={styles.link}
              href="https://www.rspcansw.org.au/adopt/search/?search_advanced=1&search_type=1&search_breed%5B%5D=Budgerigar&search_animal_name="
            >
              RSPCA
            </a>
          </p>
          <p>
            In the meantime you can enjoy some other parakeets{" "}
            <a href="https://www.reddit.com/r/Parakeets/">here :)</a>
          </p>
          <p className={styles.textFaded}>
            <a href="https://www.youneedabudget.com/">How do I afford a pet?</a>
          </p>
        </div>
      </main>

      <div className={styles.bottomCornerRight}>
        <Image layout="responsive" src={twobudgies} />
      </div>
    </div>
  );
}
