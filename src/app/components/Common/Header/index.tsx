import { Sidebar } from 'react-feather';

import styles from './index.module.scss';
import { IconButton } from '../IconButton';

interface HeaderProps {
  isFloat?: boolean;
}

export const Header = ({ isFloat }: HeaderProps) => (
  <header
    className={`${styles['header-container']} ${isFloat && styles.float}`}
  >
    <IconButton icon={<Sidebar size={'16px'} />} />
  </header>
);
