import { FC } from 'react';
import './Praksis.css';

const Internship: FC = () => (
  <div className="praksis-page">
    <h2>Internship</h2>
    <div className="praksis-box">
      <img src="./public/sparebank1.png" alt="internship" className="praksis-image" />
      <div className="praksis-content">
        <p>Sommeren 2024 hadde jeg et Summer Internship i Sparebank 1 Forsikring hvor jeg jobbet som frontend utvikler! Jeg fikk blandt annet delta på møter og leverte kode ut i produksjon. I løpet av disse 7 ukene i Oslo lærte jeg utrolig mye og fikk jobbe med spennende teknologier som:</p>
        <ul>
          <li>React</li>
          <li>TypeScript</li>
          <li>JavaScript</li>
          <li>Java</li>
          <li>Verktøy og prosesser: Vite, Yarn, Jira </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Internship;
