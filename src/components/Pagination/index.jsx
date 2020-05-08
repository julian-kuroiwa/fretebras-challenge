import React from 'react';

import { Container } from './style';

const Pagination = ({ totalPages, paginate, startsAt, perPage }) => {
  const active = startsAt / perPage;

  const clickHandle = (index) => {
    paginate(index);
  };

  return (
    <Container>
      <nav>
        <ul>
          {perPage >= 20 &&
            Array.from(Array(totalPages), (e, i) => {
              return (
                <li key={i}>
                  <button
                    className={active === i ? 'active' : ''}
                    type="button"
                    onClick={() => clickHandle(i)}
                  >
                    {i + 1}
                  </button>
                </li>
              );
            })}
        </ul>
      </nav>
    </Container>
  );
};

export default Pagination;
