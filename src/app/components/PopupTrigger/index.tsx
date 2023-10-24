import { ReactNode, useState } from 'react';
import ReactDOM from 'react-dom';

import styles from './index.module.scss';
import { Button, Popover, RectType } from '../Common';

interface PopupTriggerProps {
  children: ReactNode;
  popupContent?: ReactNode;
}

export const PopupTrigger = ({ children, popupContent }: PopupTriggerProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [targetRect, setTargetRect] = useState<RectType>({
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  });

  return (
    <div
      className={styles['popup-trigger-container']}
      onClick={(e) => {
        setIsOpen(true);
        const rect = e.currentTarget.getBoundingClientRect();
        // TODO: UI 반응형 대응 - useLayoutEffect
        setTargetRect({
          left: rect.left,
          right: rect.right,
          top: rect.top,
          bottom: rect.bottom,
        });
      }}
    >
      {children}
      {ReactDOM.createPortal(
        <Popover
          isOpen={isOpen}
          onClose={() => {
            setIsOpen(false);
          }}
          targetRect={targetRect}
        >
          <Popover.Body>{popupContent}</Popover.Body>
          <Popover.Footer>
            <Button
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(false);
              }}
            >
              취소
            </Button>
          </Popover.Footer>
        </Popover>,
        document.body,
      )}
    </div>
  );
};
