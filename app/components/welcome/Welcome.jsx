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
    <div className="section">
    <div className={styles.welcomeContainer}>
       <div className={styles.titleContainer}>
       <Nav/>
        <div className={styles.descriptionContainer}>

        <div className={styles.leftContainer}>


        <div className={styles.textContainer}>
        

          
        <h2 className={styles.welcomeSubtitle}>
          Hi! <Image src={manitoholi} className={styles.manito} width={100}/> I&apos;m  
        <span className={styles.bolder}> Denise Rosado
        </span></h2>
       <h1 className={styles.welcomeTitle}>FullStack Developer</h1> 
       <h2 className={styles.welcomeSubtitle}>with a <span className={styles.bold}>Front-End</span> preference!</h2>

       </div>

       <div className={styles.textContainer2}>
       <h2 className={styles.welcomeSubtitle}>I love crafting intuitive and functional interfaces that enhance user experiences.</h2>

      </div>

       
      <div className={styles.buttonContainer}>
       <a href='/drosadocv.pdf' 
       download='drosadocv'>
        <button
        className={styles.downloadButton}>Resume</button>
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
