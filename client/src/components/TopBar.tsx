import { Button } from './Button';
import { Text } from './Text';
import styles from './TopBar.module.css';

export const TopBar = () => {
  return (
    <div className={styles.topBar}>
      <div className={styles.title}>
        <Text.Heading level={1}>Applications</Text.Heading>
      </div>
      <div className={styles.actions}>
        <Button size="sm" icon="plus">
          Create New
        </Button>
      </div>
    </div>
  );
};
