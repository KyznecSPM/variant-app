import { useForm, useWatch } from 'react-hook-form';

import { MAX_DETAILS_LENGTH } from '../constants';
import styles from './ApplicationForm.module.css';
import { Button } from './Button';
import { Text } from './Text';
interface ApplicationFormData {
  jobTitle: string;
  company: string;
  skills: string;
  additionalDetails: string;
}

export const ApplicationForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { isValid },
  } = useForm<ApplicationFormData>({
    mode: 'onChange',
    defaultValues: {
      jobTitle: '',
      company: '',
      skills: '',
      additionalDetails: '',
    },
  });

  const jobTitle = useWatch({ control, name: 'jobTitle' });
  const company = useWatch({ control, name: 'company' });
  const additionalDetails = useWatch({ control, name: 'additionalDetails' });

  const getTitle = (): string => {
    if (!jobTitle && !company) return 'New application';
    if (jobTitle && company) return `${jobTitle}, ${company}`;
    return jobTitle || company;
  };

  const onSubmit = (data: ApplicationFormData) => {
    // TODO: Implement form submission logic
    console.log('Form submitted:', data);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.titleContainer}>
        <Text.Heading level={2} className={styles.title}>
          {getTitle()}
        </Text.Heading>
      </div>
      <div className={styles.fieldsContainer}>
        <div className={styles.fieldRow}>
          <div className={styles.field}>
            <label htmlFor="jobTitle" className={styles.label}>
              Job title
            </label>
            <input
              id="jobTitle"
              type="text"
              className={styles.input}
              placeholder="Product manager"
              {...register('jobTitle', {
                required: true,
                validate: (value) => value.trim() !== '',
              })}
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="company" className={styles.label}>
              Company
            </label>
            <input
              id="company"
              type="text"
              className={styles.input}
              placeholder="Apple"
              {...register('company', {
                required: true,
                validate: (value) => value.trim() !== '',
              })}
            />
          </div>
        </div>

        <div className={styles.field}>
          <label htmlFor="skills" className={styles.label}>
            I am good at...
          </label>
          <input
            id="skills"
            type="text"
            className={styles.input}
            placeholder="HTML, CSS and doing things in time"
            {...register('skills', {
              required: true,
              validate: (value) => value.trim() !== '',
            })}
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="additionalDetails" className={styles.label}>
            Additional details
          </label>
          <textarea
            id="additionalDetails"
            className={styles.textarea}
            placeholder="Describe why you are a great fit or paste your bio"
            {...register('additionalDetails', {
              maxLength: MAX_DETAILS_LENGTH,
            })}
          />
          <div className={styles.counter}>
            {additionalDetails?.length || 0}/{MAX_DETAILS_LENGTH}
          </div>
        </div>

        <Button type="submit" size="lg" disabled={!isValid}>
          Generate Now
        </Button>
      </div>
    </form>
  );
};
