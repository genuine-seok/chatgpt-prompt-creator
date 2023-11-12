import styles from './index.module.scss';
// eslint-disable-next-line import/no-cycle
import { ChatMessage } from '..';
import { ChatScrollAnchor } from '../ChatScrollAnchor';

import type { Message } from 'ai/react';

interface ChatListProps {
  messages: Message[];
  isLoading?: boolean;
}

export const ChatList = ({ messages, isLoading }: ChatListProps) => (
  <div className={styles['chat-container']}>
    <div className={styles['chat-list']}>
      {messages?.map((message) => (
        <ChatMessage key={message.id} message={message} />
      ))}
    </div>
    <ChatScrollAnchor trackVisibility={isLoading} />
  </div>
);
