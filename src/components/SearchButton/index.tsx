import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const SearchButton: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <Container type="submit" {...rest}>
      {children}
    </Container>
  );
};

export default SearchButton;
