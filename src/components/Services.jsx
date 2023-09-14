import React from 'react'
import Navbar from './Navbar'
import styles from '../Css/services.module.css'
function Services() {
  return (
    <div>
        <div className={styles.firstContainer}>
         <h5>WHAT WE DO</h5>
         <h3>Services</h3>
         <p>As a full-service digital agency, Moburst offers the full suite of offerings that launch you into the rare air of hypergrowth. Get ready to hit your KPIs, experience incredible ROI, and see results you never thought possible.</p>
         <button>I WANT TO GROW</button>
        </div>
        <div>
        <img src="https://www.moburst.com/wp-content/uploads/2022/05/for-export_optimized-2.png" alt="123" />
        <img src="https://www.moburst.com/wp-content/uploads/2022/05/for-export_optimized-2.png" alt="" />
        </div>

    </div>
  )
}

export default Services