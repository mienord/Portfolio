// src/App.tsx
import { FC } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Prosjekter from './pages/prosjekter';
import Praksis from './pages/praksis';
import Internship from './pages/Internship';

interface SectionProps {
  title: string;
  content: string;
}

// Navigasjonsbaren
const Navbar:  FC = () => (
  <section className="about" id="about">
    <nav className="navbar">
      <ul>
        <li><a href="#about">Om meg</a></li>
        <li><a href="#projects">Prosjekter og erfaringer</a></li>
        <li><a href="#contact">Kontakt meg</a></li>
      </ul>
    </nav>
  </section>
);

// About Section Component
const About: FC<SectionProps> = ({ title, content }) => (
  <section className="about" id="about">
    <div className="about-content">
      <div className="about-image">
        <img src="./public/profilbilde.jpg" alt="Bilde av meg" />
      </div>
      <div className="about-text">
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    </div>
  </section>
);

// Projects Section Component
const Cards: FC = () => (
  <section className="projects" id="projects">
    <h2>Prosjekter og erfaringer</h2>
    <div className="project-list">
      <Link to="/prosjekter" className="project-link">
        <div className="project">
          <h3>Prosjekter</h3>
          <p>Trykk for å se både skole og personlig prosjekter jeg har jobbet med!</p>
        </div>
      </Link>
      <Link to="/praksis" className="project-link">
        <div className="project">
          <h3>Praksis</h3>
          <p>Trykk her for å lese mer om min praksis hos Phonero.</p>
        </div>
      </Link>
      <Link to="/internship" className="project-link">
        <div className="project">
          <h3>Internship</h3>
          <p>Trykk her for å lese mer om mitt sommer internship hos Sparebank 1 Forsikring!</p>
        </div>
      </Link>
    </div>
  </section>
);

// About Section Component
const Contact:  FC = () => (
  <section className="contact" id="contact">
      <h2>Kontakt meg</h2>
      <p> Kontakt meg gjerne via mail eller LinkdIn!</p>
      <a href="mailto:maxine2003@hotmail.com">
      <img src="/mail.png" alt="Send e-post" style={{ width: '80px', height: '80px', marginRight: '10px' }} />
    </a>
      <a href="https://www.linkedin.com/in/mie-maxine-mjølstad-nord-9a971925b/" target="_blank" rel="noopener noreferrer">
      <img src="/linkedin.webp" alt="LinkedIn-profil" style={{ width: '80px', height: '80px' }} />
    </a>
  </section>
);

// Main App Component
const App: FC = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={
              <><>
              <Navbar />
                <About
                  title="Om meg"
                  content="Mitt navn er Mie Maxine Nord. Jeg er 20 år gammel og studerer for tiden IT og informasjonssystemer." />
                <Cards />
              </>
              <Contact />
              </>
            }
          />
          <Route path="/prosjekter" element={<Prosjekter />} />
          <Route path="/praksis" element={<Praksis />} />
          <Route path="/internship" element={<Internship />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
