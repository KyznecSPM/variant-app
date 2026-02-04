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
  iconPosition?: 'left' | 'right';
  type?: 'button' | 'submit' | 'reset';
}

export const Button = ({
  children,
  className,
  onClick,
  disabled,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'left',
  type = 'button',
}: ButtonProps) => {
  const buttonClass = cn(
    styles.button,
    className,
    variant && styles[`buttonVariant_${variant}`],
    size && styles[`buttonSize_${size}`]
  );

  const Icon = icon ? IconNamesMap[icon] : null;
  const iconClass = icon === 'loading' ? styles.loading : undefined;

  return (
    <button
      type={type}
      className={buttonClass}
      onClick={onClick}
      disabled={disabled}
    >
      {Icon && iconPosition === 'left' && (
        <Icon
          width={IconSizeMap[size]}
          height={IconSizeMap[size]}
          className={iconClass}
        />
      )}
      <Text.Label size={size} color={TextColorMap[variant]}>
        {children}
      </Text.Label>
      {Icon && iconPosition === 'right' && (
        <Icon
          width={IconSizeMap[size]}
          height={IconSizeMap[size]}
          className={iconClass}
        />
      )}
    </button>
  );
};
