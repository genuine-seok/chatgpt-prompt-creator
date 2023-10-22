import { ReactNode } from 'react';

import styles from './index.module.scss';

interface PromptCardGroupProps {
  children: ReactNode;
}
export const PromptCardGroup = ({ children }: PromptCardGroupProps) => (
  <div className={styles['card-group']}>{children}</div>
);
