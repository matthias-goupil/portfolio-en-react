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
            <h2 className='title'>?? propos de moi</h2>
            <p>
Je m'appelle Matthias, j'ai 19 ans et suis en deuxi??me ann??e de DUT informatique ?? l'IUT de Montpellier. Le d??veloppement web est actuellement le domaine qui me plait le plus dans l'informatique et je veux en faire mon m??tier. En ce moment, je suis stagiaire d??veloppeur web chez SMILE. Quand j'ai du temps libre, l'une des mes occupations est de d??couvrir et d'apprendre ?? utiliser de nouvelles technologies. 
            </p>
            <a target="_blank" href="https://matthiasgoupil.fr/documents/CV Matthias GOUPIL.pdf"> Mon CV<span></span><span></span><span></span><span></span></a>
          </div>
          <img target="_blank" alt="" src={photoProfil}></img>
        </section>
      <WaveSection title="Mes exp??riences" id="experiences">
        {experiences.map((experience) => {
          return <Experience key={experience.name} date={experience.date}><span>{experience.name}</span>{experience.place}</Experience>
        })}
      </WaveSection>
      <Section id="skills" title="Mes Comp??tences">
        {Object.keys(skills).map((category) =>{
          return <SkillCategory key={category} nom={category}>
          {skills[category].map((skill) => {
            return <Skill key={skill.name} nom={skill.name} image={skill.image} maitrise={skill.maitrise}></Skill>
          })}
        </SkillCategory>
        })}
      </Section>
      <Section id="projects" title="Projets r??alis??s">
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
            <Contact nom="T??l??phone" lien="https://github.com/matthias-goupil" valeur="06 28 48 99 93" icon={telephone} color="#00cc66"/>
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
    name: "Stage d??veloppeur web PHP",
    place: "SMILE Montpellier"
  },
  {
    date: "2022",
    name: "Participation ?? la nuit de l'info",
    place: "IUT Montpellier-S??te"
  },
  {
    date: "2020 - 2022",
    name: "DUT informatique",
    place: "IUT Montpellier-S??te"
  },
  {
    date: "2018 - 2020",
    name: "Bac STI2D Mention Tr??s Bien",
    place: "Lyc??e St Joseph Pierre Rouge"
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
        <p>Afin de m'entrainer ?? l'utilisation du framework Symfony, je me suis mis pour objectif de r??aliser un r??seau-social. <br />Pour cela, je me suis inspir?? de Instagram, un r??seau social permettant de partager des photos.</p>
        <p className='Pliste'>Fonctionnalit??s impl??ment??es :</p>
        <ul>
          <li>Authentification / inscription d'un utilisateur</li>
          <li>Gestion d'un profil utilisateur</li>
          <li>Option de modification / suprression d'un profil utilisateur</li>
          <li>option d'abonnement ?? un utilisateur</li>
          <li>Syst??me d'ajout de publication pour partager une photo et la commenter</li>
          <li>Option de like pour aimer une publication</li>
        </ul>

        <p className='Pliste'>Principales technologies utilis??es</p>
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
      <p>R??alisation de mon site portfolio avec la bibilioth??que Javascript Reactdans le but de m'entrainer.<br />Ce site sert principalement ?? me contacter et pr??senter mes exp??riences, mes comp??tences et mes projets.<br />Vous ??tes actuellement en train de l'utiliser.</p>
    </div>,
    github: "https://github.com/matthias-goupil/portfolio-en-react",
    images: []

  },
  {
    name: "Application web pour la Serre de l'IUT de Montpellier",
    image: serreProject,
    content: <p>Pour le projet tuteur?? du 3 semestre de mon DUT, avec mon groupe, nous avons r??alis?? une application web pour la serre connect??e de l???IUT.<br />
    En effet, le b??timent A de l???IUT abrite une serre connect??e et une grande grande partie du fonctionnement de cette serre est automatis??e (Filtration, arrosage des plantes, etc.. ). N??anmoins une supervision humaine ??tait requise pour un certain nombre de contr??les et d???actions.
    Exemple: Le niveau de l???eau est-il assez haut ? Si non faire un compl??ment ?<br />
    Seul un tout petit nombre de personnes r??alisaient ces t??ches. Et par manque d???outil de suivi, plusieurs personnes pouvaient passer chaque jour pour contr??ler (et se d??pla??aient pour rien si quelqu???un ??tait d??j?? pass??).
    <br />L???id??e de notre application web est donc de g??rer ces interventions de contr??le et ce de fa??on planifi??e.</p>,
    github: null,
    images: [instagram1]

  },
  {
    name: "Site e-commerce en PHP",
    image: eCommerceProject,
    content: <p>R??alis?? dans l'un des cours de mon DUT, ce projet de groupe avait pour but de concevoir un e-commerce (sans la partie paiement) afin de mieux se familiariser au langage PHP et au design pattern MVC.
    <br />Le c??t?? responsive du site et la partie paiement n'a donc pas ??t?? impl??ment??e. </p>,
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
    content: <p>Ce projet consiste ?? la r??alisation d'un Flappy Bird gr??ce ?? la balise canvas, qui permet de dessiner des formes en Javascript. <br />J'avais pour but, en r??alisant celui-ci de me familiariser avec le Javascript que j'??tais en train d'apprendre mais aussi, je voulais apprendre ?? r??aliser des jeux en 2D.</p>,
    github: null,
    images: [instagram1]

  }
]

export default App;
