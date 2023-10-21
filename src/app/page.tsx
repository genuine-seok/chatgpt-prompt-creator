'use client';

import { useChat } from 'ai/react';

import { Sidebar } from 'react-feather';

import { ChatInput, PromptCreateForm, PromptRecommendCard } from './components';
import styles from './page.module.scss';

const Home = () => {
  // const [isInitialState] = useState(true);
  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    // reload
  } = useChat();

  return (
    <main>
      <div className={styles['chatting-room-background']}>
        <button className={styles['button-sidebar']}>
          <Sidebar size={'16px'} />
        </button>
        <div className={styles['background-container']}>
          {/* TODO: ChatList와 PromptCreateForm 동적 렌더링 추가 */}
          {!messages.length ? (
            <div className={styles['background-text-container']}>
              <h1 className={styles['background-text']}>ChatGPT-MR</h1>
              <div className={styles['prompt-create-container']}>
                <PromptCreateForm />
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
              <header className={styles['chat-header']} />
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
          {/* {messages.length && (
            <div className={styles['button-group']}>
              <Button>다시 입력해서 질문하기</Button>
              <Button>Regenerate</Button>
            </div>
          )} */}
          <ChatInput value={input} onChange={handleInputChange} />
        </form>
      </div>
    </main>
  );
};

export default Home;
