import React from 'react';

import { Container } from './style';

const Pagination = () => {
  return (
    <Container>
      <nav>
        <ul>
          <li>
            <a href="#">1</a>
          </li>
          <li>
            <a href="#">2</a>
          </li>
          <li>
            <a href="#">3</a>
          </li>
          <li>
            <a href="#">4</a>
          </li>
          <li>
            <a href="#">5</a>
          </li>
        </ul>
      </nav>
    </Container>
  );
};

export default Pagination;
