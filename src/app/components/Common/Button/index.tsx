import styles from './index.module.scss';
import { Spinner } from '../Spinner';

type ButtonType = 'filled' | 'ghost';

interface ButtonProps {
  icon?: React.ReactNode;
  type?: ButtonType;
  isLoading?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  children?: React.ReactNode;
}

export const Button = ({
  icon,
  type = 'filled',
  isLoading,
  onClick,
  children,
}: ButtonProps) => (
  <button
    className={`${styles.button} ${styles[type]} ${
      isLoading && styles.loading
    }`}
    onClick={onClick}
    disabled={isLoading}
  >
    {icon}
    {isLoading ? <Spinner /> : children}
  </button>
);
