'use client';

import { useChat } from 'ai/react';

import { FormProvider, useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

import {
  ChatList,
  ChatForm,
  Header,
  PromptCardGroup,
  PromptCard,
} from './components';
import styles from './page.module.scss';

const Home = () => {
  const { messages, input, setInput, handleSubmit, reload, isLoading, stop } =
    useChat({
      id: 'chat-main',
      onError: (error) => {
        toast.error(error.message);
      },
      onResponse(response) {
        if (response.status === 401) toast.error(response.statusText);
      },
    });

  const methods = useForm({ defaultValues: { message: '' } });

  return (
    <main className={styles['main-page']}>
      <FormProvider {...methods}>
        <Header isFloat={!!messages.length} messages={messages} />
        {messages.length ? (
          <>
            <ChatList messages={messages} isLoading={isLoading} />
          </>
        ) : (
          <>
            <h1 className={styles['form-placeholder']}>ChatGPT-MR</h1>
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
          </>
        )}
        <ChatForm
          isChatInProgress={!!messages.length}
          input={input}
          setInput={setInput}
          onSubmit={handleSubmit}
          onRegenerateClick={() => {
            reload();
          }}
          onStopClick={() => {
            stop();
          }}
        />
      </FormProvider>
    </main>
  );
};

export default Home;
