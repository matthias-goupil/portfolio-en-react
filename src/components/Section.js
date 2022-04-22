import "../styles/Section.css"

function Section(props){
    return <section className={props.className} id={props.id}>
        <h2 className="title">{props.title}</h2>
            {props.children}
    </section>
}

export default Section
