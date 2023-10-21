import styles from './index.module.scss';

interface TextInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TextInput = ({ value, onChange }: TextInputProps) => (
  <input
    className={styles['text-input']}
    type="text"
    value={value}
    placeholder="Send a message"
    onChange={onChange}
  />
);
