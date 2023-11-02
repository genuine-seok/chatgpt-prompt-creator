import { useController, useFormContext } from 'react-hook-form';

import { TextInput } from '../Common';

interface ChatInputProps {
  isLoading?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const ChatInput = ({ isLoading, value, onChange }: ChatInputProps) => {
  const { control } = useFormContext();
  const { field: message } = useController({ name: 'message', control });

  return (
    <>
      <TextInput
        isLoading={isLoading}
        value={value}
        onChange={(e) => {
          onChange?.(e);
        }}
        ref={message.ref}
      />
    </>
  );
};