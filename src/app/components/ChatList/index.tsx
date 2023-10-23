import { Message } from 'ai/react';

import styles from './index.module.scss';

interface ChatListProps {
  messages: Message[];
}

export const ChatList = ({ messages }: ChatListProps) => (
  <div className={styles['chat-container']}>
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
