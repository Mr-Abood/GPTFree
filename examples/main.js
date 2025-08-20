import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: '123123',
  baseURL: 'https://api.algion.dev/v1'
});

const completion = await client.chat.completions.create({
  model: 'gpt-4.1',
  messages: [
    { role: 'user', content: 'Hello! How are you?' },
  ],
});

console.log(completion.choices[0].message.content);
