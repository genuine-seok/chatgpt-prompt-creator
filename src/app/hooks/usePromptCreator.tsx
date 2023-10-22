import { useChatStore } from '../store';

interface getPromptTextByProps {
  purpose: string;
  subject: string;
  characteristics: string;
}

interface PromptCreateResponseType {
  status: number;
  data: {
    role: string;
    content: string;
  };
}

export const usePromptCreator = () => {
  const [isLoading, setIsLoading] = useChatStore((state) => [
    state.isLoading,
    state.setIsLoading,
  ]);

  const getPromptTextBy = async ({
    purpose,
    subject,
    characteristics,
  }: getPromptTextByProps): Promise<PromptCreateResponseType> => {
    setIsLoading(true);
    const res = await fetch('/api/prompt', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ purpose, subject, characteristics }),
    });
    setIsLoading(false);
    const result = await res.json();
    return result;
  };

  return { isLoading, getPromptTextBy };
};
