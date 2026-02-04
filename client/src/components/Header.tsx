import { useNavigate } from 'react-router';

import Logo from '../assets/icons/logo.svg?react';
import { ROUTES } from '../constants';
import { ButtonSize, IconButton } from './Button';
import styles from './Header.module.css';
import { Progress } from './Progress';

export const Header = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate(ROUTES.APPLICATIONS);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo} onClick={handleHomeClick}>
        <Logo />
      </div>
      <Progress />
      <IconButton
        icon="home"
        size={ButtonSize.sm}
        onClick={handleHomeClick}
      />
    </header>
  );
};
