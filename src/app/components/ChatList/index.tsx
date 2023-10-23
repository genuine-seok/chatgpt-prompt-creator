import { Message } from 'ai/react';

import { Sidebar } from 'react-feather';

import styles from './index.module.scss';

interface ChatListProps {
  messages: Message[];
}

export const ChatList = ({ messages }: ChatListProps) => (
  <div className={styles['chat-container']}>
    {/* TODO: 렌더링 오류 수정 */}
    <header className={styles['chat-header']}>
      <button className={styles['button-sidebar']}>
        <Sidebar size={'16px'} />
      </button>
    </header>
    <div className={styles['chat-list']}>
      {messages?.map((m) => (
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
);
