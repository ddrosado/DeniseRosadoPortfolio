import React from 'react'
import styles from './nav.module.css'

export default function Nav() {
    const navItems = [
      { label: "About me", href: "/about" },
      { label: "Stack", href: "/stack" },
      { label: "Projects", href: "/projects" },
      { label: "Opinions", href: "/opinions" },
      { label: "Contact", href: "/contact" },
    ];
  
    return (
      <div className={styles.navContainer}>
        <ul className={styles.ul}>
          {navItems.map((item, index) => (
            <li key={index}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
