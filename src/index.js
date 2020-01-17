const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')
const cors = require('cors')


mongoose.connect(`${process.env.MONGO_URL}`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
)

const app = express();

app.use(cors())
app.use(express.json())
app.use(routes)

const porta = process.env.PORT || 3333

app.listen(porta)


// Tipos de Parâmetros:
//
// Query Params: request.query e.g: filtros, paginação, ordenação
// Route Params: request.params e.g: identificar um recurso na alteração ou remoção
// Body: request.body e.g: Dados para a criação ou alteração de registros

// MongoDB (Não-relacional)