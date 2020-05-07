import styled, { css } from 'styled-components';

import Wrapper from '../Wrapper';

export const Container = styled.header`
  display: flex;
  align-items: center;
  height: 60px;
  width: 100%;
  transition: background-color 0.2s;

  ${(props) =>
    props.isScrolled &&
    css`
      background-color: #000;
      position: fixed;
      top: 0;
      left: 0;
    `}

  ul {
    list-style: none;
    display: flex;

    li {
      text-transform: uppercase;

      &:not(:last-child) {
        margin-right: 50px;
      }

      a {
        color: #fff;
        text-decoration: none;
        font-weight: bold;
      }
    }
  }
`;

export const WrapperStyled = styled(Wrapper)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > a {
    i {
      color: #fff;
      font-size: 40px;
    }
  }
`;
