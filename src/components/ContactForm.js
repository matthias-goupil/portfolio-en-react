import { useState } from "react";
import "../styles/ContactForm.css"

function validateEmail(mail) 
{
    return (new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(mail))
}

function ContactForm(){
    const [emailValue,setEmailValue] = useState("");
    const [nom,setNom] = useState("");
    const [prenom,setPrenom] = useState("");
    const [message,setMessage] = useState("");

    function handleSubmit(e){
        e.preventDefault();
        if(validateEmail(emailValue)){
            alert("oui");
        }
        else{
            alert("non")
        }
    }

    return <form className="contactForm" onSubmit={handleSubmit}>
        <input required type="email" placeholder="votre adresse email" name="email" value={emailValue} onChange={(input) => setEmailValue(input.value)}/>
        <div>
            <input required type="text" placeholder="nom" name="nom"/>
            <input required type="text" placeholder="prénom" name="prenom"/>
        </div>
        
        <textarea required placeholder="votre message" name="message">

        </textarea>
        <button type="submit">Envoyer</button>

    </form>
}

export default ContactForm;