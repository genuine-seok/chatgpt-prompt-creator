import { ButtonHTMLAttributes } from 'react';

import styles from './index.module.scss';
import { Spinner } from '../Spinner';

type VariantType = 'filled' | 'ghost';

interface ButtonProps {
  icon?: React.ReactNode;
  variant?: VariantType;
  isLoading?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  children?: React.ReactNode;
  disabled?: boolean;
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
}

export const Button = ({
  icon,
  variant = 'filled',
  isLoading,
  onClick,
  children,
  disabled = false,
  type = 'button',
}: ButtonProps) => (
  <button
    className={`${styles.button} ${styles[variant]} ${
      (isLoading || disabled) && styles.disabled
    }`}
    onClick={onClick}
    disabled={disabled || isLoading}
    type={type}
  >
    {icon}
    {isLoading ? <Spinner /> : children}
  </button>
);
