import React from 'react'
import styles from './about.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGraduationCap, faLocationDot, faUsers, faGamepad, faHeart} from '@fortawesome/free-solid-svg-icons'
import icon from '../../../public/icon.png'
import Image from 'next/image'
import { aboutData } from './aboutData'


export default function About() {

  return (
    <div className="section" data-anchor="about">
    <div className={styles.aboutContainer}>
      
    <div className={styles.overflow}>
    <h1 className={styles.aboutTitle}>
      <p>Sobre mí</p>
      </h1>
    <div className={styles.topContainer}>

    <div className={styles.AleftContainer}>

      <div className={styles.about}>

      <Image
      src={icon} alt="About Photo" 
      className={styles.aboutPic}
      width={200}
      height={200}
      />
         
    <div className={styles.textContainer}>

    <p>Crecí en un ambiente donde la tecnología era tema habitual y tuve la suerte de tener una computadora desde muy chica. Mis primeros acercamientos fueron modificando CSS de páginas simples que veía, y me encantaba ver cómo podía crear o destruir cosas. </p>
    
    <p className={styles.paragraph}>En cuanto tuve la oportunidad de estudiar me anoté a Ingeniería en Sistemas, y durante mi cursada fui descubriendo qué áreas de la tecnología más me gustaban, siendo así como descubrí que lo mío era el desarrollo web. </p>
    </div>
    
    </div>


    </div>







    <div className={styles.ArightContainer}>
  {aboutData.map((item, index) => (
    <div key={index} className={styles.block}>
      <FontAwesomeIcon icon={item.icon} className={styles.icon} />
      {item.description}
    </div>
  ))}
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

