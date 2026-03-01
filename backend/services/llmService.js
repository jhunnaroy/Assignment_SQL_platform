const axios = require("axios");

const generateHint = async (question, userQuery) => {
  const prompt = `
You are a SQL tutor.

Assignment:
${question}

User Query:
${userQuery}

Give a hint only. Do NOT provide full solution.
`;

  const response = await axios.post(
    "https://api.openai.com/v1/chat/completions",
    {
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
    }
  );

  return response.data.choices[0].message.content;
};

module.exports = { generateHint };