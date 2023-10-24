'use client';

import { useChat } from 'ai/react';

import { useMemo } from 'react';

import { PromptCreateForm, ChatList, ChatForm, Header } from './components';
import styles from './page.module.scss';

const Home = () => {
  const { messages, input, setInput, handleInputChange, handleSubmit, reload } =
    useChat({
      id: 'chat-main',
    });

  // TODO: 컴포넌트 렌더링 최적화하기
  const isChatInProgress = useMemo(() => !!messages.length, [messages.length]);

  return (
    <main className={styles['main-page']}>
      <Header isFloat={isChatInProgress} />
      {isChatInProgress ? (
        <ChatList messages={messages} />
      ) : (
        <PromptCreateForm setInput={setInput} />
      )}
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
    </main>
  );
};

export default Home;
