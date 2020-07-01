import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  header {
    display: flex;
    align-items: center;
    margin-bottom: 20px;

    > svg {
      color: #ee424d;
    }

    h1 {
      font-size: 24px;
      color: #ee424d;
    }
  }

  p {
    font-size: 18px;
    margin-bottom: 20px;
  }

  div#buttons {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    button + button {
      margin-left: 10px;
    }
  }
`;
