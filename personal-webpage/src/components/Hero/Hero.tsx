import styles from './Hero.module.css'
import { FaLocationDot } from 'react-icons/fa6'

// need to change my a href to LINK once i have done react router 
export default function Hero() {
  return (

    <section className={styles.heroSection}>
        <h1>
        Hi, I'm Michelle.   
        </h1>
        <div className={styles.location}>
            <span className={styles.locationBackground}>
            <FaLocationDot className={styles.locationIcon}/>

            </span>
            Wellington, NZ
        </div>
        <p className={styles.description}>I'm a career-changer with a love for clean design and a background in dental. When I'm not coding, you'll find me exploring the great outdoors with my two dogs. Learn more <a href="/about" className={styles.aboutMe}>about me</a>.</p>
    </section>

  )
}
