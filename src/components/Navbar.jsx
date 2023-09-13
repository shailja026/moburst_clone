import React from 'react'
import {Link} from "react-router-dom"
import styles from "../Css/navbar.module.css"
function Navbar() {
  return (
    <div className={styles.mainNav}>
 
     <img src='https://beamishtech.com/staging/wp-content/uploads/2022/03/logo.png' alt='' />
     <nav className={styles.navItems}>
        <ul>
            <Link to="" >all services</Link >
            <Link to="" >work</Link >
            <Link to="" > our story</Link >
            <Link to="" >careers</Link >
            <Link to="">blog</Link>
                
        </ul>
        <button>let's talk</button>
     </nav>


    </div>
  )
}

export default Navbar