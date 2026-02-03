import CopyIcon from '../../assets/icons/copy.svg?react';
import HomeIcon from '../../assets/icons/home.svg?react';
import PlusIcon from '../../assets/icons/plus.svg?react';
import TrashIcon from '../../assets/icons/trash.svg?react';
import { TextColor } from '../Text/constants';

export const ButtonVariant = {
  primary: 'primary',
  secondary: 'secondary',
  ghost: 'ghost',
} as const;

export const ButtonSize = {
  sm: 'sm',
  md: 'md',
  lg: 'lg',
} as const;

export type ButtonSize = (typeof ButtonSize)[keyof typeof ButtonSize];
export type ButtonVariant = (typeof ButtonVariant)[keyof typeof ButtonVariant];

export const TextColorMap = {
  [ButtonVariant.primary]: TextColor.white,
  [ButtonVariant.secondary]: TextColor.primary,
  [ButtonVariant.ghost]: TextColor.counter,
} as const;

export const IconSizeMap = {
  [ButtonSize.sm]: 20,
  [ButtonSize.md]: 22,
  [ButtonSize.lg]: 24,
} as const;

export const IconNamesMap = {
  plus: PlusIcon,
  home: HomeIcon,
  copy: CopyIcon,
  trash: TrashIcon,
} as const;

export const IconNames = Object.keys(
  IconNamesMap
) as (keyof typeof IconNamesMap)[];
