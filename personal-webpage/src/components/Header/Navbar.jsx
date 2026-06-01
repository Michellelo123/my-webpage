import styles from "./Navbar.module.css"






// chekc the contact button do i like it? and the web responsive design
// hamburger when screeen smaller 
export default function Navbar() {
  const navLinks = ["About","Work", "portfolio" ]
  const mappedNavLinks = navLinks.map(link => 
<li key={link} className={styles.link}><a href={`#${link.toLowerCase()}`}>{link}</a></li>
)
  
  
    return (
    <>
    <nav className={styles.navBar} >
        <ul className={styles.navLinks}>
            <li className={styles.nameLogo}>
                <a href="#hero">ML.</a>
                <span className={styles.tooltip}>Home</span>
            </li>
            <div className={styles.rightLinks}>
            {mappedNavLinks}
            <li>
                <a href="#contact" className={styles.contactButton}>
                CONTACT ME
            </a>
                </li>
            </div>
        </ul>
        
    </nav>
    </>
  )
}
