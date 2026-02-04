import cn from 'classnames';

import { useCoverLetters } from '../providers';
import { Button } from './Button';
import styles from './Viewer.module.css';

const PLACEHOLDER_TEXT =
  'Your personalized job application will appear here...';

export const Viewer = () => {
  const { letters, selectedLetterId, isGenerating } = useCoverLetters();

  const applicationText = letters.find(
    (letter) => letter.id === selectedLetterId
  )?.applicationText;

  const handleCopy = async () => {
    if (!applicationText) return;

    try {
      await navigator.clipboard.writeText(applicationText);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className={cn(styles.viewer, { [styles.loading]: isGenerating })}>
      {isGenerating && (
        <div className={styles.loaderContainer}>
          <div className={styles.sphereShadow} />
          <div className={styles.sphere} />
        </div>
      )}

      <div className={styles.textContainer}>
        {applicationText ? (
          <p className={styles.text}>{applicationText}</p>
        ) : (
          <p className={styles.placeholder}>{PLACEHOLDER_TEXT}</p>
        )}
      </div>

      <div className={styles.buttonContainer}>
        <Button
          variant="ghost"
          icon="copy"
          iconPosition="right"
          onClick={handleCopy}
          disabled={!applicationText}
        >
          Copy to clipboard
        </Button>
      </div>
    </div>
  );
};
