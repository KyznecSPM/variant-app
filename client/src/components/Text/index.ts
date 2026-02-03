export type { BaseTextProps, HeadingLevel, TextColor, TextSize } from './types';

// Compound components pattern
import { Caption } from './Caption';
import { Heading } from './Heading';
import { Label } from './Label';

export const Text = {
  Heading,
  Label,
  Caption,
};
