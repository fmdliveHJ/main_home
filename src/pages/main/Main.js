import React from "react";
import styles from "./main.module.css";
import Footer from "../../components/layout/Footer";
import Header from "../../components/layout/Header";

const Main = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Footer />
    </div>
  );
};

export default Main;
