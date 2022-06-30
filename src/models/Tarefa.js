const mongoose = require("mongoose");

const TarefaSchema = new mongoose.Schema({
  tarefa: {
    type: String,
    required: true,
  },
  descricao: {
    type: String,
    required: true,
  },
});

const Tarefa = mongoose.model("tarefas", TarefaSchema); //falando q o ttarefas do banco é o tarefaSchema
module.exports = Tarefa;
