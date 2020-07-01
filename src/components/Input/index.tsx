import React, {
  InputHTMLAttributes,
  useEffect,
  useRef,
  useState,
  useCallback,
} from 'react';
import { IconBaseProps } from 'react-icons';
import { useField } from '@unform/core';

import { Container, TextArea } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  isTextArea?: boolean;
  icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({
  name,
  isTextArea = false,
  icon: Icon,
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const textRef = useRef<HTMLTextAreaElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const { fieldName, defaultValue, error, registerField } = useField(name);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(
      isTextArea ? !!textRef.current?.value : !!inputRef.current?.value,
    );
  }, [isTextArea]);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <>
      {isTextArea ? (
        <TextArea
          ref={textRef}
          isFilled={isFilled}
          isFocused={isFocused}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          defaultValue={defaultValue}
          cols={55}
          rows={4}
        />
      ) : (
        <Container name={name} isFilled={isFilled} isFocused={isFocused}>
          {Icon && <Icon size={20} />}
          <input
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            defaultValue={defaultValue}
            ref={inputRef}
            {...rest}
          />
        </Container>
      )}
    </>
  );
};

export default Input;
