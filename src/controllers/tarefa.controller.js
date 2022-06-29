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
  const parametroId = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(parametroId)) {//ver c o id é valido no mongoose
    res.status(400).send({ message: "Id inválido" }); //verifica c recebeu um id
  }

  const escolhaTarefa = await tarefasService.findByIdTarefaService(parametroId); //passou para o service ele buscou no array e retornou

  if (!escolhaTarefa) {
    res.status(404).send({ message: "Tarefa não encontrada" }); // valida c retornar vazio
  }

  res.send(escolhaTarefa);
};

const createTarefaController = (req, res) => {
  const tarefa = req.body;

  if (!tarefa.tarefa || !tarefa.descricao) {
    return res
      .status(400)
      .send({ message: "Envie envie todos os campos da tarefa!" });
  }

  const newTarefa = tarefasService.createTarefaService(tarefa);
  res.status(201).send({ message: "Tarefa criada com sucesso!", newTarefa });
};

const updateTarefaController = (req, res) => {
  const idParam = Number(req.params.id);

  if (!idParam) {
    //valida c o id é válido
    return res.status(400).send({ message: "Id inválido" });
  }

  const tarefaEdit = req.body;

  if (!tarefaEdit.tarefa || !tarefaEdit.descricao) {
    return res
      .status(400)
      .send({ message: "Envie envie todos os campos da tarefa!" });
  }

  const updatedTarefa = tarefasService.updateTarefaService(idParam, tarefaEdit);
  res.send({ message: "Tarefa atualizada com sucesso!", updatedTarefa });
};

const deleteTarefaController = (req, res) => {
  const idParam = Number(req.params.id);

  if (!idParam) {
    return res.status(400).send({ message: "Id inválido" });
  }

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