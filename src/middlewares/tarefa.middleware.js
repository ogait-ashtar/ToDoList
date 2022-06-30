const mongoose = require("mongoose");

const validId = (req, res, next) => {
  const idParam = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    res.status(400).send({ message: "Id inválido" }); //verifica c recebeu um id
  }
  next();
};

const validObjectBody = (req, res, next) => {
  const tarefa = req.body;

  if (!tarefa.tarefa || !tarefa.descricao) {
    return res
      .status(400)
      .send({ message: "Envie envie todos os campos da tarefa!" });
  }
  next();
};

module.exports = {
  validId,
  validObjectBody,
};
