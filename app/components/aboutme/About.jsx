import React from 'react'
import styles from './about.module.css'


export default function About() {
  return (
    <div className="section" data-anchor="about">
    <div className={styles.aboutContainer}>
    <div className={styles.overflow}>
    <div className={styles.topContainer}>
    Soy de Capital Federal, Buenos Aires, Argentina
    Estudio Ingeniería en Sistemas en la Universidad Tecnológica Nacional (UTN FRBA)
    En mi tiempo libre me gusta jugar videojuegos y entrenar
    Me gusta mucho trabajar en equipo y estar en contacto con gente
    </div>

    <div className={styles.bottomContainer}>
    <div className={styles.ocean}>
    <div class={styles.wave}></div>
    <div class={styles.wave}></div>
    <div class={styles.wave}></div>
    </div>


      
    </div>


    </div>
    </div>
    </div>
  )
}

