import { memo } from 'react';

import styles from './index.module.scss';

import type { Message } from 'ai/react';

// eslint-disable-next-line react/display-name
const ContentBlock = memo(({ content }: { content: string }) => (
  <p className={styles['chat-content']}>{content}</p>
));

interface ChatMessageProps {
  message: Message;
}

export const ChatMessage = ({ message }: ChatMessageProps) => (
  <div
    className={`${styles['chat-item-row']} ${
      message.role === 'user' ? styles.user : styles.ai
    }`}
    key={message.id}
  >
    <div className={styles['chat-item-container']}>
      <div
        className={`${styles['chat-thumbnail']} ${
          message.role === 'user' ? styles.user : styles.ai
        }`}
      />
      <ContentBlock content={message.content} />
    </div>
  </div>
);
