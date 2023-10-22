import styles from './index.module.scss';
import { TextInput } from '../Common';

interface ChatInputProps {
  isLoading?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const ChatInput = ({ isLoading, value, onChange }: ChatInputProps) => (
  <>
    <TextInput isLoading={isLoading} value={value} onChange={onChange} />
    <p className={styles['chat-tip-description']}>
      Free Research Preview. ChatGPT may produce inaccurate information about
      people, places, or facts. <span>ChatGPT September 25 Version</span>
    </p>
  </>
);
