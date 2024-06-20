import React from "react";
import styles from "./Resume.module.css";

import { getImageUrl } from "../../utils";

export const Resume = () => {
    return (
      <section className={styles.container} id= "resume">
        <div className={styles.content}>
          <h1 className={styles.title}>RESUME</h1>
          <p className={styles.description}>
            I'm currently a Master's Student at Northeastern University, majoring in Computer Software Engineering. Click on my resume to view!
          </p>
        </div>
        <img
          src={getImageUrl("hero/.png")}
          alt="My Resume"
          className={styles.heroImg}
        />
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
      </section>
    );
  };