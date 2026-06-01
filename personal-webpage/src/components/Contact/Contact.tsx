import React from 'react'
import styles from './Contact.module.css'
import { motion } from 'framer-motion'
export default function Contact() {
  const formData = new FormData()

  function handleSubmit(e){
    e.preventDefault()
  }

  function handleChange(e){
    console.log(e.target.value)
  }



  return (
    <motion.section className={styles.contact} id="contact"
    initial={{ opacity: 0}}
  whileInView={{ opacity: 1}}
  transition={{ duration: 1.2 }}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h2>Contact Me</h2>
        <label>Name:
          <input 
            type="text" 
            placeholder="i.e Bob Smith" 
            value={formData.name} 
            onChange={handleChange} />
        </label>
        <br/>
        <label>Email:
          <input 
            type="text"
            placeholder= "bob.smith123@email.com"
            value={formData.email}
            onChange={handleChange}/>
        </label>
        <br/>
        <label htmlFor="message">Message:
        </label>
        <br/>
          <textarea 
            id="message"
            placeholder="Let me know how I can help you today" 
            value={formData.message} 
            onChange={handleChange} ></textarea>
          <br/>
        <button type="submit">Submit</button>
      </form>
    </motion.section>
  )
}
