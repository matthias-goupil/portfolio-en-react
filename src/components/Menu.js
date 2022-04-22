import React, { useEffect, useState } from "react"
import "../styles/Menu.css"

function Menu(props){
    const VISIBLE = 1;
    const HIDDEN = 2;
    const ENTERING = 3;
    const LEAVING = 4;

    const [isOpen, setIsOpen] = useState(false);
    const [state, setState] = useState(isOpen ? VISIBLE : HIDDEN);

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