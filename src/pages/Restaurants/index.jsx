import React, { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';

import api from '../../services/api';
import toQueryString from '../../helpers/toQueryString';

import Wrapper from '../../components/Wrapper';
import Pagination from '../../components/Pagination';
import Footer from '../../components/Footer';
import Radio from '../../components/Radio';

import { Container, Header, Filter, Results, Card, Loader } from './style';

const Restaurants = () => {
  const { params } = useRouteMatch();

  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [pages, setPages] = useState(null);
  const [perPage, setPerPage] = useState(null);
  const [startsAt, setStartsAt] = useState(null);
  const [total] = useState(80);
  const [queryString, setQueryString] = useState({});
  const [types, setTypes] = useState([]);

  const requestHandle = async (queryParams) => {
    setIsLoading(true);

    const response = await api.get(
      `/search?city_id=${params.id}&${toQueryString(queryParams)}`,
    );

    setIsLoading(false);
    setRestaurants(response.data.restaurants);
    setStartsAt(response.data.results_start);
    setPerPage(response.data.results_shown);
    setPages(total / response.data.results_shown);
  };

  useEffect(() => {
    requestHandle(queryString);

    api.get(`/cuisines?city_id=${params.id}`).then((response) => {
      setTypes(response.data.cuisines);
    });
  }, []);

  useEffect(() => {
    requestHandle(queryString);
  }, [queryString]);

  const paginateHandle = (page) => {
    setQueryString((prevState) => ({ ...prevState, start: page * perPage }));
  };

  return (
    <Container>
      <Header />
      <div className="restaurants-content">
        <Wrapper>
          <h1>
            Results for: <span>{params.cityName}</span>
          </h1>
          <div className="results-content">
            <Filter>
              {types.length > 0 && (
                <div>
                  <h5>Cuisines</h5>
                  <div>
                    {types.map((type) => (
                      <Radio
                        key={type.cuisine.cuisine_id}
                        id={type.cuisine.cuisine_id}
                        title={type.cuisine.cuisine_name}
                        name="types"
                        onChange={(event) =>
                          setQueryString((prevState) => ({
                            ...prevState,
                            cuisines: event.target.value,
                            start: 0,
                          }))
                        }
                      />
                    ))}
                  </div>
                </div>
              )}
              <div>
                <h5>Sort</h5>
                <div>
                  <Radio
                    id="cost"
                    title="cost"
                    name="sort"
                    onChange={(event) =>
                      setQueryString((prevState) => ({
                        ...prevState,
                        start: 0,
                        sort: event.target.value,
                      }))
                    }
                  />
                  <Radio
                    id="rating"
                    title="rating"
                    name="sort"
                    onChange={(event) =>
                      setQueryString((prevState) => ({
                        ...prevState,
                        start: 0,
                        sort: event.target.value,
                      }))
                    }
                  />
                </div>
              </div>
            </Filter>
            {isLoading ? (
              <Loader />
            ) : (
              <div className="results-wrapper">
                <Results>
                  {restaurants.map((result) => (
                    <Card key={result.restaurant.id} item={result.restaurant} />
                  ))}
                </Results>
                <Pagination
                  startsAt={startsAt}
                  perPage={perPage}
                  totalPages={pages}
                  paginate={paginateHandle}
                />
              </div>
            )}
          </div>
        </Wrapper>
      </div>
      <Footer />
    </Container>
  );
};

export default Restaurants;
