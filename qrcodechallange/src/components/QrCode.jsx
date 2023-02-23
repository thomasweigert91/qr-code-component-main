import React from 'react'
import styles from "./QrCode.module.css"
import QR from "../assets/image-qr-code.png"


const QrCode = () => {
  return (
    <div className={styles.container}>
        <img src={QR} alt='QRcode' className={styles.img}/>
        <h1 className={styles.heading}>Improve your front-end <br/> skills by building projects</h1>
        <p className={styles.text}>Scan the QR code to visit Frontend <br/> Mentor and take your coding skills to <br/> the next level</p>
    </div>
  )
}

export default QrCode