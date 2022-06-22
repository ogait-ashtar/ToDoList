const express = require("express");
const cors = require('cors');

const port = 3000;
const app = express();

app.use(express.json()); //para a aplicação utilizar o express.json, transforma tds as req e res em json para transitar mais leve no front/back
app.use(cors());//ativar o cors

const tarefas = [
  {
    id: 1,
    tarefa: "Escovar os dentes",
    descricao: "Acordar, pegar a pasta, colocar na escova e escovar os dentes",
  },
  {
    id: 2,
    tarefa: "Tomar Café",
    descricao: "Pegar o café na cafeteira e colocar no copo, adoçar e beber",
  },
  {
    id: 3,
    tarefa: "Ligar o carro",
    descricao: "Pegar a chave, colocar na ignição e dar o giro",
  },
];
/*rota getAll*/

app.get("/tarefas/todas-tarefas", (req, res) => {
  res.send(tarefas);
});

/*rota getById*/

app.get('/tarefas/tarefa/:id', (req, res) => {
    const parametroId = Number(req.params.id);
    const escolhaTarefa = tarefas.find((tarefa) => tarefa.id === parametroId);
    res.send(escolhaTarefa);
  });

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
