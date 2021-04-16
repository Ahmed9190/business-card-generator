import React from 'react';
import Card from '../../components/card/card';
import Header from '../../components/header/header';
import { cardColors } from '../handle-card/handle-card-data';

import './cards-page.scss';

const CardsPage = () => {
  return (
    <div className="grid-container">
      <div className="card-page-header">
        <Header solid search />
      </div>
      <div className="card-page-contents">
        {Array.from({ length: 30 }).map((u, i) => (
          <Card
            cardData={{
              f_name: 'Ahmed',
              l_name: 'Waleed',
              position: 'General manager',
            }}
            color={cardColors[i % 11]}
          />
        ))}
      </div>
    </div>
  );
};

export default CardsPage;
