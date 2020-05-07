import styled, { css } from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background-color: #f74a3e;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 250px;
  border-radius: 30px;
  text-transform: uppercase;
  font-weight: bold;
  color: #fff;
  font-size: 20px;
  height: 55px;
  border: 0;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${shade(0.2, '#f74a3e')};
  }

  ${(props) =>
    props.isNegative &&
    css`
      background-color: #f6efdf;
      color: #f74a3e;

      &:hover {
        background-color: ${shade(0.2, '#f6efdf')};
      }
    `}
`;
