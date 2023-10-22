'use client';

import { useChat } from 'ai/react';

import { useState } from 'react';
import { RefreshCcw, Sidebar, X } from 'react-feather';

import {
  Button,
  ChatInput,
  PromptCreateInputField,
  PromptCard,
  PromptCardGroup,
} from './components';
import styles from './page.module.scss';
import { useChatStore } from './store';

const Home = () => {
  const [isPopoverOpened, setisPopoverOpened] = useState(false);

  const { messages, input, setInput, handleInputChange, handleSubmit, reload } =
    useChat({
      id: 'chat-main',
    });

  const [isLoading] = useChatStore((state) => [state.isLoading]);

  return (
    <main>
      <div className={styles['chatting-room-background']}>
        <button className={styles['button-sidebar']}>
          <Sidebar size={'16px'} />
        </button>
        <div className={styles['background-container']}>
          {!messages.length ? (
            <div className={styles['background-text-container']}>
              <h1 className={styles['background-text']}>ChatGPT-MR</h1>
              {/* PromptCreateForm */}
              <div className={styles['prompt-create-container']}>
                <div className={styles['prompt-create-form-wrapper']}>
                  <PromptCreateInputField setInput={setInput} />
                </div>
                <PromptCardGroup>
                  <PromptCard
                    title="Come up with concepts"
                    description="for a retro-style arcade game"
                  />
                  <PromptCard
                    title="Recommend activities"
                    description="for a team-building day with remote employees"
                  />
                  <PromptCard
                    title="Show me a code snippet"
                    description="of a website's sticky header"
                  />
                  <PromptCard
                    title="Write a text message"
                    description="asking a friend to be my plus-one at a wedding"
                  />
                </PromptCardGroup>
              </div>
            </div>
          ) : (
            <div className={styles['chat-container']}>
              {/* ChatList messages={messages} */}
              <header className={styles['chat-header']}>
                <button className={styles['button-sidebar']}>
                  <Sidebar size={'16px'} />
                </button>
              </header>
              <div className={styles['chat-list']}>
                {messages.map((m) => (
                  <div
                    className={`${styles['chat-item-row']} ${
                      m.role === 'user' ? styles.user : styles.ai
                    }`}
                    key={m.id}
                  >
                    <div className={styles['chat-item-container']}>
                      <div
                        className={`${styles['chat-thumbnail']} ${
                          m.role === 'user' ? styles.user : styles.ai
                        }`}
                      />
                      <p className={styles['chat-content']}>{m.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        {/* ChatForm */}
        <form
          id="chatting-form"
          className={styles['chatting-form']}
          onSubmit={handleSubmit}
        >
          {messages.length ? (
            <div className={styles['button-group']}>
              <Button
                type="ghost"
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
                type="ghost"
                onClick={() => {
                  reload();
                }}
              >
                Regenerate
              </Button>
            </div>
          ) : null}
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
