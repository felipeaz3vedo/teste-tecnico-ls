import styled from 'styled-components';

interface HeadingProps {
  size?: 'xs' | 's' | 'l';
  color?: 'gray-500' | 'gray-700' | 'gray-900';
  weight?: '500' | '700';
  lineHeight?: '130' | '150';
}

interface TextProps {
  size?: 'xs' | 's' | 'm';
  color?: 'gray-500' | 'gray-600' | 'gray-700' | 'gray-900' | 'purple-600';
  weight?: '400' | '500' | '700';
  lineHeight?: '110' | '150';
}

export const Heading = styled.h2<HeadingProps>`
  color: ${({ theme, color }) => theme.colors[`${color ?? 'gray-900'}`]};
  font-size: ${({ theme, size }) => theme.fontSizes[`${size ?? 'l'}`]};
  line-height: ${({ lineHeight }) => `${lineHeight ?? '150'}%`};
  font-weight: ${({ weight }) => weight ?? '700'};
`;

export const Text = styled.p<TextProps>`
  color: ${({ theme, color }) => theme.colors[`${color ?? 'gray-900'}`]};
  font-size: ${({ theme, size }) => theme.fontSizes[`${size ?? 's'}`]};
  line-height: ${({ lineHeight }) => `${lineHeight ?? '150'}%`};
  font-weight: ${({ weight }) => weight ?? '500'};
`;
