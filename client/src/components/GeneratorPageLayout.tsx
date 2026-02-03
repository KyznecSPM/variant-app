import styles from './GeneratorPageLayout.module.css';

export const GeneratorPageLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <div className={styles.layout}>{children}</div>;
};
