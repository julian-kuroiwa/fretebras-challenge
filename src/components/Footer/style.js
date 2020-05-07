import styled from 'styled-components';
import { shade } from 'polished';
import { mediaQueries } from '../../styles/media';

export const Container = styled.footer`
  background-color: #222222;
  padding: 50px 0;

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;

    ${mediaQueries('small')`
      flex-direction: row;
    `};

    h5 {
      font-size: 18px;
      color: #fff;
      margin-bottom: 20px;
    }

    p {
      font-size: 16px;
      color: #fff;
      margin-bottom: 20px;
    }

    .social-media {
      list-style: none;
      display: flex;

      a {
        background-color: #fff;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 25px;
        border-radius: 50%;
        margin-right: 10px;
        text-decoration: none;

        &:hover {
          background-color: ${shade(0.2, '#fff')};
        }

        > i {
          color: #222;
        }
      }
    }

    .about {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;

      ${mediaQueries('small')`
        display: block;
        align-items: initial;
        text-align: left;
        max-width: 33%;
        width: 100%;
      `};
    }

    .navigation {
      display: none;
      justify-content: flex-end;
      max-width: 60%;
      margin-left: auto;
      width: 100%;

      ${mediaQueries('small')`
        display: flex;
      `};

      nav {
        & + nav {
          margin-left: 50px;
        }

        > ul {
          list-style: none;

          li {
            margin-bottom: 10px;

            > a {
              color: #fff;
              text-decoration: none;

              &:hover {
                color: ${shade(0.2, '#fff')};
              }
            }
          }
        }
      }
    }
  }
`;
