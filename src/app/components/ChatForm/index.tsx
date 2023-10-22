import { ChangeEvent, Dispatch, FormEvent, SetStateAction } from 'react';
import { RefreshCcw, X } from 'react-feather';

import { useChatStore } from '@/app/store';

import styles from './index.module.scss';
import { ChatInput } from '../ChatInput';
import { Button } from '../Common';
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
  const [isLoading, isPopoverOpened, setisPopoverOpened] = useChatStore(
    (state) => [
      state.isLoading,
      state.isPopoverOpened,
      state.setIsPopoverOpened,
    ],
  );

  return (
    <form
      id="chatting-form"
      className={styles['chatting-form']}
      onSubmit={onSubmit}
    >
      {isChatInProgress && (
        <div className={styles['button-group']}>
          <Button
            variant="ghost"
            onClick={() => {
              setisPopoverOpened(true);
            }}
          >
            다시 입력해서 질문하기
          </Button>
          {/* TODO: Popover 컴포넌트 */}
          {isPopoverOpened && (
            <div className={styles['popover-container']}>
              <div className={styles['popover-header']}>
                <X
                  className={styles['popover-button-close']}
                  size={'14px'}
                  onClick={() => {
                    setisPopoverOpened(false);
                  }}
                />
              </div>
              <PromptCreateInputField
                setInput={setInput}
                onClose={() => {
                  setisPopoverOpened(false);
                }}
              />
            </div>
          )}
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
