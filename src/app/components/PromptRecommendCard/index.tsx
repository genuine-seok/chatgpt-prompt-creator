import styles from './index.module.scss';

interface PromptRecommendCardProps {
  title: string;
  description: string;
}

export const PromptRecommendCard = ({
  title,
  description,
}: PromptRecommendCardProps) => (
  <div className={styles['card-container']}>
    <p className={styles['card-title']}>{title}</p>
    <p className={styles['card-description']}>{description}</p>
  </div>
);
