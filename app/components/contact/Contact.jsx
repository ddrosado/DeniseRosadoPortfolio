import React from 'react'
import styles from './contact.module.css'
import Accordion from '../accordion/Accordion'
import Info from '../info/Info'


export default function Contact() {
  return (
    <div className="section fp-auto-height" data-anchor="contact">
    <div className={styles.contactBackground}>
    <div className={styles.contactContainer}>

    <div className={styles.leftContainer}>
    
    <div className={styles.accordionContainer}>
    <Accordion/>
    </div>


    </div>



    <div className={styles.rightContainer}>

    <Info/>

    </div>
    
  
    </div>
    </div>
    </div>
  )
}
