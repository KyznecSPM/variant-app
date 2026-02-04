import cn from 'classnames';
import { useFormContext } from 'react-hook-form';

import shared from './shared.module.css';
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
    <div className={shared.field}>
      <label htmlFor={name} className={shared.label}>
        {label}
      </label>
      <input
        id={name}
        type="text"
        className={cn(shared.baseInput, styles.input)}
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
