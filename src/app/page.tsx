'use client';

import { useChat } from 'ai/react';

import { useState } from 'react';
import { RefreshCcw, Sidebar, X } from 'react-feather';

import {
  Button,
  ChatInput,
  PromptCreateInputField,
  PromptCreateForm,
  ChatList,
} from './components';
import styles from './page.module.scss';
import { useChatStore } from './store';

const Home = () => {
  const [isPopoverOpened, setisPopoverOpened] = useState(false);
  const [isLoading] = useChatStore((state) => [state.isLoading]);

  const { messages, input, setInput, handleInputChange, handleSubmit, reload } =
    useChat({
      id: 'chat-main',
    });

  const isChatInProgress = !!messages.length;

  return (
    <main>
      <div className={styles['chatting-room-background']}>
        <button className={styles['button-sidebar']}>
          <Sidebar size={'16px'} />
        </button>
        <div className={styles['background-container']}>
          {isChatInProgress ? (
            <ChatList messages={messages} />
          ) : (
            <PromptCreateForm setInput={setInput} />
          )}
        </div>
        {/* ChatForm */}
        <form
          id="chatting-form"
          className={styles['chatting-form']}
          onSubmit={handleSubmit}
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
                  reload();
                }}
              >
                Regenerate
              </Button>
            </div>
          )}
          {/* TODO: isChatInProgress 여부에 따라, 버튼 그룹 렌더링 여부를 내부에서 추상화한다 */}
          <ChatInput
            isLoading={isLoading}
            value={input}
            onChange={handleInputChange}
          />
        </form>
      </div>
    </main>
  );
};

export default Home;
