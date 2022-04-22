import React from 'react';
import '../styles/App.css'; 
import Experience from './Experience';
import Header from "./Header"
import Section from './Section';
import WaveSection from './WaveSection';

function App() {
  return (
    <React.Fragment>
      <Header />
      <WaveSection title="Mes expériences" id="experiences">
        <Experience date="2020-2021">Bac STI2D Mention Très Bien <br />Lycée St Joseph Pierre Rouge</Experience>
        <Experience date="2020-2021">Dut informatique <br />IUT Montpellier-Sète</Experience>
        <Experience date="2020-2021">Participation à la nuit de l'info <br />IUT Montpellier-Sète</Experience>
        <Experience date="2020-2021">Stage Développeur web PHP <br />chez SMILE</Experience>

      </WaveSection>
      <Section title="Mes Compétences">

      </Section>
      <Section title="Projets réalisés">

      </Section>
      <WaveSection className="noBottom" title="Contactez moi">
        <p>coucou</p>
      </WaveSection>
    </React.Fragment>
  );
}

export default App;
