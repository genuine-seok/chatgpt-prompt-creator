'use client';

import { useChat } from 'ai/react';

import { useMemo } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { PromptCreateForm, ChatList, ChatForm, Header } from './components';
import styles from './page.module.scss';

const Home = () => {
  const { messages, input, setInput, handleInputChange, handleSubmit, reload } =
    useChat({
      id: 'chat-main',
    });

  const isChatInProgress = useMemo(() => !!messages.length, [messages.length]);

  // TODO: message 폼 데이터 관리
  const methods = useForm({ defaultValues: { message: '' } });

  return (
    <main className={styles['main-page']}>
      <FormProvider {...methods}>
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
      </FormProvider>
    </main>
  );
};

export default Home;
