import React from 'react'
import styles from './contact.module.css'
import Accordion from '../accordion/Accordion'


export default function Contact() {
  return (
    <div className="section" data-anchor="contact">
    <div className={styles.contactContainer}>
    <Accordion/>
    </div>
    </div>
  )
}
