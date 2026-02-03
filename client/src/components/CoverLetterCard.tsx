import type { CoverLetter } from '../providers';
import { useCoverLettersActions } from '../providers';
import { Button } from './Button';
import styles from './CoverLetterCard.module.css';

interface Props {
  coverLetter: CoverLetter;
}

export const CoverLetterCard = ({ coverLetter }: Props) => {
  const { removeLetter } = useCoverLettersActions();

  const handleDelete = () => {
    removeLetter(coverLetter.id);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(coverLetter.applicationText);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className={styles.card}>
      <div className={styles.textContainer}>
        <p className={styles.text}>{coverLetter.applicationText}</p>
        <div className={styles.fadeOverlay} />
      </div>
      <div className={styles.actions}>
        <Button variant="ghost" icon="trash" onClick={handleDelete}>
          Delete
        </Button>
        <Button
          variant="ghost"
          icon="copy"
          iconPosition="right"
          onClick={handleCopy}
        >
          Copy to clipboard
        </Button>
      </div>
    </div>
  );
};
