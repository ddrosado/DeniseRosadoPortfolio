import React from 'react'
import styles from './info.module.css'

export default function Info() {
  return (
    <div className={styles.contactWays}>
        <h1 className={styles.contact}>Contactame!</h1>
        
      <div className={styles.parent}>
       <div className={styles.div1}>
       <a href="https://github.com/ddrosado" target="_blank" rel="noopener noreferrer">
          <svg stroke-linejoin="round" height="2em" stroke-linecap="round" stroke-width="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" className="w-8 hover:scale-125 duration-200 hover:stroke-black-500"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
        </a>
  </div>
        <div className={styles.div2}>/ddrosado</div>
               


       <div className={styles.div3}>
       <a href="https://www.linkedin.com/in/deniserosado" target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 448 512" className="w-8 hover:scale-125 duration-200 hover:stroke-blue-500"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg>
        </a>
        </div>
        <div className={styles.div4}>/deniserosado</div>



       <div className={styles.div5}>
        <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 512 512"><path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"/></svg>
        </div>
        <div className={styles.div6}>deniselucianarosado@gmail.com</div>
        </div>
        
    </div>
  )
}
