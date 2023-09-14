import React from 'react'
import styles from './allProjects.module.css'
import { projectData } from './projectData'
import Image from 'next/image'

export default function AllProjects() {
  return (
    <div className={styles.projects}>
    {projectData.map((card) => (
  <div key={card.id} className={styles.card}>
    <Image
    src={card.images}
    width={500}
    height={500}
    className={styles.projectImage}
    />
    <h2>{card.title}</h2>
<ul className={styles.techUl}>
    {card.technologies.map((tech, index) => (
          <li key={index} className={styles.techLi}>{tech}</li>
        ))}
    </ul>
    {/* <p>{card.description}</p>
    <p>{card.id}</p> */}

<div className={styles.buttonContainer}>
<a href={card.github} className={styles.seeMore}>
  Repositorio
</a>
<a href={card.deploy} className={styles.seeMore}>
  Deploy
</a>
</div>
  </div>
))}
    

    </div>
  )
}
