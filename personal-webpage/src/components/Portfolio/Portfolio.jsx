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
          <p className={styles.tech}>{proj.techStack.map((tech, index)=>(
            <span key={index} className={styles.techStack}>
              {tech}
            </span>
          ))}</p>
          <div className={styles.links}>
          <a href={proj.githubLink} target="_blank">Github link</a>
          
          <a href={proj.liveLink} target="_blank">Live demo</a>

          </div>
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
