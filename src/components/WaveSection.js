import "../styles/WaveSection.css";
import Section from "./Section";

function WaveSection(props){
    return <Section title={props.title} className={props.className ? "wave "+props.className:"wave"}>
        {props.children}
    </Section>
}

export default WaveSection;