import React from 'react'
import styles from './contact.module.css'
import Accordion from '../accordion/Accordion'
import SocialMedia from '../socialMedia/SocialMedia'
import Form from '../form/Form'


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
    <Form/>
    </div>
    
  
    </div>
    </div>
  )
}
