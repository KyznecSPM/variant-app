import styles from './ApplicationsPageLayout.module.css';

export const ApplicationsPageLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <div className={styles.applicationsPageLayout}>{children}</div>;
};
