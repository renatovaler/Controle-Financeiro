var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var _model = new Schema({
  tipo: { type: String, required: true},
  valor: { type: Number, required: "O valor é obrigatório"},
  data: {type: Date, required: "A data é obrigatória"},
  descricao: { type: Number, required: "O campo descrição é obrigatório"},
  observacao: String,
  frequencia: Number,
  tipoFrequencia: String,
  parcelas: Number,
  expirado: Boolean,
  i_categoria: {
    type: Schema.Types.ObjectId,
    ref: 'categorias'
  },
  i_usuario: {
    type: Schema.Types.ObjectId,
    ref: 'usuarios',
    required: true
  },
  dataCadastro: { type: Date, default: Date.now }
});

mongoose.model('agendamentos', _model);
