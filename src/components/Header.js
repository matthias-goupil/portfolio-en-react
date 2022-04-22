import "../styles/Header.css"
import Menu from "./Menu"

function Header(){
    return <header>
        <div className="logo">
            <h1>Matthias Goupil</h1>
            <p>Etudiant en informatique</p>
        </div>
        <Menu duration="1000">
            <a href="#">Présentation</a>
            <a href="#">Compétences</a>
            <a href="#">Mes projets</a>
            <a href="#">Contactez-moi</a>
        </Menu>
    </header>
}

export default Header