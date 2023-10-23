'use client';

import { useChat } from 'ai/react';

import { Sidebar } from 'react-feather';

import { PromptCreateForm, ChatList, ChatForm, IconButton } from './components';
import styles from './page.module.scss';

const Home = () => {
  const { messages, input, setInput, handleInputChange, handleSubmit, reload } =
    useChat({
      id: 'chat-main',
    });

  const isChatInProgress = !!messages.length;

  return (
    <main className={styles['main-page']}>
      <IconButton icon={<Sidebar size={'16px'} />} />
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
