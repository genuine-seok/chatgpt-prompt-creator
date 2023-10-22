import { Dispatch, SetStateAction } from 'react';

import styles from './index.module.scss';
import { PromptCard } from '../PromptCard';
import { PromptCardGroup } from '../PromptCardGroup';
import { PromptCreateInputField } from '../PromptCreateInputField';

interface PromptCreateFormProps {
  setInput?: Dispatch<SetStateAction<string>>;
}

export const PromptCreateForm = ({ setInput }: PromptCreateFormProps) => (
  <form id="prompt-create-form" className={styles['prompt-create-container']}>
    <div className={styles['prompt-create-form-wrapper']}>
      <PromptCreateInputField setInput={setInput} />
    </div>
    <PromptCardGroup>
      <PromptCard
        title="Come up with concepts"
        description="for a retro-style arcade game"
      />
      <PromptCard
        title="Recommend activities"
        description="for a team-building day with remote employees"
      />
      <PromptCard
        title="Show me a code snippet"
        description="of a website's sticky header"
      />
      <PromptCard
        title="Write a text message"
        description="asking a friend to be my plus-one at a wedding"
      />
    </PromptCardGroup>
  </form>
);
