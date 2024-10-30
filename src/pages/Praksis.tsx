import { FC } from 'react';
import './Praksis.css';

const Praksis: FC = () => (
  <div className="praksis-page">
    <h2>Praksis</h2>
    <div className="praksis-box">
      <img src="./public/phonero.webp" alt="Praksis" className="praksis-image" />
      <div className="praksis-content">
        <p>Gjennom UiA er jeg i praksis hos bedriften Phonero. I denne praksisen jobber jeg på Bot-teamet deres med å forbedre chattbotten "Phonelia". Arbeide består av:</p>
        <ul>
          <li>Analyse</li>
          <li>Ultimate.ai</li>
          <li></li>
        </ul>
      </div>
    </div>
  </div>
);

export default Praksis;
