import Image from 'next/image';
import { Dispatch, FormEvent, SetStateAction } from 'react';
import { RefreshCcw, StopCircle } from 'react-feather';

import Send from '@/../public/send-icon.svg';

import { useChatStore } from '@/app/store';

import styles from './index.module.scss';
import { ChatInput } from '../ChatInput';
import { Button } from '../Common';

interface ChatFormProps {
  isChatInProgress?: boolean;
  input?: string;
  setInput?: Dispatch<SetStateAction<string>>;
  onSubmit?: (e: FormEvent<HTMLFormElement>) => void;
  onRegenerateClick: () => void;
  onStopClick: () => void;
}

export const ChatForm = ({
  isChatInProgress,
  input,
  setInput,
  onSubmit,
  onRegenerateClick,
  onStopClick,
}: ChatFormProps) => {
  const [isLoading] = useChatStore((state) => [state.isLoading]);

  return (
    <form
      id="chatting-form"
      className={styles['chatting-form']}
      onSubmit={onSubmit}
    >
      {isChatInProgress && (
        <div className={styles['button-group']}>
          <Button
            className={styles['message-helper-button']}
            icon={<RefreshCcw size={'14px'} />}
            variant="ghost"
            onClick={() => {
              onRegenerateClick?.();
            }}
          >
            Regenerate
          </Button>
          <Button
            className={styles['message-helper-button']}
            icon={<StopCircle size={'14px'} />}
            variant="ghost"
            onClick={() => {
              onStopClick?.();
            }}
          >
            Stop
          </Button>
        </div>
      )}
      {/* TODO: 컴포넌트 인라인화하기 */}
      <div className={styles['chat-input-container']}>
        <ChatInput
          isLoading={isLoading}
          value={input}
          onChange={(e) => setInput?.(e.target.value)}
        />
        <Button
          className={styles['message-send-button']}
          type="submit"
          icon={<Image src={Send} alt="send button" />}
        />
      </div>

      <p className={styles['chat-tip-description']}>
        Free Research Preview. ChatGPT may produce inaccurate information about
        people, places, or facts. <span>ChatGPT September 25 Version</span>
      </p>
    </form>
  );
};
