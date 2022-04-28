import React, { useEffect, useState } from "react";
import "../styles/Project.css";

function Project(props){
    const [moreDetails,setMoreDetails] = useState(false);
    return <React.Fragment>
        <div className="project">
        <img src={props.image} alt=""/>
            <div>
                <p>{props.nom}</p>
                <a href="#" onClick={(e) => {
                    e.preventDefault();
                    setMoreDetails(true)
                    document.body.style.overflowY = "hidden";
                    }}>En savoir plus</a>
            </div>
        </div>
        <div className={moreDetails?"fenetreModale open":"fenetreModale"}>
                    <div className="content">
                        <button onClick={() => {
                            setMoreDetails(false)
                    document.body.style.overflowY = "auto";
                            
                            }}>Fermer</button>
                        <h2>{props.nom}</h2>
                        <div>
                            {props.children}
                            {props.images.length > 0 ?<React.Fragment>
                                <h3>Le projet en image</h3>
                            <div className="images">
                                {props.images.map((image) => <img src={image} alt="" key={image}/>)}
                            </div></React.Fragment>:null}
                            
                        </div>
                    </div>
                    <div className="buttonBar">
                        {props.github && <a target="_blank" href={props.github}>Github</a>}
                        <a href="#">Tester le projet</a>
                    </div>
                   
        </div>
        </React.Fragment>
}

export default Project;