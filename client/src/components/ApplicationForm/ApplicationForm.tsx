import { FormProvider } from 'react-hook-form';

import styles from './ApplicationForm.module.css';
import { FormFields } from './FormFields';
import { FormTitle } from './FormTitle';
import { useApplicationForm } from './hooks';
import { SubmitButton } from './SubmitButton';

export const ApplicationForm = () => {
  const { methods, onSubmit, isCompleted, selectedLetterId } =
    useApplicationForm();

  return (
    <FormProvider {...methods}>
      <form className={styles.form} onSubmit={methods.handleSubmit(onSubmit)}>
        <FormTitle />
        <FormFields />
        <SubmitButton
          isCompleted={isCompleted}
          regenerationMode={!!selectedLetterId}
        />
      </form>
    </FormProvider>
  );
};
