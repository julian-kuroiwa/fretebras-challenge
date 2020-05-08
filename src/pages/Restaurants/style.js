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
      ${mediaQueries('medium')`
        display: grid;
        grid-template-columns: 1fr 2fr;
        gap: 50px;
      `};
    }

    .error {
      text-align: center;
      font-size: 36px;
    }
  }
`;

export const Header = styled(HeaderComponent)`
  background-color: #000;
`;

export const Filter = styled.div`
  width: 100%;
  background: #fff;
  padding: 20px 10px;
  max-height: 200px;
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 20px;

  ${mediaQueries('medium')`
    max-height: 350px;
    display: block;
    padding: 20px;
  `};

  h5 {
    font-size: 16px;
    margin-bottom: 10px;
    color: #f74a3e;
  }

  > div {
    ${mediaQueries('medium')`
      margin-bottom: 20px;
  `};

    > div {
      max-height: 120px;
      overflow: scroll;
      padding: 10px 0;

      &:not(:last-child) {
        margin-bottom: 20px;
      }
    }
  }
`;

export const Results = styled.div`
  ${mediaQueries('small')`
    display: grid;
    gap: 20px;
    grid-template-columns: 1fr 1fr;
  `};
`;

export const Card = styled(CardComponent)`
  max-width: 100%;

  ${mediaQueries('medium')`
    & + div {
      margin: 0;
    }
  `};
`;

export const Loader = styled(LoaderComponent)`
  display: flex;
  align-items: center;
  justify-content: center;
`;
