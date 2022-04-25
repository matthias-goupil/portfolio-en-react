import Skill from "./Skill";
import "../styles/SkillCategory.css"

function SkillCategory(props){
    return <div className="skillCategory">
        <p>{props.nom}</p>
        <div>
            {props.children}
        </div>
    </div>
}

export default SkillCategory;