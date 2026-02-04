import styles from './AppLayout.module.css';

export const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.appLayout}>{children}</div>;
};
