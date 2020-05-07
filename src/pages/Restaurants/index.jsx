import React from 'react';
import { useRouteMatch } from 'react-router-dom';

import Wrapper from '../../components/Wrapper';
import Footer from '../../components/Footer';

import { Container, Header, Filter, Results, Card } from './style';

const Restaurants = () => {
  const { params } = useRouteMatch();

  const results = [
    {
      id: '1',
      name: 'Package I',
      location: {
        address: 'Prešernova 4, Staré Mesto, Bratislava I',
      },
      user_rating: {
        aggregate_rating: '4.7',
      },
    },
    {
      id: '2',
      name: 'Package II',
      price: '$20.00',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, perferendis?',
    },
    {
      id: '3',
      name: 'Package III',
      price: '$30.00',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, perferendis?',
    },
  ];

  return (
    <Container>
      <Header />
      <div className="restaurants-content">
        <Wrapper>
          <h1>
            Results for: <span>São Paulo - SP</span>
          </h1>
          <div className="results-content">
            <Filter />
            <Results>
              {results.map((result) => (
                <Card key={result.name} item={result} />
              ))}
            </Results>
          </div>
        </Wrapper>
      </div>
      <Footer />
    </Container>
  );
};

export default Restaurants;
