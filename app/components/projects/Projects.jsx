import React from 'react'
import styles from './projects.module.css'
import AllProjects from '../allprojects/AllProjects'

export default function Projects() {
  return (
    <div className="section" data-anchor="projects">
    <div className={styles.projectsContainer}>
    <div className={styles.myProjectsContainer}>
    <h1 className={styles.projectsTitle}>Proyectos</h1>
    <AllProjects/>
    </div>
    </div>
    </div>
  )
}
