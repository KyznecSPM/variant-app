import cn from 'classnames';

import { APPLICATIONS_MAX_COUNT } from '../constants';
import { useCoverLetters } from '../providers';
import styles from './Progress.module.css';
import { Text } from './Text';

export const Progress = () => {
  const letters = useCoverLetters();
  const count = letters.length;
  return (
    <div className={styles.progress}>
      <div className={styles.progressText}>
        <Text.Caption>{`${count}/${APPLICATIONS_MAX_COUNT} applications generated`}</Text.Caption>
      </div>
      <div className={styles.progressBar}>
        {Array.from({ length: APPLICATIONS_MAX_COUNT }).map((_, index) => (
          <div
            key={index}
            className={cn(styles.dot, {
              [styles.active]: index < count,
            })}
          />
        ))}
      </div>
    </div>
  );
};
