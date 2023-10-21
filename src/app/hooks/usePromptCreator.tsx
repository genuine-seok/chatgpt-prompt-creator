import { useState } from 'react';

interface getPromptTextByProps {
  purpose: string;
  subject: string;
  characteristics: string;
}

export const usePromptCreator = () => {
  const [isLoading, setIsLoading] = useState(false);

  const getPromptTextBy = async ({
    purpose,
    subject,
    characteristics,
  }: getPromptTextByProps) => {
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
