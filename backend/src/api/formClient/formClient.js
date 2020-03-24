const restful = require('node-restful');
const mongoose = require('mongoose');

const formClientSchema = mongoose.Schema({
  name: { type: String, required: true },  
  cpf: { type: Number, required: true },
  rg: { type: Number, required: true },
  birthday: { type: String, required: true },
  occupation: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },  
})

module.exports = restful.model('formClient', formClientSchema);