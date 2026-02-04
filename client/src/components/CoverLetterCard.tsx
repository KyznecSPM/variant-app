import { memo } from 'react';

import { useCopyToClipboard } from '../hooks';
import type { CoverLetter } from '../providers';
import { useCoverLettersActions } from '../providers';
import { Button } from './Button';
import styles from './CoverLetterCard.module.css';

interface Props {
  coverLetter: CoverLetter;
}

export const CoverLetterCard = memo(({ coverLetter }: Props) => {
  const { removeLetter } = useCoverLettersActions();
  const { copy, copied } = useCopyToClipboard();

  const handleDelete = () => {
    removeLetter(coverLetter.id);
  };

  const handleCopy = () => {
    if (coverLetter.applicationText) {
      copy(coverLetter.applicationText);
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
          {copied ? 'Copied!' : 'Copy to clipboard'}
        </Button>
      </div>
    </div>
  );
});

CoverLetterCard.displayName = 'CoverLetterCard';
