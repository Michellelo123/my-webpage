import { motion } from "framer-motion";
import styles from "./Hero.module.css";
import { FaLocationDot, FaLinkedin, FaSquareGithub } from "react-icons/fa6";

export default function Hero() {
  return (
    <section className={styles.heroSection} id="hero">
      <motion.h1
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 2.5 }}
      >
        Hi, I'm Michelle.
      </motion.h1>
      <motion.div
        className={styles.location}
        initial={{ opacity: 0, x: 400 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 2.5 }}
      >
        <span className={styles.locationBackground}>
          <FaLocationDot className={styles.locationIcon} />
        </span>
        Wellington, NZ
      </motion.div>
      <motion.p
        className={styles.description}
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 2.5 }}
      >
        I'm a career-changer with a love for clean design and a background in
        dental. When I'm not coding, you'll find me exploring the great outdoors
        with my two dogs. Learn more{" "}
        <a href="#about" className={styles.aboutMe}>
          about me
        </a>
        .
      </motion.p>
      <div className={styles.socialLinks}>
        <a href="https://github.com/Michellelo123" target="_blank">
          <FaSquareGithub />
        </a>
        <a href="https://www.linkedin.com/in/michelle-looc/" target="_blank">
          <FaLinkedin />
        </a>
      </div>
    </section>
  );
}
