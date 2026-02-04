import { useCoverLetters } from '../providers';
import styles from './ApplicationsList.module.css';
import { CoverLetterCard } from './CoverLetterCard';

export const ApplicationsList = () => {
  const { letters } = useCoverLetters();

  if (letters.length === 0) {
    return null;
  }

  return (
    <div className={styles.applicationsList}>
      {letters.map((coverLetter) => (
        <CoverLetterCard key={coverLetter.id} coverLetter={coverLetter} />
      ))}
    </div>
  );
};
