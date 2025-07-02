const express = require('express');
const axios = require('axios');
const router = express.Router();

router.post('/generate-description', async (req, res) => {
  const { prompt } = req.body;

  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: prompt }],
        temperature: 0.7
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
        }
      }
    );

    res.json({ result: response.data.choices[0].message.content });
  } catch (err) {
    console.error('OpenAI error →', err.message);
    res.status(500).json({ error: 'Failed to generate response' });
  }
});

module.exports = router;