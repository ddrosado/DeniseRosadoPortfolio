import React from 'react'
import styles from './stack.module.css'

export default function Stack() {
  return (
    <div className={styles.stackContainer}>
       <div className={styles.frontContainer}></div>

       <div className={styles.backContainer}></div>

       <div className={styles.otherContainer}></div>

       <div className={styles.softContainer}></div>
    </div>
  )
}
