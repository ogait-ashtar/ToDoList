const { default: mongoose } = require("mongoose");
const tarefasService = require("../services/tarefa.service");

const findAllTarefasController = async (req, res) => {
  const tarefas = await tarefasService.findAllTarefasService();

  if (tarefas.length == 0) {
    // c o array esta vazio manda message
    return res.status(404).send({ message: "Nenhuma tarefa está cadastrada" });
  }

  res.send(tarefas);
};

const findByIdTarefaController = async (req, res) => {
  const idParam = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(idParam)) {//ver c o id é valido no mongoose
    res.status(400).send({ message: "Id inválido" }); //verifica c recebeu um id
  }

  const escolhaTarefa = await tarefasService.findByIdTarefaService(idParam); //passou para o service ele buscou no array e retornou

  if (!escolhaTarefa) {
    res.status(404).send({ message: "Tarefa não encontrada" }); // valida c retornar vazio
  }

  res.send(escolhaTarefa);
};

const createTarefaController = async (req, res) => {
  const tarefa = req.body;

  if (!tarefa.tarefa || !tarefa.descricao) {
    return res
      .status(400)
      .send({ message: "Envie envie todos os campos da tarefa!" });
  }

  const newTarefa = await tarefasService.createTarefaService(tarefa);
  res.status(201).send({ message: "Tarefa criada com sucesso!", newTarefa });
};

const updateTarefaController = async (req, res) => {
  const idParam = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(idParam)) {//ver c o id é valido no mongoose
    res.status(400).send({ message: "Id inválido" }); //verifica c recebeu um id
  }


  const tarefaEdit = req.body;

  if (!tarefaEdit.tarefa || !tarefaEdit.descricao) {
    return res
      .status(400)
      .send({ message: "Envie envie todos os campos da tarefa!" });
  }

  const updatedTarefa = await tarefasService.updateTarefaService(idParam, tarefaEdit);
  res.send({ message: "Tarefa atualizada com sucesso!", updatedTarefa });
};

const deleteTarefaController = async (req, res) => {
  const idParam = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(idParam)) {//ver c o id é valido no mongoose
    res.status(400).send({ message: "Id inválido" }); //verifica c recebeu um id
  }


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
