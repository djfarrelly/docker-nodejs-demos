const express = require('express');

const app = express();

let count = 0;

app.get('/count.json', (req, res) => {
  count++;
  console.log(`Returning count - we now have ${count}`);
  res.json({ total: count });
});

app.listen(80);

console.log(`API running on http://localhost:80`);
