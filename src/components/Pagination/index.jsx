import React, { useState } from 'react';

import { Container } from './style';

const Pagination = ({ totalPages, paginate, startsAt, perPage }) => {
  const [pageActive, setPageActive] = useState(startsAt / perPage);

  const clickHandle = (index) => {
    setPageActive(index);
    paginate(index);
  };

  return (
    <Container>
      <nav>
        <ul>
          {perPage >= 20 &&
            Array.from(Array(totalPages), (e, i) => (
              <li key={i}>
                <button
                  className={pageActive === i ? 'active' : ''}
                  type="button"
                  onClick={() => clickHandle(i)}
                >
                  {i + 1}
                </button>
              </li>
            ))}
        </ul>
      </nav>
    </Container>
  );
};

export default Pagination;
