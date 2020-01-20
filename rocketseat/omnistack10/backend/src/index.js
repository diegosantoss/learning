// Métodos HTTP: GET, POST, PUT, DELETE

// Tipos de parâmetros:
// Query Params: request.query (Filtros, ordenação, paginação, ....)
// Route Params: request.params (identificar um recurso na alteração ou remoção)
// Body: request.body  (Dados para criação ou alteração de um registro)

//MongoDB (não-relacional)

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const routes = require('./routes');
const { setupWebSocket } = require('./websocket');

const app = express();
const server = http.Server(app);

setupWebSocket(server);

mongoose.connect('mongodb+srv://diego:diego@cluster0-o8yrv.mongodb.net/week10?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

app.use(cors());
app.use(express.json());
app.use(routes);


server.listen(3333);