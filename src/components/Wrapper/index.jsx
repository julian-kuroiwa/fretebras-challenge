import React from 'react';

import { Container } from './style';

const Wrapper = ({ children, className }) => (
  <Container className={className}>{children}</Container>
);

export default Wrapper;
