import { GoalBanner } from '../components/GoalBanner';
import { useCoverLetters } from '../providers';
import styles from './GeneratorPageLayout.module.css';

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
