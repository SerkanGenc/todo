// backend/index.js
const express = require('express');
const app = express();
const PORT = 3000;

// Test todos
const todos = [
  { id: 1, title: 'Kod yaz', done: false },
  { id: 2, title: 'PR oluştur', done: false }
];

// GET /todos
app.get('/todos', (req, res) => {
  res.json(todos);
});

app.listen(PORT, () => {
  console.log(`API çalışıyor → http://localhost:${PORT}`);
});
