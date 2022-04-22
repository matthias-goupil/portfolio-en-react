import "../styles/Section.css"

function Section(props){
    return <section className={props.className}>
        <h2 className="title">{props.title}</h2>
            {props.children}
    </section>
}

export default Section
