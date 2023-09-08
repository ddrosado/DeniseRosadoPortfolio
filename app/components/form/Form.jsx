import React from 'react'
import styles from './form.module.css'

export default function Form() {
  return (
    <div className={styles.formContainer}>
    <form id="contactForm" className={styles.form}>
    <label htmlFor="name" className={styles.label}>Name:</label>
    <input type="text" id="name" name="name" className={styles.input} required />

    <label htmlFor="email" className={styles.label}>Company:</label>
    <input type="company" id="company" name="company" className={styles.input} required />

    <label htmlFor="email" className={styles.label}>Email:</label>
    <input type="email" id="email" name="email" className={styles.input} required />

    <label htmlFor="message" className={styles.label}>Message:</label>

    <textarea id="message" name="message" rows="4" className={styles.input} required></textarea>

    <input type="submit" value="Submit" className={styles.submit}/>
    </form>

    </div>
  )
}
