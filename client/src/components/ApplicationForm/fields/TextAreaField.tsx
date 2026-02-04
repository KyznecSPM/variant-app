import { useFormContext, useWatch } from 'react-hook-form';

import styles from './TextAreaField.module.css';

interface TextAreaFieldProps {
  name: string;
  label: string;
  placeholder?: string;
  maxLength?: number;
}

export const TextAreaField = ({
  name,
  label,
  placeholder,
  maxLength,
}: TextAreaFieldProps) => {
  const { register, control } = useFormContext();
  const value = useWatch({ control, name }) as string | undefined;

  const currentLength = value?.length || 0;
  const isOverLimit = maxLength ? currentLength > maxLength : false;

  return (
    <div className={styles.field}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <textarea
        id={name}
        className={`${styles.textarea} ${isOverLimit ? styles.textareaError : ''}`}
        placeholder={placeholder}
        {...register(name, {
          maxLength,
        })}
      />
      {maxLength && (
        <div
          className={`${styles.counter} ${isOverLimit ? styles.counterError : ''}`}
        >
          {currentLength}/{maxLength}
        </div>
      )}
    </div>
  );
};
