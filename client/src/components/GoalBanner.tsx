import { useNavigate } from 'react-router';

import { APPLICATIONS_MAX_COUNT, ROUTES } from '../constants';
import { useCoverLetters } from '../providers';
import { Button, ButtonSize } from './Button';
import styles from './GoalBanner.module.css';
import { Stepper } from './Stepper';
import { Text } from './Text';

const title = 'Hit your goal';
const caption =
  'Generate and send out couple more job applications today to get hired faster ';
const buttonText = 'Create New';

export const GoalBanner = () => {
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
    <div className={styles.goalBanner}>
      <div className={styles.content}>
        <Text.Heading level={2} className={styles.title}>
          {title}
        </Text.Heading>
        <Text.Caption>{caption}</Text.Caption>
        <Button
          size={ButtonSize.lg}
          icon="plus"
          onClick={handleCreateNewClick}
          disabled={isCompleted}
        >
          {buttonText}
        </Button>
      </div>
      <Stepper count={count} />
    </div>
  );
};
