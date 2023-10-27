// import { Dispatch, SetStateAction } from 'react';

import { Dispatch, SetStateAction } from 'react';

import { usePromptCreator } from '@/app/hooks';
import { UsePromptCreatorForm } from '@/app/hooks/usePromptCreatorForm';
import { useChatStore } from '@/app/store';

import styles from './index.module.scss';
import { Button, Textbox } from '../Common';

interface PromptCreateInputFieldProps {
  setInput?: Dispatch<SetStateAction<string>>;
}

export const PromptCreateInputField = ({
  setInput,
}: PromptCreateInputFieldProps) => {
  const { purpose, subject, characteristics, reset } = UsePromptCreatorForm();
  const { getPromptTextBy, isLoading } = usePromptCreator();

  const [setMessage] = useChatStore((state) => [state.setMessage]);

  const handleCreatePrompt = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault();
    setMessage('');
    const prompt = await getPromptTextBy({
      purpose: purpose.value,
      subject: subject.value,
      characteristics: characteristics.value,
    });
    setMessage(prompt.data.content);
    setInput?.(prompt.data.content);
  };

  return (
    <div className={styles['prompt-create-input-field']}>
      <Textbox
        label={`질문의 목적을 입력해 주세요.\n 답변을 얻으려고 하는 이유는 무엇인가요?`}
        placeholder="ex.발표 자료를 만들기 위하여"
        value={purpose.value}
        onChange={purpose.onChange}
        tooltipContent={
          <div className={styles['help-container']}>
            <p className={styles['help-title']}>질문 목적에 대한 예시</p>
            <ul className={styles['help-list']}>
              <li className={styles['help-item']}>발표 자료를 만들기 위하여</li>
              <li className={styles['help-item']}>보고서 작성을 위하여</li>
              <li className={styles['help-item']}>기사 작성을 위하여</li>
              <li className={styles['help-item']}>논문 작성을 위하여</li>
            </ul>
          </div>
        }
      />
      <Textbox
        label="얻고자 하는 주제를 입력해주세요. 어떤 것에 대해 알고 싶으신가요?"
        placeholder="ex. AI 기술 동향"
        value={subject.value}
        onChange={subject.onChange}
        tooltipContent={
          <div className={styles['help-container']}>
            <p className={styles['help-title']}>
              말하고자 하는 주제에 대한 예시
            </p>
            <ul className={styles['help-list']}>
              <li className={styles['help-item']}>AI 기술 동향</li>
              <li className={styles['help-item']}>금융분야의 마케팅 트렌드</li>
              <li className={styles['help-item']}>MZ 세대의 관심사</li>
            </ul>
          </div>
        }
      />
      <Textbox
        label="더 나은 답변을 위해 ChatGPT가 고려할 나만의 특징이 있다면 입력해주세요."
        placeholder="ex.금융회사 마케팅팀에서 근무"
        value={characteristics.value}
        onChange={characteristics.onChange}
        tooltipContent={
          <div className={styles['help-container']}>
            <p className={styles['help-title']}>나만의 특징에 대한 예시</p>
            <ul className={styles['help-list']}>
              <li className={styles['help-item']}>직업 및 직무, 전공</li>
              <li className={styles['help-item']}>취미 및 관심사</li>
              <li className={styles['help-item']}>국적</li>
            </ul>
          </div>
        }
      />
      {/* TODO: ButtonGroup */}
      <div className={styles['button-group-container']}>
        <div className={styles['button-group']}>
          <Button
            onClick={() => {
              reset();
            }}
            disabled={!purpose && !subject && !characteristics}
          >
            초기화
          </Button>
          <Button
            onClick={handleCreatePrompt}
            isLoading={isLoading}
            disabled={!purpose || !subject || !characteristics}
            type="submit"
          >
            생성
          </Button>
        </div>
      </div>
    </div>
  );
};
