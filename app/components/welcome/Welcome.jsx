import React from 'react'
import styles from './welcome.module.css'
import Image from 'next/image'
import profilephoto from '../../../public/profilephoto.png'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import manitoholi from '../../../public/manitoholi.png'
import Nav from '../nav/Nav'
config.autoAddCss = false

export default function Welcome() {
  return (
    <div className="section fp-auto-height" data-anchor="home">
    <div className={styles.welcomeContainer}>
       <div className={styles.titleContainer}>
       <Nav/>
        <div className={styles.descriptionContainer}>

        <div className={styles.leftContainer}>


        <div className={styles.textContainer}>
        

          
        <h2 className={styles.welcomeSubtitle}>
          Hola! <Image src={manitoholi} className={styles.manito} width={100} alt='Denise'/> Soy 
        <p className={styles.welcomeTitle}> Denise Rosado,
        </p></h2>
       <h1 className={styles.bolder}>FullStack Developer</h1> 
       <h2 className={styles.welcomeSubtitle}>especializada en .NET y React</h2>

       </div>

       <div className={styles.textContainer2}>
       <h2 className={styles.welcomeSubtitle}>Y disfruto de crear interfaces intuitivas que enriquezcan la experiencia del usuario.</h2>

      </div>

       
      <div className={styles.buttonContainer}>
       <a href='/drosadocv.pdf' 
       download='drosadocv'>
        <button
        className={styles.downloadButton}>Descargar CV</button>
      </a>
      <a href='#contact'>
      <button
        className={styles.contactButton}>Contactame</button>
      </a>
      </div>



       </div>





       <div className={styles.rightContainer}>
       <div className={styles.imageContainer}>
       <Image src={profilephoto} alt="Profile Photo" layout="responsive" className={styles.image}/>


       
       </div>
       </div>

       </div>
       </div>
    </div>

    </div>
  )
}
