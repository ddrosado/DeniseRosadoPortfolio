import React from 'react'
import styles from './about.module.css'
import Stack from '../stack/Stack'

export default function About() {
  return (
    <div className={styles.aboutContainer} id="about">

    <div className={styles.descriptionContainer}>
      <h1 className={styles.aboutTitle}>
        <span>#</span>
        About me
        </h1>
      </div>
    
    <div className={styles.descriptionContainer2}>
    ola me gusta la papa frita
    </div>

    <Stack/>

    </div>
  )
}
