import React from 'react'
import styles from './about.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGraduationCap, faLocationDot, faUsers, faGamepad, faHeart} from '@fortawesome/free-solid-svg-icons'
import icon from '../../../public/icon.png'
import Image from 'next/image'


export default function About() {
  return (
    <div className="section" data-anchor="about">
    <div className={styles.aboutContainer}>
    <div className={styles.overflow}>
    <div className={styles.topContainer}>

    <div className={styles.AleftContainer}>

      <div className={styles.about}>
    <h1 className={styles.aboutTitle}>
      <p>Sobre mí</p>
      </h1>
      <Image
      src={icon} alt="About Photo" 
      className={styles.aboutPic}
      width={200}
      />
    <p>Crecí en un ambiente donde la tecnología era tema habitual y tuve la suerte de tener una computadora desde muy chica. Mis primeros acercamientos fueron modificando CSS de páginas simples que veía, y me encantaba ver cómo podía crear o destruir cosas. </p>
    
    <p className={styles.paragraph}>En cuanto tuve la oportunidad de estudiar me anoté a Ingeniería en Sistemas, y más tarde fui descubriendo qué áreas de la tecnología me llamaban realmente, así fue como descubri el desarrollo web. </p>
    </div>


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
    En mi tiempo libre me gusta jugar videojuegos, entrenar y dibujar
    </div>
    <div className={styles.block}>
    <FontAwesomeIcon icon={faUsers} className={styles.icon}/>
    Disfruto colaborar en equipos y mantener una interacción cercana con mis compañeros
    </div>
    <div className={styles.block}>
    <FontAwesomeIcon icon={faHeart} className={styles.icon}/>
    Adquiero conocimientos con rapidez y estoy constantemente actualizando mis habilidades para estar al tanto de las nuevas herramientas
    </div>
    

    </div>


    
    
    
    </div>

    <div className={styles.bottomContainer}>
    <div className={styles.ocean}>
    <div className={styles.wave}></div>
    <div className={styles.wave}></div>
    <div className={styles.wave}></div>
    </div>


      
    </div>


    </div>
    </div>
    </div>
  )
}

