import { ReactNode } from 'react';

import styles from './index.module.scss';

interface IconButtonProps {
  icon: ReactNode;
}

export const IconButton = ({ icon }: IconButtonProps) => (
  <button className={styles['icon-button-container']}>{icon}</button>
);
