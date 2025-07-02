const express = require('express');
const cors = require('cors');
require('dotenv').config();

const chatbotRoutes = require('./routes/chatbot');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Route for chatbot
app.use('/api', chatbotRoutes);

app.get('/', (req, res) => {
  res.send('TraidNest backend is live 🎉');
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
