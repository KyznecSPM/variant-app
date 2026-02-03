import { useCoverLetters } from '../providers';
import styles from './ApplicationsList.module.css';
import { CoverLetterCard } from './CoverLetterCard';

export const ApplicationsList = () => {
  const coverLetters = useCoverLetters();

  return (
    <div className={styles.applicationsList}>
      {coverLetters.map((coverLetter) => (
        <CoverLetterCard key={coverLetter.id} coverLetter={coverLetter} />
      ))}
    </div>
  );
};
