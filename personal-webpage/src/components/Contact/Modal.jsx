import React from 'react'
import styles from "./Modal.module.css";
export default function Modal({success, error}) {
  
  
  
    return (
    <div className={`${styles.modal} ${success ||error ? styles.modalShow : "" }`}>

        {success && <p>Message has sent!</p>}
        {error && <p>Failed to send message. Please try again later.</p>}
    </div>
  )
}
