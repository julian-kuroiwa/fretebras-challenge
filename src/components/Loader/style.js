import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  &:after {
    content: ' ';
    display: block;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 6px solid #f74a3e;
    border-color: #f74a3e transparent #f74a3e transparent;
    animation: ${rotate} 1.2s linear infinite;
  }
`;
