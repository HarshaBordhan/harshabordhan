// import Layout from '../../components/Layout/Layout';
// import Header from '../../components/Layout/Header';
// import Footer from '../../components/Layout/Footer';
// import { useState } from 'react';
import styles from '../styles/Modal.module.css';

export default function Tweets() {
  // const [colors, setColor] = useState('theme-current');
  return (
    <>
      {/* <Layout>
        <Header color={setColor} colorTheme={colors} />
        <main></main>
        <h3 className="" id={`${colors}`}></h3>
        <Footer />
      </Layout> */}

      <div className={styles.modal}>
        <h1>Currently Building </h1>
      </div>
      <div className={styles.overlay}></div>
    </>
  );
}
