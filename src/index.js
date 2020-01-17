const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')
const cors = require('cors')


mongoose.connect("mongodb+srv://client:clientpass@cluster0-p3rsy.mongodb.net/week10?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
)

const app = express();

app.use(cors())
app.use(express.json())
app.use(routes)



app.listen(3333)


// Tipos de Parâmetros:
//
// Query Params: request.query e.g: filtros, paginação, ordenação
// Route Params: request.params e.g: identificar um recurso na alteração ou remoção
// Body: request.body e.g: Dados para a criação ou alteração de registros

// MongoDB (Não-relacional)