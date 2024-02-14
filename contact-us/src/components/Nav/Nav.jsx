import React from 'react'
import styles from './nav.module.css'
const Nav = () => {
  return (
    <nav className={`${styles.nav} container`}>
        <div className='logo'>
            <img src="/images/logo.jpeg" className='img1' alt="contact logo" />
        </div>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
  )
}

export default Nav
