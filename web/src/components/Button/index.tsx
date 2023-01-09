import { ReactNode } from 'react';
import { ButtonContainer } from './style';

interface ButtonProps {
  children: ReactNode;

  variant?: 'outline';
  color?: 'purple-600' | 'red-800' | 'gray-700';
}

export function Button({ children, variant, color }: ButtonProps) {
  return (
    <ButtonContainer variant={variant} color={color}>
      {children}
    </ButtonContainer>
  );
}
