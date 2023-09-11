import React from 'react'
import styles from './form.module.css'
import { useState } from 'react';

export default function Form() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {}


  return (
    <div className={styles.formContainer}>
    <form id="contactForm" className={styles.form} onSubmit={handleSubmit}>
      <h1 className={styles.formTitle}>Contactame</h1>
    <label htmlFor="name" className={styles.label}></label>
    <input type="text" id="name" name="name" value={fullname} className={styles.input} placeholder='Nombre' required />

    <label htmlFor="email" className={styles.label}></label>
    <input type="company" id="company" name="company" className={styles.input}  placeholder='Email' required/>

    <label htmlFor="email" className={styles.label}></label>
    <input type="email" id="email" name="email" className={styles.input} placeholder='Asunto' required />

    <label htmlFor="message" className={styles.label}></label>

    <textarea id="message" name="message" rows="4" className={styles.input}  placeholder='Mensaje' required></textarea>

    <input type="submit" value="Submit" className={styles.submit}/>
    </form>


    </div>
  )
}
