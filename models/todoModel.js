const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let todoSchema = new Schema({
    username: String,
    todo: String,
    isDone: Boolean,
    hasAttachment: Boolean
},{collection:'todos'});

let Todos = mongoose.model('Todos',todoSchema);

module.exports = Todos;