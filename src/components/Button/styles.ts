import styled from 'styled-components';
import { shade } from 'polished';

interface ContainerProps {
  background: string;
}

function darkenBackgroundColor(background: string): string {
  return shade(0.2, background);
}

export const Container = styled.button<ContainerProps>`
  background: ${(props) => props.background};
  border-radius: 10px;
  border: 0;

  box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.25);

  height: 30px;
  padding: 5px 10px;
  color: #fff;
  transition: background-color 0.2s;

  display: flex;
  align-items: center;

  &:hover {
    background: ${(props) => darkenBackgroundColor(props.background)};
  }

  > svg {
    margin-right: 5px;
  }
`;
