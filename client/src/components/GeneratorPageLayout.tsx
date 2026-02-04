import { useCoverLetters } from '../providers';
import styles from './GeneratorPageLayout.module.css';
import { GoalBanner } from './GoalBanner';

export const GeneratorPageLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { isCompleted, selectedLetterId } = useCoverLetters();
  const showBanner = !isCompleted && selectedLetterId;
  return (
    <div className={styles.container}>
      <div className={styles.layout}>{children}</div>
      {showBanner && <GoalBanner />}
    </div>
  );
};
