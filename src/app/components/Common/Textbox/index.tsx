import { ReactNode } from 'react';
import { Info } from 'react-feather';

import * as Tooltip from '@radix-ui/react-tooltip';

import styles from './index.module.scss';

interface TextboxProps {
  id?: string;
  label?: string;
  placeholder?: string;
  tooltipContent?: ReactNode;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Textbox = ({
  id,
  label,
  placeholder,
  tooltipContent,
  value,
  onChange,
}: TextboxProps) => (
  <div className={styles['textbox-container']}>
    <label
      id={`textbox-label-${id}`}
      htmlFor={`textbox-input-${id}`}
      className={styles['textbox-label-container']}
    >
      {label}
      {/* TODO: WithTooltip 래퍼 컴포넌트 */}
      {tooltipContent && (
        <Tooltip.Provider>
          <Tooltip.Root delayDuration={0}>
            <Tooltip.Trigger asChild>
              <Info
                className={styles['info-icon']}
                fill="#40414f"
                size={'18px'}
              />
            </Tooltip.Trigger>
            <Tooltip.Portal>
              <Tooltip.Content
                className={styles['tooltip-content']}
                sideOffset={5}
              >
                {tooltipContent}
                <Tooltip.Arrow className={styles['tooltip-arrow']} />
              </Tooltip.Content>
            </Tooltip.Portal>
          </Tooltip.Root>
        </Tooltip.Provider>
      )}
    </label>
    <input
      id={`textbox-input-${id}`}
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  </div>
);
