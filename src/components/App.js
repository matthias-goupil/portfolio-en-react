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
import instagram1 from "../assets/projects/Instagram/1.png"
import instagram2 from "../assets/projects/Instagram/2.png"
import instagram3 from "../assets/projects/Instagram/3.png"
import instagram4 from "../assets/projects/Instagram/4.png"
import instagram5 from "../assets/projects/Instagram/5.png"
import instagram6 from "../assets/projects/Instagram/6.png"
import instagram7 from "../assets/projects/Instagram/7.png"
import instagram8 from "../assets/projects/Instagram/8.png"

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
Je m'appelle Matthias, j'ai 19 ans et suis en deuxième année de DUT informatique à l'IUT de Montpellier. Le développement web est actuellement le domaine qui me plait le plus dans l'informatique et je veux en faire mon métier. En ce moment, je suis stagiaire développeur web chez SMILE. Quand j'ai du temps libre, l'une des mes occupations est de découvrir et d'apprendre à utiliser de nouvelles technologies. 
            </p>
            <a target="_blank" href="https://matthiasgoupil.fr/documents/CV Matthias GOUPIL.pdf"> Mon CV<span></span><span></span><span></span><span></span></a>
          </div>
          <img target="_blank" alt="" src={photoProfil}></img>
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
            return <Project images={project.images} nom={project.name} image={project.image} github={project.github}>
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
    content: <React.Fragment>
      <div>
        <p>Afin de m'entrainer à l'utilisation du framework Symfony, je me suis mis pour objectif de réaliser un réseau-social. <br />Pour cela, je me suis inspiré de Instagram, un réseau social permettant de partager des photos.</p>
        <p className='Pliste'>Fonctionnalités implémentées :</p>
        <ul>
          <li>Authentification / inscription d'un utilisateur</li>
          <li>Gestion d'un profil utilisateur</li>
          <li>Option de modification / suprression d'un profil utilisateur</li>
          <li>option d'abonnement à un utilisateur</li>
          <li>Système d'ajout de publication pour partager une photo et la commenter</li>
          <li>Option de like pour aimer une publication</li>
        </ul>

        <p className='Pliste'>Principales technologies utilisées</p>
        <ul>
          <li>le framework Symfony</li>
          <li>l'ORM Doctrine</li>
          <li>Le moteur de template Twig</li>
        </ul>
      </div>
      
    </React.Fragment>,
    github: "https://github.com/matthias-goupil/instagram-symfony",
    images: [instagram1,instagram2,instagram3,instagram5,instagram6,instagram7,instagram4,instagram8]
  },
  {
    name: "site portfolio",
    image: portfolio,
    content: <div>
      <p>Réalisation de mon site portfolio avec la bibiliothèque Javascript Reactdans le but de m'entrainer.<br />Ce site sert principalement à me contacter et présenter mes expériences, mes compétences et mes projets.<br />Vous êtes actuellement en train de l'utiliser.</p>
    </div>,
    github: "https://github.com/matthias-goupil/portfolio-en-react",
    images: []

  },
  {
    name: "Application web pour la Serre de l'IUT de Montpellier",
    image: serreProject,
    content: <p>Pour le projet tuteuré du 3 semestre de mon DUT, avec mon groupe, nous avons réalisé une application web pour la serre connectée de l’IUT.<br />
    En effet, le bâtiment A de l’IUT abrite une serre connectée et une grande grande partie du fonctionnement de cette serre est automatisée (Filtration, arrosage des plantes, etc.. ). Néanmoins une supervision humaine était requise pour un certain nombre de contrôles et d’actions.
    Exemple: Le niveau de l’eau est-il assez haut ? Si non faire un complément ?<br />
    Seul un tout petit nombre de personnes réalisaient ces tâches. Et par manque d’outil de suivi, plusieurs personnes pouvaient passer chaque jour pour contrôler (et se déplaçaient pour rien si quelqu’un était déjà passé).
    <br />L’idée de notre application web est donc de gérer ces interventions de contrôle et ce de façon planifiée.</p>,
    github: null,
    images: [instagram1]

  },
  {
    name: "Site e-commerce en PHP",
    image: eCommerceProject,
    content: <p>Réalisé dans l'un des cours de mon DUT, ce projet de groupe avait pour but de concevoir un e-commerce (sans la partie paiement) afin de mieux se familiariser au langage PHP et au design pattern MVC.
    <br />Le côté responsive du site et la partie paiement n'a donc pas été implémentée. </p>,
    github: "https://github.com/matthias-goupil/projet-e-Commerce-IUT",
    images: [instagram1]

  },
  {
    name: "IHM du jeu \"Bang !\" en JavaFx",
    image: bangProject,
    content: <p>Test</p>,
    github: null,
    images: [instagram1]

  },
  {
    name: "Flappy Bird en Javascript",
    image: flappyBirdProject,
    content: <p>Ce projet consiste à la réalisation d'un Flappy Bird grâce à la balise canvas, qui permet de dessiner des formes en Javascript. <br />J'avais pour but, en réalisant celui-ci de me familiariser avec le Javascript que j'étais en train d'apprendre mais aussi, je voulais apprendre à réaliser des jeux en 2D.</p>,
    github: null,
    images: [instagram1]

  }
]

export default App;
