import { useController, useForm } from 'react-hook-form';

export interface PromptCreatorFormProps {
  purpose: string;
  subject: string;
  characteristics: string;
}

export const UsePromptCreatorForm = () => {
  const { control, reset } = useForm<PromptCreatorFormProps>({
    defaultValues: {
      purpose: '',
      subject: '',
      characteristics: '',
    },
  });

  const { field: purpose } = useController({
    name: 'purpose',
    control,
  });
  const { field: subject } = useController({
    name: 'subject',
    control,
  });
  const { field: characteristics } = useController({
    name: 'characteristics',
    control,
  });

  return { purpose, subject, characteristics, reset };
};
