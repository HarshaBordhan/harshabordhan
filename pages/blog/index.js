// import Layout from '../../components/Layout';
// import Header from '../../components/Header';
// import Footer from '../../components/Footer';
// import { useState } from 'react';
import styles from '../../styles/Modal.module.css';

export default function Blog() {
  // const [colors, setColor] = useState('theme-current');
  return (
    <>
      {/* <Layout>
        <Header color={setColor} colorTheme={colors} />
        <div id={`${colors}`}>Blog page</div>
        <Footer />
      </Layout> */}
      <div className={styles.modal}>
        <h1>Building</h1>
      </div>
      <div className={styles.overlay}></div>
    </>
  );
}
