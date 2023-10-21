import styles from './index.module.scss';

interface PromptCreateFormProps {}

export const PromptCreateForm = ({}: PromptCreateFormProps) => (
  <form className={styles['prompt-create-form']}>
    {/* Textbox */}
    <div className={styles['textbox-container']}>
      <label htmlFor="chat-purpose">
        질문의 목적을 입력해 주세요. 답변은 얻으려고 하는 이유는 무엇인가요?
      </label>
      <input
        id="chat-purpose"
        type="text"
        placeholder="ex.발표 자료를 만들기 위하여"
      />
    </div>
    <div className={styles['textbox-container']}>
      <label htmlFor="chat-subject">
        얻고자 하는 주제를 입력해주세요. 어떤 것에 대해 알고 싶으신가요?
      </label>
      <input id="chat-subject" type="text" placeholder="ex.AI 기술 동향" />
    </div>
    <div className={styles['textbox-container']}>
      <label htmlFor="chat-subject">
        더 나은 답변을 위해 ChatGPT가 고려할 나만의 특징이 있다면 입력해주세요.
      </label>
      <input
        id="chat-subject"
        type="text"
        placeholder="ex.금융회사 마케팅팀에서 근무"
      />
    </div>
    {/* ButtonGroup */}
  </form>
);
