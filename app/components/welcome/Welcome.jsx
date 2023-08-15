import React from 'react'
import styles from './welcome.module.css'
import Image from 'next/image'
import profilephoto from '../../../public/profilephoto.png'

export default function Welcome() {
  return (
    <div className={styles.welcomeContainer}>
       <div className={styles.titleContainer}>

        <div className={styles.descriptionContainer}>

            <div className={styles.leftContainer}>
                <p>Hi! I'm</p>
       <h1 className={styles.welcomeTitle}>Denise Rosado</h1> 
       <h2>A FullStack Developer based in Argentina</h2>
       </div>

       <div className={styles.rightContainer}>
       <div className={styles.imageContainer}>
       <Image src={profilephoto} alt="Profile Photo" layout="responsive" className={styles.image}/>
       </div>
       </div>

       </div>
       </div>
    </div>
  )
}
