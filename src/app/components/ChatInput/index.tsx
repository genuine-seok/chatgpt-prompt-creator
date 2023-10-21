import styles from './index.module.scss';

interface ChatInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const ChatInput = ({ value, onChange }: ChatInputProps) => (
  <input
    className={styles['chat-input']}
    type="text"
    value={value}
    placeholder="Send a message"
    onChange={onChange}
  />
);
