import { create } from 'zustand';

interface ChatStore {
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;

  message: string;
  setMessage: (message: string) => void;
}

export const useChatStore = create<ChatStore>((set) => ({
  isLoading: false,
  setIsLoading: (isLoading) => set(() => ({ isLoading })),

  message: '',
  setMessage: (message) => set(() => ({ message })),
}));
