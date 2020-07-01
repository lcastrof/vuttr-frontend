import styled, { css } from 'styled-components';

interface ContainerProps {
  name: string;
  isFilled: boolean;
  isFocused: boolean;
}

interface TextAreaProps {
  isFilled: boolean;
  isFocused: boolean;
}

export const TextArea = styled.textarea<TextAreaProps>`
  background: #ffff;
  border: 2px solid grey;
  border-radius: 5px;
  padding: 12px;
  color: #454545;

  font-size: 16px;
  font-family: 'Roboto', sans-serif;

  width: 100%;

  ${(props) =>
    props.name === 'search' &&
    css`
      border-right: 0;
      border-radius: 5px 0 0 5px;
    `}

  ${(props) =>
    props.isFocused &&
    css`
      border-color: #244aa8;
    `}
`;

export const Container = styled.div<ContainerProps>`
  background: #ffff;
  height: 40px;
  border: 2px solid grey;
  border-radius: 5px;
  padding: 12px;
  color: #454545;

  display: flex;
  align-items: center;

  ${(props) =>
    props.name === 'search' &&
    css`
      border-right: 0;
      border-radius: 5px 0 0 5px;
    `}

  ${(props) =>
    props.isFocused &&
    css`
      color: #244aa8;
      border-color: #244aa8;
    `}

  ${(props) =>
    props.isFilled &&
    css`
      color: #244aa8;
    `}

  input {
    flex: 1;
    border: 0;
    background: transparent;
    color: #454545;

    &::placeholder {
      color: #454545;
      opacity: 50%;
    }
  }

  > svg {
    margin-right: 10px;
  }
`;
