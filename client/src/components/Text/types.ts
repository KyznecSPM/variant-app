import { TextColor } from './constants';

export type TextColor = (typeof TextColor)[keyof typeof TextColor];

export type TextSize = 'md';
// export type TextSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type HeadingLevel = 1 | 2;

export interface BaseTextProps {
  children: React.ReactNode;
  className?: string;
  color?: TextColor;
}
