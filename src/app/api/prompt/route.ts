import OpenAI from 'openai';

import { NextRequest, NextResponse } from 'next/server';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY ?? '',
});

const renderMessageContentText = (
  purpose: string,
  subject: string,
  characteristics: string,
) => {
  let result = `당신은 프롬프트를 만들어주는 사람입니다. 
  질문의 목적과 주제, 질문자의 특징을 고려하여 Chat GPT에게 유용한 답을 얻을 수 있는 1개의 문장으로 프롬프트를 만들어줘.`;
  result += `<질문1> 질문의 목적을 입력해주세요. 답변을 얻으려고 하는 이유는 무엇인가요? 
  <질문1의 답변> ${purpose}\n`;
  result += `<질문2> 말하고자 하는 주제를 입력해주세요. 어떤 것에 대해 알고 싶으신가요?
  <질문2의 답변> ${subject}\n`;
  result += `<질문3> 더 나은 답변을 위해 ChatGPT가 고려할 나만의 특징이 있다면 입력해주세요.
  <질문3의 답변> ${characteristics}\n`;

  return result;
};

export const POST = async (req: NextRequest) => {
  try {
    const { purpose, subject, characteristics } = await req.json();

    if (!purpose || !subject || !characteristics)
      throw new Error('목적, 주제, 특징은 필수값입니다.');

    const { OPENAI_API_KEY } = process.env;
    if (!OPENAI_API_KEY) throw new Error('OpenAI API KEY is not found');

    const content = renderMessageContentText(purpose, subject, characteristics);
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'system', content }],
    });

    const data = completion.choices[0].message;
    return NextResponse.json(
      { data },
      { status: 200, statusText: 'ok', url: req.url },
    );
  } catch (error) {
    return NextResponse.json(
      { error },
      { status: 500, statusText: 'Internal Server Error', url: req.url },
    );
  }
};
