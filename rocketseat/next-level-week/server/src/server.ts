import express from 'express';

const app = express();

app.get('/users', (request, response) => {
  console.log('listagem de usuarios');

  response.json([
    'diego',
    'wagner',
    'duda',
    'beatriz'
  ])
})

app.listen(3333);