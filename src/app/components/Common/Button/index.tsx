import styles from './index.module.scss';

interface ButtonProps {
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  children?: React.ReactNode;
}

export const Button = ({ onClick, children }: ButtonProps) => (
  <button className={`${styles.button}`} onClick={onClick}>
    {children}
  </button>
);
