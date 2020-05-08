import styled from 'styled-components';

export const Container = styled.div`
  &:not(:last-child) {
    margin-bottom: 10px;
  }

  input[type='radio'] {
    position: absolute;
    opacity: 0;

    & + .radio-label:before {
      content: '';
      background: #f4f4f4;
      border: 1px solid #b4b4b4;
      border-radius: 4px;
      display: inline-block;
      width: 20px;
      height: 20px;
      position: relative;
      top: -3px;
      margin-right: 10px;
      vertical-align: top;
      cursor: pointer;
      text-align: center;
      -webkit-transition: all 0.25s ease;
      transition: all 0.25s ease;
    }

    &:checked + .radio-label:before {
      background-color: #b4b4b4;
      box-shadow: inset 0 0 0 4px #f4f4f4;
    }
    &:focus + .radio-label:before {
      outline: none;
      border-color: #b4b4b4;
    }
    &:disabled + .radio-label:before {
      box-shadow: inset 0 0 0 4px #f4f4f4;
      border-color: #b4b4b4;
      background: #b4b4b4;
    }
    & + .radio-label:empty:before {
      margin-right: 0;
    }
  }
`;
