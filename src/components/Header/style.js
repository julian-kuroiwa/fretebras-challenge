import styled, { css } from 'styled-components';
import { mediaQueries } from '../../styles/media';

import Wrapper from '../Wrapper';

export const Container = styled.header`
  display: flex;
  align-items: center;
  height: 60px;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transition: background-color 0.2s;
  z-index: 10;

  ${(props) =>
    props.isScrolled &&
    css`
      background-color: #000;
      position: fixed;
    `}

  nav {
    min-height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    padding: 20px;
    background: #000;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transform: translateX(-120%);
    transition: transform 0.5s;

    ${(props) =>
      props.isOpen &&
      css`
        transform: translateX(0);
      `}

    ${mediaQueries('small')`
        display: block;
        position: initial;
        padding: 0;
        min-height: auto;
        background: transparent;
        width: auto;
        transform: translateX(0);
      `};

    ul {
      list-style: none;

      ${mediaQueries('small')`
        display: flex;
      `};

      li {
        text-transform: uppercase;
        text-align: center;
        font-size: 32px;

        &:not(:last-child) {
          margin-bottom: 50px;

          ${mediaQueries('small')`
            margin-right: 40px;
            margin-bottom: 0;
          `};
        }

        ${mediaQueries('small')`
          font-size: initial;
          text-align: left;
        `};

        a {
          color: #fff;
          text-decoration: none;
          font-weight: bold;
        }
      }
    }

    button {
      position: absolute;
      top: 10px;
      right: 20px;
    }
  }

  button {
    ${mediaQueries('small')`
      display: none;
    `};

    > i {
      color: #fff;
      font-size: 40px;
    }
  }
`;

export const WrapperStyled = styled(Wrapper)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > a {
    > i {
      color: #fff;
      font-size: 40px;
    }
  }
`;
