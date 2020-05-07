import React from 'react';

import { Container } from './style';

const Button = ({ children, isNegative, ...props }) => (
  <Container {...props} isNegative={isNegative}>
    {children}
  </Container>
);

Button.defaultProps = {
  isNegative: false,
};

export default Button;
