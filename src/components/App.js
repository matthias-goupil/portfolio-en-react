import React from 'react';
import Contact from './Contact';
import ContactForm from './ContactForm';
import Experience from './Experience';
import Header from "./Header"
import Section from './Section';
import WaveSection from './WaveSection';
import ContactList from './ContactList';
import SkillCategory from './SkillCategory';
import Skill from './Skill';
import Project from './Project';

import '../styles/App.css'; 

// IMPORT CONTACT IMAGES
import github from "../assets/Github.svg"
import linkedin from "../assets/Linkedin.svg"
import discord from "../assets/Discord.svg"
import telephone from "../assets/Telephone.svg"

// IMPORT SKILL IMAGES
import htmlEtCssSkill from "../assets/skills/HTMLCSS.png";
import phpSkill from "../assets/skills/Php.png";
import javascriptSkill from "../assets/skills/Javascript.png";
import sqlSkill from "../assets/skills/HTMLCSS.png";
import javaSkill from "../assets/skills/Java.png";
import javaFxSkill from "../assets/skills/HTMLCSS.png";
import androidStudioSkill from "../assets/skills/HTMLCSS.png";
import cSkill from "../assets/skills/C.png";
import symfonySkill from "../assets/skills/HTMLCSS.png";
import reactSkill from "../assets/skills/HTMLCSS.png";
import threeJsSkill from "../assets/skills/HTMLCSS.png";
// import htmlEtCssSkill from "../assets/skills/HTMLCSS.png";

// import github from "../assets/Github.svg"

// IMPORT PROJECT IMAGES
import serreProject from "../assets/projects/serre.jpg"
import bangProject from "../assets/projects/Bang.png"
import eCommerceProject from "../assets/projects/e-commerce.png"
import flappyBirdProject from "../assets/projects/FlappyBird.png"


function App() {
  return (
    <React.Fragment>
      <Header />
      <main>
      <WaveSection title="Mes expériences" id="experiences">
        <Experience date="2020-2021">Bac STI2D Mention Très Bien <br />Lycée St Joseph Pierre Rouge</Experience>
        <Experience date="2020-2021">Dut informatique <br />IUT Montpellier-Sète</Experience>
        <Experience date="2020-2021">Participation à la nuit de l'info <br />IUT Montpellier-Sète</Experience>
        <Experience date="2020-2021">Stage Développeur web PHP <br />chez SMILE</Experience>
      </WaveSection>
      <Section id="skills" title="Mes Compétences">
        {Object.keys(skills).map((category) =>{
          return <SkillCategory key={category} nom={category}>
          {skills[category].map((skill) => {
            return <Skill key={skill.name} nom={skill.name} image={skill.image}></Skill>
          })}
        </SkillCategory>
        })}
      </Section>
      <Section id="projects" title="Projets réalisés">
        <div>
          {projects.map((project) => {
            return <Project nom={project.name} image={project.image}>
            <div className='contexte'>
                <h3>Contexte</h3>
                <p>Pour eerer</p>
            </div>
            </Project>
          })}
        </div>
      </Section>
      <WaveSection id="contact" className="noBottom" title="Contactez moi">
        <div>
          <ContactList> 
            <Contact nom="Github" lien="https://github.com/matthias-goupil" valeur="matthias-goupil" icon={github} color="#414141"/>
            <Contact nom="Linkedin" lien="https://github.com/matthias-goupil" valeur="Matthias Goupil" icon={linkedin} color="#0a66c2"/>
            <Contact nom="Discord" lien="https://github.com/matthias-goupil" valeur="Matthias#6323" icon={discord} color="#465ced"/>
            <Contact nom="Téléphone" lien="https://github.com/matthias-goupil" valeur="06 28 48 99 93" icon={telephone} color="#00cc66"/>
            <Contact nom="Adresse email" lien="https://github.com/matthias-goupil" valeur="matthias.goupil.pro@gmail.com" icon={github} color="#df3e3e"/>
          </ContactList>
        <ContactForm></ContactForm>
        </div>
      </WaveSection>
      </main>
      
    </React.Fragment>
  );
}


// SKILLS DATA
var skills = {
  "Langages et frameworks" : [
    {
      name: "HTML et CSS",
      image: htmlEtCssSkill
    },
    {
      name: "Javascript",
      image: javascriptSkill
    },
    {
      name: "React",
      image: reactSkill
    },
    {
      name: "ThreeJs",
      image: threeJsSkill
    },
    {
      name: "PHP",
      image: phpSkill
    },
    {
      name: "Symfony",
      image: symfonySkill
    },
    {
      name: "SQL",
      image: sqlSkill
    },
    {
      name: "Java",
      image: javaSkill
    },
    {
      name: "JavaFx",
      image: javaFxSkill
    },
    {
      name: "Android Studio",
      image: androidStudioSkill
    },
    {
      name: "C",
      image: cSkill
    },
  ],
  "software": [
    {
      name: "Git",
      image: ""
    },
    {
      name: "Linux",
      image: ""
    },
    {
      name: "Wordpress",
      image: ""
    },
    {
      name: "Docker",
      image: ""
    },
  ]
};

const projects = [
  {
    name: "Application web pour la Serre de l'IUT de Montpellier",
    image: serreProject
  },
  {
    name: "Site e-commerce en PHP",
    image: eCommerceProject
  },
  {
    name: "Flappy Bird en Javascript",
    image: flappyBirdProject
  },
  {
    name: "IHM du jeu \"Bang !\" en JavaFx",
    image: bangProject
  },
]

export default App;
