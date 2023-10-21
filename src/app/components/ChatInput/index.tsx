import styles from './index.module.scss';
import { TextInput } from '../Common';

interface ChatInputProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const ChatInput = ({ value, onChange }: ChatInputProps) => (
  <>
    <TextInput value={value} onChange={onChange} />
    <p className={styles['chat-tip-description']}>
      Free Research Preview. ChatGPT may produce inaccurate information about
      people, places, or facts. <span>ChatGPT September 25 Version</span>
    </p>
  </>
);
