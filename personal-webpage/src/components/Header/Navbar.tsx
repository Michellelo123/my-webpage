import styles from "./Navbar.module.css"






// chekc the contact button do i like it? and the web responsive design
export default function Navbar() {
  const navLinks = ["About","Work","Education", "portfolio", "Skills"]
  const mappedNavLinks = navLinks.map(link => 
<li key={link} className={styles.link}>{link}</li>
)
  
  
    return (
    <>
    <nav className={styles.navBar} >
        <ul className={styles.navLinks}>
            <li className={styles.nameLogo}>
                ML.
                <span className={styles.tooltip}>Home</span>
            </li>
            <div className={styles.rightLinks}>
            {mappedNavLinks}
            <button className={styles.contactButton}>
                CONTACT ME
            </button>
            </div>
        </ul>
        
    </nav>
    </>
  )
}
