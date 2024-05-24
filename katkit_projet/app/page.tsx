import React from "react";
import Navbar from "./Navbar";
import styles from "./styles/navbar.module.css";

export default function () {
  return (
    <>
      <div className={styles.body}>
        <Navbar></Navbar>
      </div>
    </>
  );
}
