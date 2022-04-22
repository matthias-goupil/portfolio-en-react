import React from 'react';
import logo from '../assets/logo.svg';
import '../styles/App.css'; 
import Header from "./Header"
import Section from './Section';
import WaveSection from './WaveSection';

function App() {
  return (
    <React.Fragment>
      <Header />
      <WaveSection title="Mes expériences">
        <p>coucou</p>
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
