import styled from 'styled-components';

export const Container = styled.div`
  background: #ffff;
  border: 1px solid grey;
  border-right: 0;
  border-radius: 5px 0 0 5px;
  padding: 12px;
  color: #454545;

  display: flex;
  align-items: center;

  input {
    flex: 1;
    border: 0;
    background: transparent;

    &::placeholder {
      color: #454545;
    }
  }

  > svg {
    margin-right: 10px;
  }
`;
