import cn from 'classnames';

import { Text } from '../Text';
import styles from './Button.module.css';
import { IconNamesMap, IconSizeMap, TextColorMap } from './helper';
import type { ButtonSize, ButtonVariant, IconName } from './types';

export interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: IconName;
}

export const Button = ({
  children,
  className,
  onClick,
  disabled,
  variant = 'primary',
  size = 'md',
  icon,
}: ButtonProps) => {
  const buttonClass = cn(
    styles.button,
    className,
    variant && styles[`buttonVariant_${variant}`],
    size && styles[`buttonSize_${size}`]
  );

  const Icon = icon ? IconNamesMap[icon] : null;

  return (
    <button className={buttonClass} onClick={onClick} disabled={disabled}>
      {Icon && <Icon width={IconSizeMap[size]} height={IconSizeMap[size]} />}
      <Text.Label size={size} color={TextColorMap[variant]}>
        {children}
      </Text.Label>
    </button>
  );
};
