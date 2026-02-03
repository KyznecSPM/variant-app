import { ButtonSize, IconNamesMap, IconSizeMap } from './helper';
import styles from './IconButton.module.css';
import type { ButtonSize as ButtonSizeType, IconName } from './types';

export interface Props {
  icon: IconName;
  size?: ButtonSizeType;
}

export const IconButton = ({ icon, size = ButtonSize.md }: Props) => {
  const Icon = icon ? IconNamesMap[icon] : null;

  return (
    <button className={styles.iconButton}>
      {Icon && <Icon width={IconSizeMap[size]} height={IconSizeMap[size]} />}
    </button>
  );
};
