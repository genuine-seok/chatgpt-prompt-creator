import styles from './index.module.scss';

interface PromptCardProps {
  title: string;
  description: string;
}

export const PromptCard = ({ title, description }: PromptCardProps) => (
  <div className={styles['card-container']}>
    <p className={styles['card-title']}>{title}</p>
    <p className={styles['card-description']}>{description}</p>
  </div>
);
