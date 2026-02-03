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
  const letters = useCoverLetters();
  const count = letters.length;
  return (
    <div className={styles.goalBanner}>
      <div className={styles.content}>
        <Text.Heading level={2} className={styles.title}>
          {title}
        </Text.Heading>
        <Text.Caption>{caption}</Text.Caption>
        <Button size={ButtonSize.lg} icon="plus">
          {buttonText}
        </Button>
      </div>
      <Stepper count={count} />
    </div>
  );
};
