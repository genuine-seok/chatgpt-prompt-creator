'use client';

import { useChat } from 'ai/react';

import { Sidebar } from 'react-feather';

import { PromptCreateForm, ChatList, ChatForm } from './components';
import styles from './page.module.scss';

const Home = () => {
  const { messages, input, setInput, handleInputChange, handleSubmit, reload } =
    useChat({
      id: 'chat-main',
    });

  const isChatInProgress = !!messages.length;

  return (
    <main>
      <div className={styles['chatting-room-background']}>
        {/* IconButton */}
        {/* TODO: 채팅 시작시, 스타일 오류 수정 필요 */}
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
        <ChatForm
          isChatInProgress={isChatInProgress}
          input={input}
          setInput={setInput}
          onSubmit={handleSubmit}
          onRegenerateClick={() => {
            reload();
          }}
          onChange={handleInputChange}
        />
      </div>
    </main>
  );
};

export default Home;
