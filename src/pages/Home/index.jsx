import React from 'react';

import Header from '../../components/Header';
import Card from '../../components/Card';
import Wrapper from '../../components/Wrapper';
import Button from '../../components/Button';
import Footer from '../../components/Footer';

import { Hero, Info, Search, Popular } from './style';

const Home = () => {
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
            <form>
              <div>
                <input type="search" placeholder="ex. São Paulo" />
                <i className="fas fa-map-marker-alt" />
              </div>
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
