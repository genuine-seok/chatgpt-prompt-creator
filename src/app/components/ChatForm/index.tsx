import { ChangeEvent, Dispatch, FormEvent, SetStateAction } from 'react';
import { RefreshCcw } from 'react-feather';

import { useChatStore } from '@/app/store';

import styles from './index.module.scss';
import { ChatInput } from '../ChatInput';
import { Button } from '../Common';
import { PopoverTrigger } from '../PopoverTrigger';
import { PromptCreateInputField } from '../PromptCreateInputField';

interface ChatFormProps {
  isChatInProgress?: boolean;
  input?: string;
  setInput?: Dispatch<SetStateAction<string>>;
  onSubmit?: (e: FormEvent<HTMLFormElement>) => void;
  onRegenerateClick: () => void;
  onChange: (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>,
  ) => void;
}

export const ChatForm = ({
  isChatInProgress,
  input,
  setInput,
  onSubmit,
  onRegenerateClick,
  onChange,
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
          <PopoverTrigger
            popupContent={<PromptCreateInputField setInput={setInput} />}
          >
            <Button variant="ghost">다시 입력해서 질문하기</Button>
          </PopoverTrigger>
          <Button
            icon={<RefreshCcw size={'14px'} />}
            variant="ghost"
            onClick={() => {
              onRegenerateClick?.();
            }}
          >
            Regenerate
          </Button>
        </div>
      )}
      <ChatInput isLoading={isLoading} value={input} onChange={onChange} />
    </form>
  );
};
