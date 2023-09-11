import React from 'react'
import styles from './technologies.module.css'
import Stack from '../stack/Stack'
import Wave from '../svgs/Wave'


export default function Technologies() {
  return (
    <div className='section' data-anchor="stack">
    <div className={styles.technologiesContainer}>

    <div className={styles.descriptionContainer}>
      <h1 className={styles.aboutTitle}>
        <span></span>
        Habilidades técnicas
        </h1>

    
    <Stack/>
    </div>
    </div>

    </div>

  )
}
