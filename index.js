require('dotenv').config();

const { Configuration, OpenAIApi } = require('openai');

// OpenAI APIキーを含むConfigurationオブジェクトを作成する
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
});

// OpenAI APIを使用してOpenAIApiオブジェクトを作成する
const openai = new OpenAIApi(configuration);

// 引数を指定して実行する
openai.createCompletion({
    // 使用モデル
    model: 'text-davinci-003',

    // プロンプト
    prompt: '猫は暗いところでも見える？',

    // 最大使用トークン
    max_tokens: 1024,

    // 0から2の範囲を取り、出力する単語のランダム性を指定します。
    temperature: 1,

    // -2.0から2.0の値を取り、既に出てきた単語をもう一度使うかどうかを指定します。
    presence_penalty: 0,

    // presence_penaltyと同様に-2.0に近いと同じ単語を繰り返し使うようになり、2.0に近いと同じ単語は繰り返し使わなくなります。
    frequency_penalty: 0,
  })
.then((response) => {
    console.log(response.data.choices[0].text);
})
.catch(err => {
    console.log(err.message);
})
