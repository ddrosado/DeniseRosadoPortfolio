import React from 'react'
import styles from './contact.module.css'
import Accordion from '../accordion/Accordion'


export default function Contact() {
  return (
    <div className="section" data-anchor="contact">
    <div className={styles.contactContainer}>

    <div className={styles.leftContainer}>
    
    <div className={styles.accordionContainer}>
    <Accordion/>
    </div>


    </div>



    <div className={styles.rightContainer}>
    
    </div>
    
  
    </div>
    </div>
  )
}
