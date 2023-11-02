'use client';

import { Message } from 'ai/react';

import { useState } from 'react';
import { CSVLink } from 'react-csv';
import { Download } from 'react-feather';

import styles from './index.module.scss';
import { IconButton } from '../IconButton';

interface HeaderProps {
  isFloat?: boolean;
  messages?: Message[];
}

interface ChatDataType {
  role: 'function' | 'system' | 'user' | 'assistant';
  content: string;
  createdAt: string | undefined;
}

const headers = [
  { label: '발화자', key: 'role' },
  { label: '내용', key: 'content' },
  { label: '생성 시간', key: 'createdAt' },
];

export const Header = ({ isFloat, messages }: HeaderProps) => {
  const [chatData, setChatData] = useState<ChatDataType[] | undefined>([
    { role: 'user', content: '', createdAt: '' },
  ]);

  const handleDownloadClick = () => {
    const data = messages?.map((message) => ({
      role: message.role,
      content: message.content,
      createdAt: message.createdAt?.toLocaleString(),
    }));
    setChatData(data);
  };

  return (
    <header
      className={`${styles['header-container']} ${isFloat && styles.float}`}
    >
      <CSVLink
        className={styles['download-link']}
        headers={headers}
        data={chatData ?? []}
        onClick={handleDownloadClick}
        filename={`chatgpt-mr-chat-data.csv`}
        href={undefined}
      >
        <IconButton icon={<Download size={'16px'} />} />
      </CSVLink>
      <p className={styles['header-title']}>New chat</p>
    </header>
  );
};
