import React from 'react'
import styles from './about.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGraduationCap, faLocationDot, faUsers, faGamepad} from '@fortawesome/free-solid-svg-icons'


export default function About() {
  return (
    <div className="section" data-anchor="about">
    <div className={styles.aboutContainer}>
    <div className={styles.overflow}>
    <div className={styles.topContainer}>

    <div className={styles.AleftContainer}>

    <h1 className={styles.aboutTitle}>
      <p>Sobre mí</p>
      </h1>

    </div>








    <div className={styles.ArightContainer}>

    <div className={styles.block}>
    <FontAwesomeIcon icon={faLocationDot} className={styles.icon}/>
    Soy de Capital Federal, Buenos Aires, Argentina
    </div>
    <div className={styles.block}>
    <FontAwesomeIcon icon={faGraduationCap} className={styles.icon}/>
    Estudio Ingeniería en Sistemas en la Universidad Tecnológica Nacional (UTN FRBA)
    </div>
    <div className={styles.block}>
    <FontAwesomeIcon icon={faGamepad} className={styles.icon}/>
    En mi tiempo libre me gusta jugar videojuegos y entrenar
    </div>
    <div className={styles.block}>
    <FontAwesomeIcon icon={faUsers} className={styles.icon}/>
    Disfruto colaborar en equipos y mantener una interacción cercana con mis compañeros
    </div>
    

    </div>


    
    
    
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

