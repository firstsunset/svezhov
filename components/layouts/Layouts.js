import React from 'react';

import Header from '../header/Header';
import Footer from '../footer/Footer';
import styles from './Layouts.module.css';

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};
export default Layout;
