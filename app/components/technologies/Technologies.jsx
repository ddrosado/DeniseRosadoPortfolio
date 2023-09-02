import React from 'react'
import styles from './technologies.module.css'
import Stack from '../stack/Stack'


export default function Technologies() {
  return (
    <div className='section' data-anchor="stack">
    <div className={styles.technologiesContainer}>

    <div className={styles.descriptionContainer}>
      <h1 className={styles.aboutTitle}>
        <span># </span>
        Skills
        </h1>
      
    
    <div className={styles.descriptionText}>
    <h3 className={styles.aboutText}>
    I enjoy working in a collaborative environment that encourages continuous learning. I easily adapt to new contexts, and I believe that effective communication and collaboration are key to achieving goals. Im always ready to contribute ideas, and working together with a team enhances my productivity. Hope we can work together soon! 
    </h3>
    </div>
    </div>

    
    <Stack/>
    </div>
    </div>

  )
}
