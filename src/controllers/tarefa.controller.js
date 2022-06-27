const tarefasService = require("../services/tarefa.service");

const findAllTarefasController = (req, res) => {
  const tarefas = tarefasService.findAllTarefasService();
  res.send(tarefas);
};

const findByIdTarefaController = (req, res) => {
  const parametroId = Number(req.params.id);
  const escolhaTarefa = tarefasService.findByIdTarefaService(parametroId);
  res.send(escolhaTarefa);
};

const createTarefaController = (req, res) => {
  const tarefa = req.body;
  const newTarefa = tarefasService.createTarefaService(tarefa);
  res.send({ message: "Tarefa criada com sucesso!" , newTarefa});
};

const updateTarefaController = (req, res) => {
  const idParam = Number(req.params.id);
  const tarefaEdit = req.body;
  const updatedTarefa = tarefasService.updateTarefaService(idParam, tarefaEdit);
  res.send({ message: "Tarefa atualizada com sucesso!" , updatedTarefa});
};

const deleteTarefaController = (req, res) => {
  const idParam = req.params.id;
  tarefasService.deleteTarefaService(idParam);
  res.send({ message: "Tarefa deletada com sucesso!" });
};

module.exports = {
  findAllTarefasController,
  findByIdTarefaController,
  createTarefaController,
  updateTarefaController,
  deleteTarefaController,
};
