import styles from './index.module.scss';

interface HelpProps {
  title?: string;
  items?: string[];
}

export const Help = ({ title, items }: HelpProps) => (
  <div className={styles['help-container']}>
    <p className={styles['help-title']}>{title}</p>
    <ul className={styles['help-list']}>
      {items?.map((item) => (
        <li key={item} className={styles['help-item']}>
          {item}
        </li>
      ))}
    </ul>
  </div>
);
