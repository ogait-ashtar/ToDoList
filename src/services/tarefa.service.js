const Tarefa = require("../models/Tarefa");
const Tarefas = require("../models/Tarefa");

const findAllTarefasService = async () => {
  const tarefas = await Tarefas.find(); //await vai no banco e traz td e coloca na const
  return tarefas;
};

const findByIdTarefaService = async (parametroId) => {
  const tarefa = await Tarefas.findById(parametroId);
  return tarefa;
};

const createTarefaService = async (newTarefa) => {
  const tarefaCreated = await Tarefa.create(newTarefa);
  return newTarefa;
};

const updateTarefaService = async (id, tarefaEdited) => {
  const tarefaUpdate = await Tarefas.findByIdAndUpdate(id, tarefaEdited);
  return tarefaUpdate;
};

const deleteTarefaService = async (id) => {
  return await Tarefas.findByIdAndDelete(id);
};

module.exports = {
  findAllTarefasService,
  findByIdTarefaService,
  createTarefaService,
  updateTarefaService,
  deleteTarefaService,
};
