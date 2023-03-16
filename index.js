import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

/**
 * {@link https://platform.openai.com/docs/api-reference/completions/create}
 */
const response = await openai.createCompletion({
    model: 'gpt-4',
    prompt: '「あ」から「お」までを順に使って、おもしろい文章を書いて',
    max_tokens: 1024,
    temperature: 1,
    presence_penalty: 0,
    frequency_penalty: 0,
});

console.log(response.data.choices[0].text);
