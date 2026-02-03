import cn from 'classnames';

import { TextColor } from './constants';
import styles from './Text.module.css';
import type { BaseTextProps, HeadingLevel } from './types';
export interface HeadingProps extends BaseTextProps {
  level?: HeadingLevel;
}

export const Heading = ({
  children,
  level = 1,
  className,
  color = TextColor.primary,
}: HeadingProps) => {
  const Tag = `h${level}` as const;

  const headingClass = cn(
    styles.text,
    styles.heading,
    styles[`headingLevel_${level}` as keyof typeof styles],
    color && styles[`textColor_${color}`],
    className
  );

  return <Tag className={headingClass}>{children}</Tag>;
};

Heading.displayName = 'Text.Heading';
