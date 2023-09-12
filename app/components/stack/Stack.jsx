import React from 'react'
import styles from './stack.module.css'
import Frontend from '../svgs/Frontend'
import Backend from '../svgs/Backend'
import Other from '../svgs/Other'
import { stackData } from './stackData'
// import Soft from '../svgs/Soft'

const technologies = {
  svg: [<Frontend/>, <Backend/>, <Other/>],
  frontend: ['React', 'JavaScript', 'Redux', 'Redux\u00A0Toolkit', 'Next.js', 'Tailwind', 'CSS', 'HTML'],
  backend: ['Express','Node.js', 'Sequelize', 'PostgreSQL', 'SQL', 'Firebase'], 
  other: ['Agile\u00A0Methodologies', 'GIT', 'GitHub', 'Testing', 'Jest', 'REST\u00A0API', 'Deployment']
};

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

  )
}
