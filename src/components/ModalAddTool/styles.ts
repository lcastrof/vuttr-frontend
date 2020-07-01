import styled from 'styled-components';
import { Form as Unform } from '@unform/web';

export const Form = styled(Unform)`
  padding: 20px;

  display: flex;
  flex-direction: column;

  header {
    display: flex;
    align-items: center;
    margin-bottom: 42px;

    > svg {
      color: #12db89;
    }

    h1 {
      font-size: 24px;
      color: #12db89;
    }
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

export const Section = styled.div`
  margin-bottom: 32px;

  h2 {
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 10px;
  }
`;
