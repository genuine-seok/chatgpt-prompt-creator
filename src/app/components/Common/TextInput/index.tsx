import { Ref, forwardRef } from 'react';

import styles from './index.module.scss';

interface TextInputProps {
  isLoading?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

// eslint-disable-next-line react/display-name
export const TextInput = forwardRef(
  (
    { isLoading, value, onChange }: TextInputProps,
    ref?: Ref<HTMLInputElement>,
  ) => (
    <input
      className={`${styles['text-input']} ${isLoading && styles.disabled}`}
      type="text"
      value={value}
      placeholder={`${isLoading ? 'Generating prompt...' : 'Send a message'}`}
      onChange={onChange}
      disabled={isLoading}
      ref={ref}
    />
  ),
);
