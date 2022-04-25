import { useState } from "react";
import "../styles/Contact.css";

function Contact({nom, icon, valeur, lien,color}){
    const [isHover,setIsHover] = useState(false);
    function handleHover(){
        setIsHover(!isHover);
    }
    return <div className="contact" onMouseLeave={handleHover} onMouseEnter={handleHover} 
    style={{
        backgroundColor: isHover?color:"transparent"
    }}>
        <img src={icon} alt="" />
        <div>
            <p>{nom}</p>
            <a target="_blank" href={lien}>{valeur}</a>
        </div>
    </div>
}

export default Contact;

