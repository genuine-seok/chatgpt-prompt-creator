import styles from './index.module.scss';

interface TextboxProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Textbox = ({
  label,
  placeholder,
  value,
  onChange,
}: TextboxProps) => (
  <div className={styles['textbox-container']}>
    <label id="textbox-label" htmlFor="textbox-input">
      {label}
    </label>
    <input
      id="textbox-input"
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  </div>
);
