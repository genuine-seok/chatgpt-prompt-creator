import styles from './index.module.scss';

type ButtonType = 'filled' | 'ghost';

interface ButtonProps {
  icon?: React.ReactNode;
  type?: ButtonType;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  children?: React.ReactNode;
}

export const Button = ({
  icon,
  type = 'filled',
  onClick,
  children,
}: ButtonProps) => (
  <button className={`${styles.button} ${styles[type]}`} onClick={onClick}>
    {icon}
    {children}
  </button>
);
