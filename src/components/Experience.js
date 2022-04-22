import "../styles/Experience.css"

function Experience(props){
    return <div className="experience" >
        <p className="date">{props.date}</p>
        <p className="content">{props.children}</p>
    </div>
}

export default Experience