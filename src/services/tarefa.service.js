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

const findAllTarefasService = () => {
  return tarefas;
};

const findByIdTarefaService = (parametroId) => {
  return tarefas.find((tarefa) => tarefa.id === parametroId);
};

const createTarefaService = (newTarefa) => {
  const newId = tarefas.length + 1; //cria um novo id
  newTarefa.id = newId; //crio um campo novo no objeto e coloca o novo id
  tarefas.push(newTarefa);
  return newTarefa;
};

const updateTarefaService = (id, tarefaEdited) => {
  tarefaEdited["id"] = id; //pego a tarefa editada e add o id
  const tarefaIndex = tarefas.findIndex((tarefa) => tarefa.id == id); //pega  a posicao no array
  tarefas[tarefaIndex] = tarefaEdited;
  return tarefaEdited;
};

const deleteTarefaService = (id) => {
  const tarefaIndex = tarefas.findIndex((tarefa) => tarefa.id == id);
  return tarefas.splice(tarefaIndex, 1);
};

module.exports = {
  findAllTarefasService,
  findByIdTarefaService,
  createTarefaService,
  updateTarefaService,
  deleteTarefaService,
};
