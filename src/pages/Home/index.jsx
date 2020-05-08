import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';

import Header from '../../components/Header';
import Card from '../../components/Card';
import Wrapper from '../../components/Wrapper';
import Button from '../../components/Button';
import Footer from '../../components/Footer';

import { Hero, Info, Search, Popular, Autocomplete, Loader } from './style';
import api from '../../services/api';

import useDebounce from '../../hooks/useDebounce';

const Home = () => {
  const history = useHistory();
  const inputRef = useRef(null);

  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [citySelected, setCitySelected] = useState({});
  const [error, setError] = useState('');

  const popularPackage = [
    {
      id: '1',
      name: 'Package I',
      price: '$10.00',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, perferendis?',
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

  const debounceSearch = useDebounce(inputValue, 1000);

  useEffect(() => {
    if (debounceSearch) {
      setIsLoading(true);
      setError('');

      api
        .get(`/cities?q=${debounceSearch}`)
        .then((response) => {
          setIsLoading(false);

          if (!response.data.location_suggestions.length) {
            setError('No results found');

            return;
          }

          setResults(response.data.location_suggestions);
        })
        .catch((err) => {
          setIsLoading(false);
          setError('Error trying to find the city, please try again!');
        });

      return;
    }

    setResults([]);
  }, [debounceSearch]);

  const changeHandle = (event) => {
    setInputValue(event.target.value);
    setError('');
  };

  const clickOptionHandle = (id, name) => {
    setCitySelected({ id, name });
    setResults([]);
  };

  const submitHandle = (event) => {
    event.preventDefault();

    if (!citySelected.name && !citySelected.id) {
      setError('Search a city before proceed');

      return;
    }

    history.push(`/restaurants/${citySelected.name}/${citySelected.id}`);
  };

  return (
    <>
      <Header />
      <Hero>
        <Wrapper>
          <div className="content">
            <h1>Get cashback up to 50%</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti
              incidunt, quae suscipit eligendi voluptatum unde.
            </p>
            <Button type="button">Order Now</Button>
          </div>
        </Wrapper>
      </Hero>
      <Info>
        <Wrapper>
          <div className="content">
            <div>
              <h2>Big Burguer</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Deleniti incidunt, quae suscipit eligendi voluptatum unde.
              </p>
              <Button type="button">Order Now</Button>
            </div>
            <div className="round-image" />
          </div>
        </Wrapper>
      </Info>
      <Search>
        <Wrapper>
          <div className="content">
            <h2>Search the best burguers</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti
              incidunt, quae suscipit eligendi voluptatum unde.
            </p>
            <form onSubmit={submitHandle}>
              <Autocomplete error={!!error}>
                <div className="input-container">
                  <input
                    type="search"
                    placeholder="ex. São Paulo"
                    ref={inputRef}
                    onChange={changeHandle}
                  />
                  <i className="fas fa-map-marker-alt" />
                  {isLoading && <Loader />}
                </div>
                {error && <span>{error}</span>}
                {results.length > 0 && (
                  <div className="results-container">
                    {results.map((result) => (
                      <button
                        type="button"
                        key={result.id}
                        onClick={() =>
                          clickOptionHandle(result.id, result.name)
                        }
                      >
                        {result.name}
                      </button>
                    ))}
                  </div>
                )}
              </Autocomplete>
              <Button type="submit" isNegative>
                Search
              </Button>
            </form>
          </div>
        </Wrapper>
      </Search>
      <Popular>
        <Wrapper>
          <div className="content">
            <h2>Popular Package</h2>
            <div>
              {popularPackage.map((item) => (
                <Card key={item.id} item={item} />
              ))}
            </div>
          </div>
        </Wrapper>
      </Popular>
      <Footer />
    </>
  );
};

export default Home;
