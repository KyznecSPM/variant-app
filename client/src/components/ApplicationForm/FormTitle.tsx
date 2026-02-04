import { useFormContext, useWatch } from 'react-hook-form';

import { Text } from '../Text';
import styles from './ApplicationForm.module.css';
import type { ApplicationFormData } from './types';

export const FormTitle = () => {
  const { control } = useFormContext<ApplicationFormData>();
  const [jobTitle, company] = useWatch({
    control,
    name: ['jobTitle', 'company'],
  });

  const getTitle = (): string => {
    if (!jobTitle && !company) return 'New application';
    if (jobTitle && company) return `${jobTitle}, ${company}`;
    return jobTitle || company;
  };

  return (
    <div className={styles.titleContainer}>
      <Text.Heading level={2} className={styles.title}>
        {getTitle()}
      </Text.Heading>
    </div>
  );
};
