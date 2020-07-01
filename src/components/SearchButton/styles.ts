import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: #244aa8;
  height: 40px;
  border-radius: 0 5px 5px 0;
  border: 0;
  padding: 0 16px;
  color: #fff;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#244aa8')};
  }
`;
