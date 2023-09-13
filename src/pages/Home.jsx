import React from 'react'
import Navbar from '../components/Navbar'
import styels from "../Css/home.module.css"
function Home() {
  return (
    <div className={StyleSheet.HomePage}>
        <Navbar/>
        <div className={styels.videos}>
            <video  src="https://youtu.be/DRViafSNp1s"/>
           
    </div>
    </div>
  )
}

export default Home