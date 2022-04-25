import "../styles/ContactList.css";

function ContactList(props){
    return <div id="contactList">
        {props.children}
    </div>
}

export default ContactList;