import { OpenAIStream, StreamingTextResponse } from 'ai';
import OpenAI from 'openai';

import { NextRequest, NextResponse } from 'next/server';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY ?? '',
});

export const runtime = 'edge';

export const POST = async (req: NextRequest) => {
  try {
    const { messages } = await req.json();

    const { OPENAI_API_KEY } = process.env;
    if (!OPENAI_API_KEY) throw new Error('OpenAI API KEY is not found');

    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      stream: true,
      messages,
    });

    const stream = OpenAIStream(response);

    return new StreamingTextResponse(stream, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error },
      { status: 500, statusText: 'Internal Server Error', url: req.url },
    );
  }
};
