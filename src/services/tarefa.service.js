const Tarefas = require("../models/Tarefa");

const findAllTarefasService = async () => {
  const tarefas = await Tarefas.find(); //await vai no banco e traz td e coloca na const
  return tarefas;
};

const findByIdTarefaService = async (parametroId) => {
  const tarefa = await Tarefas.findById(parametroId);
  return tarefa
};

const createTarefaService = (newTarefa) => {
  newTarefa.id = indexNumber;
  indexNumber++;
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
