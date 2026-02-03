import cn from 'classnames';

import { TextColor } from './constants';
import styles from './Text.module.css';
import type { BaseTextProps } from './types';

export interface LabelProps extends BaseTextProps {
  size?: 'sm' | 'md' | 'lg';
}

export const Label = ({
  children,
  className,
  color = TextColor.primary,
  size = 'md',
}: LabelProps) => {
  const labelClass = cn(
    styles.label,
    className,
    color && styles[`textColor_${color}`],
    size && styles[`labelSize_${size}`]
  );

  return <span className={labelClass}>{children}</span>;
};

Label.displayName = 'Text.Label';
