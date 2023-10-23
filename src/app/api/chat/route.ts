import { OpenAIStream, StreamingTextResponse } from 'ai';
import OpenAI from 'openai';

import { NextRequest } from 'next/server';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY ?? '',
});

export const runtime = 'edge';

// TODO: 에러 핸들링 케이스 업데이트
export const POST = async (req: NextRequest) => {
  const { messages } = await req.json();

  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    stream: true,
    messages,
  });

  const stream = OpenAIStream(response);

  return new StreamingTextResponse(stream);
};
