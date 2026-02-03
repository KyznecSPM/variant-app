import Logo from '../assets/icons/logo.svg?react';
import { ButtonSize, IconButton } from './Button';
import styles from './Header.module.css';
import { Progress } from './Progress';

export const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <div className={styles.container}>
        <Progress />
        <IconButton icon="home" size={ButtonSize.sm} />
      </div>
    </header>
  );
};
