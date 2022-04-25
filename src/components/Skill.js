import "../styles/Skill.css";

function Skill({nom,maitrise,image}){
    return <div className="skill">
        <img src={image} alt=""/>
        <div>
            <p>{nom}</p>
        </div>
    </div>
}   

export default Skill;