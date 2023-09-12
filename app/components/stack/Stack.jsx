import React from 'react'
import styles from './stack.module.css'
import { stackData } from './stackData'
// import Soft from '../svgs/Soft'

export default function Stack() {
  return (
    <div className={styles.stackContainer}>
      {stackData.map((stack) => (
        <div key={stack.id} className={styles.technologieContainer}>
          <div className={styles.svg}>{stack.svg}</div>
          <div className={styles.titleContainer}>
            <h2 className={styles.boxTitle}>{stack.title}</h2>
          </div>
          <div className={styles.content}>
            {stack.stack.map((tech, index) => (
              <span key={index} className={styles.span}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

}
