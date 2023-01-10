import { ReactNode } from 'react';
import { ButtonContainer } from './style';

interface ButtonProps {
  children: ReactNode;
  variant?: 'outline';
  color?: 'purple-600' | 'red-800' | 'gray-700';
  handleLogin?: () => void;
  handleLogout?: () => void;
}

export function Button({ children, variant, color, handleLogin, handleLogout }: ButtonProps) {
  return (
    <ButtonContainer
      variant={variant}
      color={color}
      onClick={handleLogin ? handleLogin : handleLogout}
    >
      {children}
    </ButtonContainer>
  );
}
