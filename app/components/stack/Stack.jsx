import React from 'react'
import styles from './stack.module.css'

export default function Stack() {
  return (
    <div className={styles.stackContainer}>
       <div className={styles.frontContainer}>
        Front-End
       </div>

       <div className={styles.backContainer}>
        Back-End
       </div>

       <div className={styles.otherContainer}>
        Ohter
       </div>

       <div className={styles.softContainer}>
        Soft skills
       </div>
    </div>
  )
}
