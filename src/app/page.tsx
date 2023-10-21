'use client';

import { useChat } from 'ai/react';

import { PromptCreateForm, PromptRecommendCard } from './components';
import styles from './page.module.scss';

const Home = () => {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <main>
      <div className={styles['chatting-room-background']}>
        {/* ChatList messages={messages} */}
        {messages.length > 0
          ? messages.map((m) => (
              <div key={m.id}>
                {m.role === 'user' ? 'User: ' : 'AI: '}
                {m.content}
              </div>
            ))
          : null}

        <PromptCreateForm />
        {/* ChatForm */}
        <form className={styles['chatting-form']} onSubmit={handleSubmit}>
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
          <input
            className={styles['chatting-input']}
            type="text"
            value={input}
            placeholder="Send a message"
            onChange={handleInputChange}
          />
          <p className={styles['chatting-tip-description']}>
            Free Research Preview. ChatGPT may produce inaccurate information
            about people, places, or facts.{' '}
            <span>ChatGPT September 25 Version</span>
          </p>
        </form>
      </div>
    </main>
  );
};

export default Home;
