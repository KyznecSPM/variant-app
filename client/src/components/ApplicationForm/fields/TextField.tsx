import { useFormContext } from 'react-hook-form';

import styles from './TextField.module.css';

interface TextFieldProps {
  name: string;
  label: string;
  placeholder?: string;
  required?: boolean;
}

export const TextField = ({
  name,
  label,
  placeholder,
  required = false,
}: TextFieldProps) => {
  const { register } = useFormContext();

  return (
    <div className={styles.field}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <input
        id={name}
        type="text"
        className={styles.input}
        placeholder={placeholder}
        {...register(name, {
          required,
          validate: required
            ? (value: string) => value.trim() !== ''
            : undefined,
        })}
      />
    </div>
  );
};
