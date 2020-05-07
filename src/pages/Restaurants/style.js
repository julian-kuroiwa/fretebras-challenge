import styled from 'styled-components';

import HeaderComponent from '../../components/Header';
import CardComponent from '../../components/Card';

export const Container = styled.div`
  .restaurants-content {
    background-color: #f5f1e5;
    padding: 60px 0;

    h1 {
      margin: 40px 0;
      color: #f74a3e;

      span {
        font-weight: 400;
      }
    }

    .results-content {
      display: grid;
      grid-template-columns: 1fr 2fr;
      gap: 50px;
    }
  }
`;

export const Header = styled(HeaderComponent)`
  background-color: #000;
`;

export const Filter = styled.div`
  width: 100%;
  height: 300px;
  background: #fff;
`;

export const Results = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`;

export const Card = styled(CardComponent)`
  max-width: 100%;

  & + div {
    margin: 0;
  }
`;
