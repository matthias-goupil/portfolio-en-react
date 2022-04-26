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
// import github from "../assets/Github.svg"

// IMPORT PROJECT IMAGES
import project1 from "../assets/projects/serre.jpg"

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
        <SkillCategory nom="Test">
          <Skill nom="test" image={htmlEtCssSkill}></Skill>
        </SkillCategory>
        <SkillCategory nom="Test">
          <Skill nom="test" image="test"></Skill>
          <Skill nom="test" image="test"></Skill>
          <Skill nom="test" image="test"></Skill>
          <Skill nom="test" image="test"></Skill>
          <Skill nom="test" image="test"></Skill>

        </SkillCategory>
      </Section>
      <Section id="projects" title="Projets réalisés">
        <div>
          <Project nom="test" image={project1}>
          <div className='contexte'>
              <h3>Contexte</h3>
              <p>Pour eerer</p>
          </div>
          </Project>

        <Project nom="test" image="test">
          <div className='contexte'>
              <h3>Contexte</h3>
              <p>Pour eerer</p>
          </div>
        </Project>
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

export default App;
