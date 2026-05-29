

export default function Navbar() {
  const navLinks = ["About","Work","Education","Contact me"]
  const mappedNavLinks = navLinks.map(link => 
<li key={link}>{link}</li>
)
  
  
    return (
    <>
    <nav>
        <ul>
            <li>Michelle</li>
            <div>
            {mappedNavLinks}
            </div>
        </ul>
    </nav>
    </>
  )
}
