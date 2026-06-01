import styles from './About.module.css'
import {aboutMe} from "./data"
import {useState} from "react"
import { FaSquareCaretRight, FaSquareCaretLeft } from 'react-icons/fa6'
import { motion, AnimatePresence } from 'framer-motion'


// the em wont text align 
// the next and prev button edit the color and it wont be in front of modal
//maybe put animated background and box shadow on the modal 
export default function About() {
    const [open, setOpen] = useState(false)
    const [currentIndex, setCurrentIndex] = useState(0)
    const [showJoke, setShowJoke]= useState(false)
    const [showAnswer, setShowAnswer] = useState(false)
    const [loading, setLoading] = useState(false)

        const currentPage = 
            <>
            
                <img className={styles.carouselImg} src={`/images/${aboutMe[currentIndex].image}`} alt="photo of michelle" />
            <div className={styles.aboutText}>
                <h2>{aboutMe[currentIndex].title}</h2>
                <p>{aboutMe[currentIndex].description}</p>
                <br/>


                <p>{aboutMe[currentIndex].subDescription}</p>
            </div>
        </>
    function openJokeBtn(){
        setOpen(true)  //true
        setShowJoke(true) //true
        setTimeout(()=>{setLoading(true)}, 2000)
        setTimeout(()=>{
            setLoading(false)
            setShowAnswer(true)
        },4000) //true
        open? console.log("open") : console.log("closed")
    }

    function hideJoke(){
        setOpen(false)
        setShowJoke(false)
        setLoading(false)
        setShowAnswer(false)
    }
    function nextPic(){
        currentIndex === (aboutMe.length-1)?setCurrentIndex(0) :setCurrentIndex(prev=>prev+1)
    }
    function prevPic(){
        currentIndex === 0? setCurrentIndex(aboutMe.length-1) : setCurrentIndex(prev=>prev-1)
    }

  return (
    <section id="about" className={styles.background} >
        <motion.div className={styles.aboutHeader}
        
          initial={{ opacity: 0}}
  whileInView={{ opacity: 1}}
  transition={{ duration: 1.2 }}>
            <h1 >About me.</h1>
            <div className={styles.joke}>
            {showAnswer? <button onClick={hideJoke} className={styles.jokeBtn}>Hide me</button> : <button onClick={openJokeBtn} className={styles.jokeBtn}>Would you like to hear a joke?</button>}
            <div className={`${styles.answer} ${open? "":styles.hidden}`}>
            
            {showJoke && <p>"How do you comfort a Javascript bug?</p>}
            {loading && <p>Loading answer...</p>}
            {showAnswer && <p>"You console it</p>}
            
            </div>
            </div>

        </motion.div>
        {/* maybe do a couple buttons like click me for a question adn then click me for an answer  */}
        {/* <button className={styles.jokeBtn} onClick={openJokeBtn}>Would you like to hear a joke? Click me!</button> */}
        {/* <button className={styles.jokeBtn}>Ready for the answer? Click me!</button> */}
        
        
        {/* <p className={`${styles.answer} ${open? styles.open : ""}`}> "How do you comfort a JavaScript bug?" </p>
        <p>"You console it"</p> */}
       
        <motion.div className={styles.carouselWrapper}
        initial={{ opacity: 0}}
  whileInView={{ opacity: 1}}
  transition={{ duration: 1.2 }}>
            <button onClick={prevPic} className={styles.prevBtn}><FaSquareCaretLeft className={styles.prevIcon}/></button>
            <div className={styles.aboutMeModal}>
                {currentPage}
            </div>
            <button onClick={nextPic} className={styles.nextBtn}><FaSquareCaretRight className={styles.nextIcon}/></button>
        </motion.div>
    </section>
  )
}
