import { FC } from 'react';
import './Prosjekter.css';

interface Project {
  id: number;
  title: string;
  imageUrl: string;
  description: string;
  details: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Nøsted AS',
    imageUrl: './public/nosted.png',
    description: 'Dette var et skoleprosjekt i samarbeid med andre studenter. Gruppen skulle utarbeide og utvikle en løsning som ville effektvisere Nøsted AS sine nåverende prosesser. ',
    details: ['ASP .NET', 'C#', 'MariaDB', 'EF'],
  },
  {
    id: 2,
    title: 'NAV Hjelpemiddelsentral',
    imageUrl: './public/hjelpemiddel.png',
    description: 'Dette var et skoleprosjekt i samarbeid med andre studenter. Gruppen fikk oppgave om å effektivisere dagens prosess for hjelpemidler. Etter analysearbeidet ble en prototype for en hjelpemiddel-tracking app utarbeidet. ',
    details: ['Tjenestedesign', 'Figma', 'Brukertesting', 'Analyse'],
  },
  {
    id: 3,
    title: 'UU - Klepp kommune',
    imageUrl: './public/kleppkommune.png',
    description: 'Dette var et skoleprosjekt i samarbeid med andre studenter. Gruppen fikk i oppgave om å analysere og deretter forbedre nettsiden til Klepp kommune i henhold til universell utforming.',
    details: ['UU', 'Brukertesting', 'Figma', 'Analyse'],
  },
  {
    id: 4,
    title: 'Pokedeks',
    imageUrl: 'link-til-internship-bilde.jpg',
    description: 'Dette er et personlig prosjekt hvor jeg prøvde meg frem med React ved å lage en Pokedeks.',
    details: ['React', 'Vite', 'TypeScript'],
  },
];

const Prosjekter: FC = () => (
  <div className="project-page">
    <h2>Mine prosjekter</h2>
    <p>Her er det detaljer om både skoleprosjekt og selvstendige prosjekt jeg har jobbet med.</p>
    <div className="project-sections">
      {projects.map((project) => (
        <section key={project.id} className="project-section">
          <img src={project.imageUrl} alt={project.title} className="project-image" />
          <div className="project-content">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <ul>
              {project.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          </div>
        </section>
      ))}
    </div>
  </div>
);

export default Prosjekter;
