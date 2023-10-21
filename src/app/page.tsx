'use client';

import { useChat } from 'ai/react';

import { useState } from 'react';
import { RefreshCcw, Sidebar, X } from 'react-feather';

import {
  Button,
  ChatInput,
  PromptCreateInputField,
  PromptRecommendCard,
} from './components';
import styles from './page.module.scss';

const Home = () => {
  const [isPopoverOpened, setisPopoverOpened] = useState(false);

  const {
    messages,
    input,
    // setInput,
    handleInputChange,
    handleSubmit,
    reload,
  } = useChat({ id: 'chat-main' });

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
              <div className={styles['prompt-create-container']}>
                <div className={styles['prompt-create-form-wrapper']}>
                  <PromptCreateInputField />
                </div>
                <div className={styles['card-group']}>
                  <PromptRecommendCard
                    title="Come up with concepts"
                    description="for a retro-style arcade game"
                  />
                  <PromptRecommendCard
                    title="Recommend activities"
                    description="for a team-building day with remote employees"
                  />
                  <PromptRecommendCard
                    title="Show me a code snippet"
                    description="of a website's sticky header"
                  />
                  <PromptRecommendCard
                    title="Write a text message"
                    description="asking a friend to be my plus-one at a wedding"
                  />
                </div>
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
                      <p>{m.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        {/* ChatForm */}
        <form className={styles['chatting-form']} onSubmit={handleSubmit}>
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
          <ChatInput value={input} onChange={handleInputChange} />
        </form>
      </div>
    </main>
  );
};

export default Home;
