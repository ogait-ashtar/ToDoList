const express = require("express");
const cors = require('cors');
const routes = require('./src/routes/tarefa.route');

const port = 3000;
const app = express();

app.use(express.json()); //para a aplicação utilizar o express.json, transforma tds as req e res em json para transitar mais leve no front/back
app.use(cors());//ativar o cors
app.use('/tarefas', routes);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
