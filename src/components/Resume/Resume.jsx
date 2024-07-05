import React from "react";
import styles from "./Resume.module.css";

import { getImageUrl } from "../../utils";

export const Resume = () => {
    return (
      <section className={styles.container} id= "resume">
        <div className={styles.content}>
          <h1 className={styles.title}>RESUME</h1>
          <p className={styles.description}>
            I'm currently a Master's Student at Northeastern University, majoring in Computer Software Engineering. Click on my resume to learn more about me!
          </p>
        </div>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
          <img src="/resume.png" alt="Resume" className={styles.resumeImg} />
        </a>
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
      </section>
    );
  };