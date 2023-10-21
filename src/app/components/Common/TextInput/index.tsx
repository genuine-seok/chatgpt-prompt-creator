import styles from './index.module.scss';

interface TextInputProps {
  isLoading?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TextInput = ({ isLoading, value, onChange }: TextInputProps) => (
  <>
    <input
      className={styles['text-input']}
      type="text"
      value={value}
      placeholder={`${isLoading ? '' : 'Send a message'}`}
      onChange={onChange}
      disabled={isLoading}
    />
  </>
);
