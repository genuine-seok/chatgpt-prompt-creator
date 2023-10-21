import styles from './index.module.scss';
import { Button, Textbox } from '..';

export const PromptCreateForm = () => (
  <form className={styles['prompt-create-form']}>
    <Textbox
      label="질문의 목적을 입력해 주세요. 답변은 얻으려고 하는 이유는 무엇인가요?"
      placeholder="ex.발표 자료를 만들기 위하여"
    />
    <Textbox
      label="얻고자 하는 주제를 입력해주세요. 어떤 것에 대해 알고 싶으신가요?"
      placeholder="ex. AI 기술 동향"
    />
    <Textbox
      label="더 나은 답변을 위해 ChatGPT가 고려할 나만의 특징이 있다면 입력해주세요."
      placeholder="ex.금융회사 마케팅팀에서 근무"
    />
    {/* ButtonGroup */}
    <div className={styles['button-group-container']}>
      <div className={styles['button-group']}>
        <Button>초기화</Button>
        <Button>생성</Button>
      </div>
    </div>
  </form>
);
