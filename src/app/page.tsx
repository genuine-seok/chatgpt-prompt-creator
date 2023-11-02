'use client';

import { useChat } from 'ai/react';

import { useMemo } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import {
  ChatList,
  ChatForm,
  Header,
  PromptCardGroup,
  PromptCard,
  PromptCreateForm,
} from './components';
import styles from './page.module.scss';

const Home = () => {
  const { messages, input, setInput, handleInputChange, handleSubmit, reload } =
    useChat({
      id: 'chat-main',
    });

  const isChatInProgress = useMemo(() => !!messages.length, [messages.length]);
  const methods = useForm({ defaultValues: { message: '' } });

  return (
    <main className={styles['main-page']}>
      <FormProvider {...methods}>
        <Header isFloat={isChatInProgress} messages={messages} />
        {isChatInProgress ? (
          <ChatList messages={messages} />
        ) : (
          <>
            <h1 className={styles['form-placeholder']}>ChatGPT-MR</h1>
            <div className={styles['prompt-create-container']}>
              <div className={styles['input-field-wrapper']}>
                <PromptCreateForm setInput={setInput} />
              </div>
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
          </>
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
