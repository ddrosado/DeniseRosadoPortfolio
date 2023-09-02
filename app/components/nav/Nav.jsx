import React from 'react'
import styles from './nav.module.css'

export default function Nav() {
    const navItems = [
      { label: "Sobre mí", href: "#about" },
      { label: "Habilidades", href: "#stack" },
      { label: "Proyectos", href: "#projects" },
      { label: "Contacto", href: "#contact" },
    ];
  
    return (
      <div className={styles.navContainer}>
        <ul className={styles.ul}>
          {navItems.map((item, index) => (
            <li key={index} className={styles.li}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
