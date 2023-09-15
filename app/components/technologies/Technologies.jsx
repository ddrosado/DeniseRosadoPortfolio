import React from 'react'
import styles from './technologies.module.css'
import Stack from '../stack/Stack'
import Wave from '../svgs/Wave'


export default function Technologies() {
  return (
    <div className='section' data-anchor="stack">
    <div className={styles.technologiesContainer}>

      <div className={styles.titleContainer}>
      <h1 className={styles.aboutTitle}>
        Habilidades técnicas
        </h1>
      </div>
    <div className={styles.descriptionContainer}>


    
    <Stack/>
    </div>
    </div>

    </div>

  )
}
