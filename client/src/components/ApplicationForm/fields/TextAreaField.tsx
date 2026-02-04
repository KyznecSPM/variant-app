import cn from 'classnames';
import { useFormContext, useWatch } from 'react-hook-form';

import shared from './shared.module.css';
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
    <div className={shared.field}>
      <label htmlFor={name} className={shared.label}>
        {label}
      </label>
      <textarea
        id={name}
        className={cn(shared.baseInput, styles.textarea, {
          [shared.inputError]: isOverLimit,
        })}
        placeholder={placeholder}
        {...register(name, {
          maxLength,
        })}
      />
      {maxLength && (
        <div
          className={cn(shared.counter, {
            [shared.counterError]: isOverLimit,
          })}
        >
          {currentLength}/{maxLength}
        </div>
      )}
    </div>
  );
};
