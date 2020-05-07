import styled from 'styled-components';
import { mediaQueries } from '../../styles/media';

export const Container = styled.div`
  background-color: #fff;
  padding: 20px;
  text-align: center;
  color: #f74a3e;
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  ${mediaQueries('medium')`
    max-width: 300px;
    margin-bottom: 0;

    & + div {
      margin-left: 50px;
    }
  `};

  h4 {
    margin-bottom: 20px;
    font-size: 20px;
    text-transform: uppercase;
  }

  > i {
    font-size: 100px;
    margin-bottom: 20px;
    display: block;
  }

  strong {
    margin-bottom: 10px;
    font-size: 20px;
    display: block;
  }

  p {
    margin-bottom: 20px;
  }
`;
