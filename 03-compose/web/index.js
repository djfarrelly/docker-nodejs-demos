const express = require('express');
const session = require('express-session');
const RedisStore = require('connect-redis')(session);
const request = require('request');

const app = express();

// Session
app.use(session({
  store: new RedisStore({
    host: 'redis', // docker-compose adds DNS entry for link
  }),
  secret: 'docker',
}));

// Routes
app.get('/', (req, res) => {
  console.log(`Request: Session id:${req.session.id}`);
  res.send(`
    Welcome to our website!<br>
    Session id: ${req.session.id}<br><br>
    <a href="/count">Check how many hits we have</a>
  `);
});

app.get('/count', (req, res) => {
  // We use "api" since these two are linked
  request.get('http://api/count.json', (err, response, body) => {
    const json = JSON.parse(body);
    res.send(`
      The api says we have ${json.total} hits
    `)
  });
});

app.listen(8080);

console.log(`Web running on http://localhost:8080`);
