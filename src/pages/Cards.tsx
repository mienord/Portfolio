import { FC } from 'react';
import { useParams } from 'react-router-dom';

const CardPage: FC = () => {
  const { cardId } = useParams<{ cardId: string }>();

  return (
    <div className="project-page">
      <h2>{cardId}</h2>
      <p>Her kan du se detaljer om prosjektet: {cardId}.</p>
    </div>
  );
};

export default CardPage;
