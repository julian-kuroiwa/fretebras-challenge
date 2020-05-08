import React from 'react';

import Button from '../Button';

import { Container } from './style';

const Card = ({ item, className }) => (
  <Container className={className}>
    <h4>{item.name}</h4>
    <i className="fas fa-hamburger" />
    {item.price && <strong>{item.price}</strong>}
    {item.user_rating && item.user_rating.aggregate_rating ? (
      <div>
        {Array.from(
          Array(Math.ceil(item.user_rating.aggregate_rating)),
          (e, i) => (
            <i key={i} className="fa fa-star" aria-hidden="true" />
          ),
        )}
      </div>
    ) : (
      <div>
        <i className="fa fa-star none" aria-hidden="true" />
      </div>
    )}
    <p>
      {item.description ||
        (item.location && item.location.address && item.location.address)}
    </p>
    <Button type="button">Order Now</Button>
  </Container>
);

export default Card;
