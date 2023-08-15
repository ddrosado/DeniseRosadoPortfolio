import React from 'react'
import styles from './welcome.module.css'

export default function Welcome() {
  return (
    <div className={styles.welcomeContainer}>
       <div className={styles.titleContainer}>
       <h1 className={styles.welcomeTitle}>Welcome</h1> 
       </div>
    </div>
  )
}
