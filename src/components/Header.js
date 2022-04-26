import { useState } from "react"
import "../styles/Header.css"
import Menu from "./Menu"
import MenuLink from "./MenuLink";

function Header(){
    const [isWhite,setIsWhite] = useState(window.scrollY >= 100);
    const [menuIsOpen,setMenuIsOpen] = useState(false);

    document.addEventListener("scroll",()=>{
        setIsWhite(window.scrollY >= 100);
    });

    return <header className={isWhite?"white":""}>
        <div className="logo">
            <h1>Matthias Goupil</h1>
            <p>Etudiant en informatique</p>
        </div>
        <Menu duration="1000" isOpen={menuIsOpen} setIsOpen={setMenuIsOpen}>
            <MenuLink href="presentation" menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen}>Présentation</MenuLink>
            <MenuLink href="experiences" menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen}>Expériences</MenuLink>
            <MenuLink href="skills" menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen}>Compétences</MenuLink>
            <MenuLink href="projects" menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen}>Mes projets</MenuLink>
            <MenuLink href="contact" menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen}>Contactez-moi</MenuLink>
        </Menu>
    </header>
}

export default Header