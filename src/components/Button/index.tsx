import React, { ButtonHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';

import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ComponentType<IconBaseProps>;
  background: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  icon: Icon,
  background,
  ...rest
}) => {
  return (
    <Container type="button" background={background} {...rest}>
      {Icon && <Icon size={18} color="#fff" />}
      {children}
    </Container>
  );
};

export default Button;
