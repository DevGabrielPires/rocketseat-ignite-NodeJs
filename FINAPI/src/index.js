const express = require('express');

const { v4: uuidV4 } = require('uuid');

const app = express();

app.use(express.json());

const custumers = [];

app.post('/account', (request, response) => {
  const { cpf, name } = request.body;

  const custumersAlredyExist = custumers.some(custumer => custumer.cpf === cpf);

  if (custumersAlredyExist) {
    return response.status(400).json({ error: 'CPF já cadastrado!' });
  }

  custumers.push({
    cpf,
    name,
    id: uuidV4(),
    statement: [],
  });

  console.log(custumers);
  return response.status(201).send();
});

const port = 3333;

app.listen(port);
