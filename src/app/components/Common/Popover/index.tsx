import { ReactNode } from 'react';
import { X } from 'react-feather';

import styles from './index.module.scss';

export interface RectType {
  left: number;
  right: number;
  top: number;
  bottom: number;
}

interface PopoverMainProps {
  isOpen?: boolean;
  onClose?: () => void;
  children: ReactNode;
  targetRect: RectType;
}
const PopoverMain = ({
  isOpen = false,
  onClose,
  targetRect,
  children,
}: PopoverMainProps) =>
  isOpen ? (
    <div className={styles['backdrop-layer']}>
      <div
        className={styles['popover-container']}
        style={{ left: targetRect.left, bottom: targetRect.bottom - 550 }}
      >
        <div className={styles['popover-header']}>
          <X
            className={styles['popover-button-close']}
            size={'14px'}
            onClick={(e) => {
              e.stopPropagation();
              onClose?.();
            }}
          />
        </div>
        {children}
      </div>
    </div>
  ) : null;

interface PopoverBodyProps {
  children: ReactNode;
}
const PopoverBody = ({ children }: PopoverBodyProps) => <>{children}</>;

interface PopoverFooterProps {
  children: ReactNode;
}
const PopoverFooter = ({ children }: PopoverFooterProps) => (
  <div className={styles['popover-footer']}>{children}</div>
);

export const Popover = Object.assign(PopoverMain, {
  Body: PopoverBody,
  Footer: PopoverFooter,
});
