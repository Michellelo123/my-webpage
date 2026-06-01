import React from 'react'
import styles from './Portfolio.module.css'
import {portfolioData} from "./portfolioData"
import { motion } from 'framer-motion'
export default function Portfolio() {

  const mappedPortfolio = portfolioData.map(proj => {
    return(
      <div key={proj.id} className={styles.project}>
        <img src={proj.imageSrc} alt={`image of ${proj.title}`} className={styles.projectImg}/>
          <h3>{proj.title}</h3>
        <div className={styles.description}>
          <p>{proj.techStack}</p>
          <a href={proj.githubLink}>{proj.githubLink}</a>
          <br/>
          <a href={proj.liveLink}>{proj.liveLink}</a>
          <p>{proj.description}</p>

        </div>
      </div>
    )
  })





  return (
    <section className={styles.portfolio} id="portfolio">
      <h1>Portfolio</h1>
      <motion.div className={styles.projects}
      initial={{ opacity: 0, x:-200}}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 1 }}>
      {mappedPortfolio}

      </motion.div>
    </section>
  )
}
