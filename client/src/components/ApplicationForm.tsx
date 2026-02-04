import { useForm, useWatch } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';

import { MAX_DETAILS_LENGTH } from '../constants';
import type { CoverLetter } from '../providers';
import { useCoverLetters, useCoverLettersActions } from '../providers';
import styles from './ApplicationForm.module.css';
import { Button } from './Button';
import { Text } from './Text';

const MOCK_APPLICATION_TEXT = `Dear [Company] Team,

I am writing to express my interest in the [JobTitle] position.

My experience in the realm combined with my skills in [SkillsList] make me a strong candidate for this role.

[AdditionalDetails]

I am confident that my skills and enthusiasm would translate into valuable contributions to your esteemed organization.

Thank you for considering my application. I eagerly await the opportunity to discuss my qualifications further.`;

const defaultValues = {
  jobTitle: '',
  company: '',
  skills: '',
  additionalDetails: '',
};

type ApplicationFormData = Omit<CoverLetter, 'id' | 'applicationText'>;

export const ApplicationForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { isValid },
  } = useForm<ApplicationFormData>({
    mode: 'onChange',
    defaultValues,
  });

  const { addLetter } = useCoverLettersActions();
  const { isCompleted } = useCoverLetters();

  const jobTitle = useWatch({ control, name: 'jobTitle' });
  const company = useWatch({ control, name: 'company' });
  const additionalDetails = useWatch({ control, name: 'additionalDetails' });

  const getTitle = (): string => {
    if (!jobTitle && !company) return 'New application';
    if (jobTitle && company) return `${jobTitle}, ${company}`;
    return jobTitle || company;
  };

  const onSubmit = (data: ApplicationFormData) => {
    if (isCompleted) return;

    const applicationText = MOCK_APPLICATION_TEXT.replace(
      '[JobTitle]',
      data.jobTitle
    )
      .replace('[Company]', data.company)
      .replace('[SkillsList]', data.skills)
      .replace('[AdditionalDetails]', data.additionalDetails);

    addLetter({
      id: uuidv4(),
      jobTitle: data.jobTitle,
      company: data.company,
      skills: data.skills,
      additionalDetails: data.additionalDetails,
      applicationText,
    });
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

        <Button type="submit" size="lg" disabled={!isValid || isCompleted}>
          Generate Now
        </Button>
      </div>
    </form>
  );
};
