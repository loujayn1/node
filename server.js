const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send('Hello, world!');
  });
  
  app.post('/users', (req, res) => {
    // create new user
    res.send('User created');
  });
  
  app.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    // retrieve user with given id
    res.send(`User with id ${userId} retrieved`);
  });
  
  app.put('/users/:id', (req, res) => {
    const userId = req.params.id;
    // update user with given id
    res.send(`User with id ${userId} updated`);

  });
  app.listen(5000, () => { console.log('app listening on port 5000')})
  