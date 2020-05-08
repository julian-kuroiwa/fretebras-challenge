import styled, { css } from 'styled-components';
import { shade } from 'polished';

import { mediaQueries } from '../../styles/media';

import LoaderComponent from '../../components/Loader';

import BurguerBg from '../../assets/burguer-background.jpg';
import BurguerImg from '../../assets/burguer.jpg';

export const Hero = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 600px;
  background: url(${BurguerBg}) no-repeat left center;
  background-size: cover;
  box-shadow: inset 0px 120px 140px #000000;

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 550px;

    ${mediaQueries('small')`
        display: block;
        flex-direction: initial;
        justify-content: initial;
        align-items: initial;
      `};

    h1 {
      font-size: 32px;
      color: #fff;
      line-height: 36px;
      margin-bottom: 40px;
      text-align: center;

      ${mediaQueries('small')`
        font-size: 60px;
        line-height: 60px;
        text-align: left;
      `};
    }

    p {
      font-size: 18px;
      color: #fff;
      line-height: 25px;
      margin-bottom: 40px;
      text-align: center;

      ${mediaQueries('small')`
        font-size: 24px;
        line-height: 36px;
        text-align: left;
      `};
    }
  }
`;

export const Info = styled.section`
  display: flex;
  align-items: center;
  min-height: 600px;
  background-color: #f6efdf;
  padding: 50px 0;

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;

    ${mediaQueries('small')`
      flex-direction: row;
      justify-content: space-between;
    `};

    > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-bottom: 50px;

      ${mediaQueries('small')`
        max-width: 50%;
        display: block;
        flex-direction: row;
        align-items: initial;
        justify-content: initial;
        margin-bottom: 0;
      `};

      h2 {
        font-size: 28px;
        color: #f74a3e;
        line-height: 36px;
        margin-bottom: 40px;
        text-align: center;

        ${mediaQueries('small')`
          font-size: 60px;
          line-height: 60px;
          text-align: left;
        `};
      }

      p {
        font-size: 18px;
        color: #f74a3e;
        line-height: 25px;
        margin-bottom: 40px;
        text-align: center;

        ${mediaQueries('small')`
        font-size: 24px;
        line-height: 36px;
        text-align: left;
      `};
      }
    }

    .round-image {
      background: url(${BurguerImg}) no-repeat 59% 20%;
      background-size: 210%;
      width: 300px;
      height: 300px;
      border-radius: 50%;

      ${mediaQueries('small')`
        width: 400px;
        height: 400px;
      `};
    }
  }
`;

export const Search = styled.section`
  display: flex;
  align-items: center;
  min-height: 600px;
  background-color: #f74a3e;

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 650px;
    width: 100%;
    margin: 0 auto;

    h2 {
      font-size: 28px;
      color: #fff;
      line-height: 36px;
      margin-bottom: 40px;
      text-align: center;

      ${mediaQueries('small')`
          font-size: 40px;
          line-height: 40px;
        `};
    }

    p {
      font-size: 18px;
      color: #fff;
      line-height: 25px;
      margin-bottom: 100px;
      text-align: center;

      ${mediaQueries('small')`
        font-size: 24px;
        line-height: 36px;
      `};
    }

    form {
      width: 100%;
      display: flex;
      align-items: center;
      flex-direction: column;
    }
  }
`;

export const Popular = styled.section`
  display: flex;
  align-items: center;
  min-height: 600px;
  background-color: #f6efdf;
  padding: 50px 0;

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 0 auto;

    h2 {
      font-size: 28px;
      color: #f74a3e;
      line-height: 36px;
      margin-bottom: 80px;
      text-align: center;

      ${mediaQueries('small')`
          font-size: 40px;
          line-height: 40px;
      `};
    }

    > div {
      : none;
      flex-direction: column;
      display: flex;
      justify-content: space-between;

      ${mediaQueries('medium')`
        flex-direction: row;
      `};
    }
  }
`;

export const Autocomplete = styled.div`
  width: 100%;
  margin-bottom: 40px;
  position: relative;

  .input-container {
    width: 100%;
    position: relative;

    input {
      width: 100%;
      border: 2px solid #fff;
      border-radius: 50px;
      height: 70px;
      padding: 0 20px 0 70px;

      ${(props) =>
        props.error &&
        css`
          border-color: ${shade(0.2, '#ff0090')};
        `}
    }

    i {
      position: absolute;
      color: #f74a3e;
      top: 50%;
      left: 20px;
      font-size: 35px;
      transform: translateY(-50%);
    }
  }

  .results-container {
    background-color: #fff;
    : none;
    max-width: 80%;
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translate(-50%, 5px);
    width: 100%;
    max-height: 200px;
    overflow: scroll;

    > button {
      padding: 20px;
      border: 0;
      display: block;
      width: 100%;
      text-align: left;
      text-transform: uppercase;

      &:hover {
        background-color: ${shade(0.2, '#fff')};
      }
    }
  }

  > span {
    display: block;
    width: 100%;
    margin-top: 5px;
    text-align: center;
    color: #fff;
    font-weight: bold;
    position: absolute;
    top: 100%;
    left: 0;
  }
`;

export const Loader = styled(LoaderComponent)`
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  background: #fff;
`;
