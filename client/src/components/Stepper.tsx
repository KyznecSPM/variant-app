import cn from 'classnames';

import { APPLICATIONS_MAX_COUNT } from '../constants';
import styles from './Stepper.module.css';
import { Text } from './Text';

interface StepperProps {
  count: number;
}

export const Stepper = ({ count = 0 }: StepperProps) => {
  return (
    <div className={styles.stepperContainer}>
      <div className={styles.stepperItems}>
        {Array.from({ length: APPLICATIONS_MAX_COUNT }).map((_, step) => (
          <div
            className={cn(styles.step, {
              [styles.active]: step < count,
            })}
            key={step}
          />
        ))}
      </div>
      <div className={styles.stepperText}>
        <Text.Caption>{`${count} out of ${APPLICATIONS_MAX_COUNT}`}</Text.Caption>
      </div>
    </div>
  );
};
