import { useNavigate } from 'react-router';

import { APPLICATIONS_MAX_COUNT, ROUTES } from '../constants';
import { useCoverLetters } from '../providers';
import { Button } from './Button';
import { Text } from './Text';
import styles from './TopBar.module.css';

const buttonText = 'Create New';

export const TopBar = () => {
  const navigate = useNavigate();
  const letters = useCoverLetters();
  const count = letters.length;
  const isCompleted = count === APPLICATIONS_MAX_COUNT;

  const handleCreateNewClick = () => {
    if (isCompleted) {
      return;
    }
    navigate(ROUTES.GENERATE);
  };

  return (
    <div className={styles.topBar}>
      <div className={styles.title}>
        <Text.Heading level={1}>Applications</Text.Heading>
      </div>
      <div className={styles.actions}>
        <Button
          size="sm"
          icon="plus"
          onClick={handleCreateNewClick}
          disabled={isCompleted}
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
};
