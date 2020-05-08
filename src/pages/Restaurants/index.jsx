import React, { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';

import api from '../../services/api';

import Wrapper from '../../components/Wrapper';
import Footer from '../../components/Footer';

import { Container, Header, Filter, Results, Card, Loader } from './style';

const Restaurants = () => {
  const { params } = useRouteMatch();
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [perPage, setPerPage] = useState(null);
  const [total, setTotal] = useState(null);
  const [pageNumber, setPageNumber] = useState([]);

  useEffect(() => {
    setIsLoading(true);

    api.get(`/search?city_id=${params.id}`).then((response) => {
      setRestaurants(response.data.restaurants);
      setPerPage(response.data.results_shown);
      setTotal(response.data.results_found);
      setIsLoading(false);
    });
  }, []);

  return (
    <Container>
      <Header />
      <div className="restaurants-content">
        <Wrapper>
          <h1>
            Results for: <span>{params.cityName}</span>
          </h1>
          <div className="results-content">
            <Filter />
            {isLoading ? (
              <Loader />
            ) : (
              <Results>
                {restaurants.map((result) => (
                  <Card key={result.restaurant.id} item={result.restaurant} />
                ))}
              </Results>
            )}
          </div>
        </Wrapper>
      </div>
      <Footer />
    </Container>
  );
};

export default Restaurants;
