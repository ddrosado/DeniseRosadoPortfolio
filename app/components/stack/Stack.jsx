import React from 'react'
import styles from './stack.module.css'
import Frontend from '../svgs/Frontend'
import Backend from '../svgs/Backend'
import Other from '../svgs/Other'
// import Soft from '../svgs/Soft'

const technologies = {
  frontend: ['React', 'JavaScript', 'Redux', 'Redux\u00A0Toolkit', 'Next.js', 'Tailwind', 'CSS', 'HTML'],
  backend: ['Express','Node.js', 'Sequelize', 'PostgreSQL', 'SQL', 'Firebase'], 
  other: ['Agile\u00A0Methodologies', 'GIT', 'GitHub', 'Testing', 'Jest', 'REST\u00A0API', 'Deployment']
};

export default function Stack() {
  return (
    <div className={styles.stackContainer}>
       <div className={styles.frontContainer}>

      <div className={styles.svg}><Frontend/></div>
        
      <div className={styles.titleContainer}>
        <h2 className={styles.boxTitle}>Front-End</h2>
        </div>

      <div className={styles.content}>
      {technologies.frontend.map((tech, index) => (
            <span key={index} className={styles.span}> {tech} </span>
          ))}
      </div>

       </div>

       <div className={styles.backContainer}>
       <div className={styles.svg}><Backend/></div>

       <div className={styles.titleContainer}>
        <h2 className={styles.boxTitle}>Back-End</h2>
        </div>

        <div className={styles.content}>
      {technologies.backend.map((tech, index) => (
            <span key={index} className={styles.span}>{tech}</span>
          ))}
      </div>

       </div>

       <div className={styles.otherContainer}>
       <div className={styles.svg}><Other/></div>

       <div className={styles.titleContainer}>
       <h2 className={styles.boxTitle}>Methodologies & Tools</h2>
       </div>

       <div className={styles.content}>
      {technologies.other.map((tech, index) => (
            <span key={index} className={styles.span}>{tech}</span>
          ))}
      </div>

       </div>

       {/* <div className={styles.softContainer}>
        <Soft/>
        Soft skills
       </div> */}
    </div>
  )
}
