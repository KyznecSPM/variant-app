import { MAX_DETAILS_LENGTH } from '../../constants';
import styles from './ApplicationForm.module.css';
import { TextAreaField, TextField } from './fields';

export const FormFields = () => {
  return (
    <div className={styles.fieldsContainer}>
      <div className={styles.fieldRow}>
        <TextField
          name="jobTitle"
          label="Job title"
          placeholder="Product manager"
          required
        />
        <TextField
          name="company"
          label="Company"
          placeholder="Apple"
          required
        />
      </div>

      <TextField
        name="skills"
        label="I am good at..."
        placeholder="HTML, CSS and doing things in time"
        required
      />

      <TextAreaField
        name="additionalDetails"
        label="Additional details"
        placeholder="Describe why you are a great fit or paste your bio"
        maxLength={MAX_DETAILS_LENGTH}
      />
    </div>
  );
};
