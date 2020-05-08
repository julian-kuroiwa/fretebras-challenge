import React from 'react';

import { Container } from './style';

const Radio = ({ id, title, ...props }) => (
  <Container>
    <input id={id} value={id} type="radio" {...props} />
    <label htmlFor={id} className="radio-label">
      {title}
    </label>
  </Container>
);

export default Radio;
