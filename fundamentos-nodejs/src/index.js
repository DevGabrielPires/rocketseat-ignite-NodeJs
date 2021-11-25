const express = require('express');

const app = express();

const port = 3333;

app.get('/', (request, response) => {
  return response.json({ message: 'hello wordl ignite' });
});

app.listen(port);
