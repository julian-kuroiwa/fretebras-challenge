import styled from 'styled-components';
import { mediaQueries } from '../../styles/media';

import HeaderComponent from '../../components/Header';
import LoaderComponent from '../../components/Loader';
import CardComponent from '../../components/Card';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  .restaurants-content {
    background-color: #f5f1e5;
    padding: 60px 0;
    flex: 1;

    h1 {
      margin: 40px 0;
      color: #f74a3e;

      span {
        font-weight: 400;
      }
    }

    .results-content {
      display: grid;
      grid-template-columns: 1fr;
      gap: 50px;

      ${mediaQueries('medium')`
        grid-template-columns: 1fr 2fr;
      `};
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
  grid-template-columns: 1fr;
  gap: 20px;

  ${mediaQueries('small')`
    grid-template-columns: 1fr 1fr;
  `};
`;

export const Card = styled(CardComponent)`
  max-width: 100%;
  margin: 0;

  & + div {
    margin: 0;
  }
`;

export const Loader = styled(LoaderComponent)`
  display: flex;
  align-items: center;
  justify-content: center;
`;
