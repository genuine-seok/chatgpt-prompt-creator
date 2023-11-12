'use client';

import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import styles from './index.module.scss';

interface ChatScrollAnchorProps {
  trackVisibility?: boolean;
}

export const ChatScrollAnchor = ({
  trackVisibility,
}: ChatScrollAnchorProps) => {
  const { ref, entry, inView } = useInView({
    trackVisibility,
    delay: 100,
    rootMargin: '0px 0px -134px 0px',
  });

  useEffect(() => {
    entry?.target.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }, [entry, inView, trackVisibility]);

  return <div className={styles['chat-scroll-anchor']} ref={ref} />;
};
