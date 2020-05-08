import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 40px;

  ul {
    :none ;
    display: flex;
    justify-content: center;

    > li {
      & + li {
        margin-left: 20px;
      }

      button {
        height: 40px;
        width: 40px;
        border-radius: 50%;
        border: 0;
        background: transparent;
        color: #c53b31;

        &.active {
          background: #c53b31;
          color: #fff;
        }
      }
    }
  }
`;
