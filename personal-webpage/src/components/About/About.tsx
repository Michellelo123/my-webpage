import styles from './About.module.css'
import {aboutMe} from "./data"
import {useState} from "react"


// the em wont text align 
export default function About() {

    const [currentIndex, setCurrentIndex] = useState(0)
        const currentPage = 
            <>
            <div>
                <img className={styles.carouselImg} src={`/images/${aboutMe[currentIndex].image}`} alt="photo of michelle" />
            </div>
            <div className={styles.aboutText}>
                <h2>{aboutMe[currentIndex].title}</h2>
                <p>{aboutMe[currentIndex].description}</p>
                <br/>
                <br/>
                <br/>
                <p>{aboutMe[currentIndex].subDescription}</p>
            </div>
        </>

    function nextPic(){
        currentIndex === (aboutMe.length-1)?setCurrentIndex(0) :setCurrentIndex(prev=>prev+1)
    }

  return (
    <section className={styles.background}>
        <h1>About me.</h1>
        <em> "How do you comfort a JavaScript bug? You console it." </em>
        <em>Thanks for taking the time to read this small section about me!</em>
        <button onClick={nextPic} className={styles.nextBtn}>arrow right</button>
        <button className={styles.prevBtn}>arrow left</button>
        <div className={styles.aboutMeModal}>
                {currentPage}
        </div>
    </section>
  )
}
