import cn from 'classnames';

import { TextColor } from './constants';
import styles from './Text.module.css';
import type { BaseTextProps } from './types';

export const Caption = ({
  children,
  className,
  color = TextColor.caption,
}: BaseTextProps) => {
  const captionClass = cn(
    styles.caption,
    className,
    color && styles[`textColor_${color}`]
  );

  return <span className={captionClass}>{children}</span>;
};

Caption.displayName = 'Text.Caption';
