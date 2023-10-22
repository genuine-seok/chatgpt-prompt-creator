import styles from './index.module.scss';

interface SpinnerProps {
  className?: string;
}
export const Spinner = ({ className }: SpinnerProps) => (
  <span className={`${styles.spinner} ${className}`} />
);
