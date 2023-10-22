import styles from './index.module.scss';
import { Spinner } from '../Spinner';

type ButtonType = 'filled' | 'ghost';

interface ButtonProps {
  icon?: React.ReactNode;
  type?: ButtonType;
  isLoading?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  children?: React.ReactNode;
  disabled?: boolean;
}

export const Button = ({
  icon,
  type = 'filled',
  isLoading,
  onClick,
  children,
  disabled = false,
}: ButtonProps) => (
  <button
    className={`${styles.button} ${styles[type]} ${
      (isLoading || disabled) && styles.disabled
    }`}
    onClick={onClick}
    disabled={disabled || isLoading}
    type="button"
  >
    {icon}
    {isLoading ? <Spinner /> : children}
  </button>
);
