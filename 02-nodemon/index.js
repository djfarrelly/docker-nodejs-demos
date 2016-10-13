const express = require('express');

const app = express();

app.get('/', (req, res) => {
  console.log(`Request!`);
  res.json({ status: 'ok', test: false, hello: "docker" });
});

app.listen(8080);

console.log(`
  Server running on http://localhost:8080
  To stop this container, run: docker kill ${process.env.HOSTNAME}
`);
