import { create } from 'zustand';

interface ChatStore {
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;

  isPopoverOpened: boolean;
  setIsPopoverOpened: (isPopoverOpened: boolean) => void;

  purpose: string;
  setPurpose: (purpose: string) => void;
  subject: string;
  setSubject: (subject: string) => void;
  characteristics: string;
  setCharacteristics: (characteristics: string) => void;

  resetPromptForm: () => void;
}

export const useChatStore = create<ChatStore>((set) => ({
  isLoading: false,
  setIsLoading: (isLoading) => set(() => ({ isLoading })),

  isPopoverOpened: false,
  setIsPopoverOpened: (isPopoverOpened) => set(() => ({ isPopoverOpened })),

  purpose: '',
  setPurpose: (purpose) => set(() => ({ purpose })),
  subject: '',
  setSubject: (subject) => set(() => ({ subject })),
  characteristics: '',
  setCharacteristics: (characteristics) => set(() => ({ characteristics })),

  resetPromptForm: () =>
    set(() => ({
      purpose: '',
      subject: '',
      characteristics: '',
    })),
}));
