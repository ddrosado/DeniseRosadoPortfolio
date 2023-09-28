import React from 'react'
import styles from './stack.module.css'
import { stackData } from './stackData'
import Image from 'next/image';
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
      <div className={styles.technologiesContainer}>
  {stack.icon.map((icon, index) => (
    <div key={index} className={styles.techContainer}>
      <div className={styles.techIcon}>
        <Image src={icon} width={100} className={styles.techIcon} />
      </div>
      <div className={styles.techName}>
        {stack.stack[index]} 
      </div>
    </div>
  ))}
</div>
        </div>
      ))}
    </div>
  );

}
