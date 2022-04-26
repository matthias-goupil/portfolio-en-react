import React, { useEffect, useState } from "react"
import "../styles/Menu.css"

function Menu(props){
    const [isOpen, setIsOpen] = [props.isOpen,props.setIsOpen];

    const liens = props.children;

    return <React.Fragment>
        <div className={isOpen ? "buttonMenu active":"buttonMenu"} onClick={() => setIsOpen(!isOpen)}>
            <span />
            <span />
            <span />
        </div>
        <nav className={!isOpen? "menu":"menu active"}>
            <ul>
                {liens.map((lien) => (
                    <li>{lien}</li>
            ))}
            </ul>
        </nav>
    </React.Fragment>
}

export default Menu;