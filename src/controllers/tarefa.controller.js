const mongoose = require("mongoose");
const tarefasService = require("../services/tarefa.service");

const findAllTarefasController = async (req, res) => {
  const allTarefas = await tarefasService.findAllTarefasService();

  if (allTarefas.length == 0) {
    return res.status(404).send({ message: "Nenhuma tarefa está cadastrada" });
  }

  res.send(allTarefas);
};

const findByIdTarefaController = async (req, res) => {
  const idParam = req.params.id;
  const chosenTarefa = await tarefasService.findByIdTarefaService(idParam); //passou para o service ele buscou no array e retornou

  if (!chosenTarefa) {
    res.status(404).send({ message: "Tarefa não encontrada" }); // valida c retornar vazio
  }

  res.send(chosenTarefa);
};

const createTarefaController = async (req, res) => {
  const tarefa = req.body;
  const newTarefa = await tarefasService.createTarefaService(tarefa);
  res.status(201).send({ message: "Tarefa criada com sucesso!", newTarefa });
};

const updateTarefaController = async (req, res) => {
  const idParam = req.params.id;
  const editTarefa = req.body;
  const updatedTarefa = await tarefasService.updateTarefaService(
    idParam,
    editTarefa
  );
  res.send({ message: "Tarefa atualizada com sucesso!", updatedTarefa });
};

const deleteTarefaController = async (req, res) => {
  const idParam = req.params.id;
  await tarefasService.deleteTarefaService(idParam);
  res.send({ message: "Tarefa deletada com sucesso!" });
};

module.exports = {
  findAllTarefasController,
  findByIdTarefaController,
  createTarefaController,
  updateTarefaController,
  deleteTarefaController,
};
