var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var _model = new Schema({
  tipo: { type: String, required: true},
  valor: { type: Number, required: "O valor é obrigatório"},
  descricao: { type: String, required: "O campo descrição é obrigatório"},
  observacao: String,
  data: { type: Date, default: Date.now },
  dataCadastro: { type: Date, default: Date.now },
  i_categoria: {
    type: Schema.Types.ObjectId,
    ref: 'categorias'
  },
  i_usuario: {
    type: Schema.Types.ObjectId,
    ref: 'usuarios',
    required: true
  }
});

// _model.pre('save', function (next) {
  // var mov = this;
  // var usuarioModel = mongoose.model("usuarios");
  // var usuarioId = mov.i_usuario;
  // var saldo;
  // usuarioModel.findById(usuarioId).then(function(usuario){
  //   var saldo = usuario.saldo;
  //   console.log(mov.tipo);
  //   if ( mov.tipo == 'receita' ){
  //       saldo += mov.valor;
  //   } else {
  //       saldo -= mov.valor;
  //   }
    
  //   usuarioModel.findByIdAndUpdate(usuarioId, {saldo : saldo}).then(function(){
  //     next();
  //   }, function(erro){
  //     var err = new Error('Erro ao cadastrar movimentação');
  //     next(err);
  //   });
//   });
  
//   var now = new Date();
//   this.dataCadastro = now.getFullYear()+'-'+(now.getMonth()+1)+'-'+now.getDate();
// });

// _model.post('find', function (next) {
//   console.log(this);
//   this.data = this.data.splice(11);
  // var now = this.data;
  // this.data = now.getFullYear()+'-'+(now.getMonth()+1)+'-'+now.getDate();
  // this.dataCadastro = now.getFullYear()+'-'+(now.getMonth()+1)+'-'+now.getDate();
  // next();
// })

mongoose.model('movimentacoes', _model);
