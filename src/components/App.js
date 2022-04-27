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
import sqlSkill from "../assets/skills/SQL.png";
import javaSkill from "../assets/skills/Java.png";
import javaFxSkill from "../assets/skills/JavaFx.png";
import androidStudioSkill from "../assets/skills/AndroidStudio.png";
import cSkill from "../assets/skills/C.png";
import symfonySkill from "../assets/skills/Symfony.png";
import reactSkill from "../assets/skills/React.png";
import threeJsSkill from "../assets/skills/ThreeJs.png";

import linux from "../assets/skills/Linux.png";
import docker from "../assets/skills/Docker.png"
import wordpress from "../assets/skills/Wordpress.png"
import git from "../assets/skills/Git.png"
import portfolio from "../assets/projects/Portfolio.png"

// import github from "../assets/Github.svg"

// IMPORT PROJECT IMAGES
import serreProject from "../assets/projects/serre.jpg"
import bangProject from "../assets/projects/Bang.png"
import eCommerceProject from "../assets/projects/e-commerce.png"
import flappyBirdProject from "../assets/projects/FlappyBird.png"
import instagram from "../assets/projects/Instagram.png"

import photoProfil from "../assets/photoProfil.jpg"


function App() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <section id="presentation">
          <div>
            <h2 className='title'>à propos de moi</h2>
            <p>
Je m'appelle Matthias, j'ai 19 ans et suis en deuxième année de DUT informatique à l'IUT de Montpellier. Le développement web est actuellement le domaine qui me plait le plus dans l'informatique et je veux en faire mon métier. Je suis d'ailleurs à la recherche d'un stage dans ce domaine là. Quand j'ai du temps libre, j'aime découvrir et apprendre à utiliser de nouvelles technologies. 
            </p>
            <a href="#"> Mon CV<span></span><span></span><span></span><span></span></a>
          </div>
          <img alt="" src={photoProfil}></img>
        </section>
      <WaveSection title="Mes expériences" id="experiences">
        {experiences.map((experience) => {
          return <Experience key={experience.name} date={experience.date}><span>{experience.name}</span>{experience.place}</Experience>
        })}
      </WaveSection>
      <Section id="skills" title="Mes Compétences">
        {Object.keys(skills).map((category) =>{
          return <SkillCategory key={category} nom={category}>
          {skills[category].map((skill) => {
            return <Skill key={skill.name} nom={skill.name} image={skill.image} maitrise={skill.maitrise}></Skill>
          })}
        </SkillCategory>
        })}
      </Section>
      <Section id="projects" title="Projets réalisés">
        <div>
          {projects.map((project) => {
            return <Project nom={project.name} image={project.image} github={project.github}>
            {project.content}
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

const experiences = [
  {
    date: "2022",
    name: "Stage développeur web PHP",
    place: "SMILE Montpellier"
  },
  {
    date: "2022",
    name: "Participation à la nuit de l'info",
    place: "IUT Montpellier-Sète"
  },
  {
    date: "2020 - 2022",
    name: "DUT informatique",
    place: "IUT Montpellier-Sète"
  },
  {
    date: "2018 - 2020",
    name: "Bac STI2D Mention Très Bien",
    place: "Lycée St Joseph Pierre Rouge"
  },
  
  
  
]

// SKILLS DATA
var skills = {
  "Langages et frameworks" : [
    {
      name: "HTML et CSS",
      image: htmlEtCssSkill,
      maitrise: 4
    },
    {
      name: "Javascript",
      image: javascriptSkill,
      maitrise: 4
    },
    {
      name: "React",
      image: reactSkill,
      maitrise: 3
    },
    {
      name: "ThreeJs",
      image: threeJsSkill,
      maitrise: 3
    },
    {
      name: "PHP",
      image: phpSkill,
      maitrise: 3
    },
    {
      name: "Symfony",
      image: symfonySkill,
      maitrise: 2
    },
    {
      name: "SQL",
      image: sqlSkill,
      maitrise: 4
    },
    {
      name: "Java",
      image: javaSkill,
      maitrise: 3
    },
    {
      name: "JavaFx",
      image: javaFxSkill,
      maitrise: 2
    },
    {
      name: "Android Studio",
      image: androidStudioSkill,
      maitrise: 2
    },
    {
      name: "C",
      image: cSkill,
      maitrise: 3
    },
  ],
  "software": [
    {
      name: "Linux",
      image: linux  ,
      maitrise: 3
    },
    {
      name: "Wordpress",
      image: wordpress,
      maitrise: 3
    },
    {
      name: "Docker",
      image: docker,
      maitrise: 2
    },
    {
      name: "Git",
      image: git,
      maitrise: 3
    }
  ]
};

const projects = [
  {
    name: "Instagram en Symfony",
    image: instagram,
    content: <p>Test</p>,
    github: "https://github.com/matthias-goupil/instagram-symfony"
  },
  {
    name: "site portfolio",
    image: portfolio,
    content: <p>Test</p>,
    github: "https://github.com/matthias-goupil/portfolio-en-react"
  },
  {
    name: "Application web pour la Serre de l'IUT de Montpellier",
    image: serreProject,
    content: <p>Test</p>,
    github: null
  },
  {
    name: "Site e-commerce en PHP",
    image: eCommerceProject,
    content: <p>Test</p>,
    github: "https://github.com/matthias-goupil/projet-e-Commerce-IUT"
  },
  {
    name: "IHM du jeu \"Bang !\" en JavaFx",
    image: bangProject,
    content: <p>Test</p>,
    github: null
  },
  {
    name: "Flappy Bird en Javascript",
    image: flappyBirdProject,
    content: <p>Test</p>,
    github: null
  }
]

export default App;
