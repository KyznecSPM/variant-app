import { ButtonSize, IconNamesMap, IconSizeMap } from './helper';
import styles from './IconButton.module.css';
import type { ButtonSize as ButtonSizeType, IconName } from './types';

export interface Props {
  icon: IconName;
  size?: ButtonSizeType;
  onClick?: () => void;
}

export const IconButton = ({ icon, size = ButtonSize.md, onClick }: Props) => {
  const Icon = icon ? IconNamesMap[icon] : null;

  return (
    <button className={styles.iconButton} onClick={onClick}>
      {Icon && <Icon width={IconSizeMap[size]} height={IconSizeMap[size]} />}
    </button>
  );
};
