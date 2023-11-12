import { useController, useForm } from 'react-hook-form';

interface UsePromptMessageFormProps {
  message: string;
}

export const UsePromptMessageForm = () => {
  const { control, reset } = useForm<UsePromptMessageFormProps>({
    defaultValues: {
      message: '',
    },
  });

  const { field: message } = useController({
    name: 'message',
    control,
  });
  return { message, reset };
};
