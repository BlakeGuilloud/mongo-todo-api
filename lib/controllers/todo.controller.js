'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

exports.deleteTodo = deleteTodo;
exports.getTodo = getTodo;
exports.getTodos = getTodos;
exports.patchTodo = patchTodo;
exports.postTodo = postTodo;

var _tael = require('tael');

var _shuttle = require('./shuttle');

var _shuttle2 = _interopRequireDefault(_shuttle);

var _todo = require('../services/todo.service');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function deleteTodo(req, res) {
  return _promise2.default.resolve(_shuttle2.default.liftRequest(req)).then(_shuttle2.default.liftFunction(_todo.destroyTodo, 'params.id')).then((0, _tael.SendSuccess)(res)).catch((0, _tael.SendError)(res));
}

function getTodo(req, res) {
  return _promise2.default.resolve(_shuttle2.default.liftRequest(req)).then(_shuttle2.default.liftFunction(_todo.fetchTodo, 'params.id')).then((0, _tael.SendSuccess)(res)).catch((0, _tael.SendError)(res));
}

function getTodos(req, res) {
  return _promise2.default.resolve(_shuttle2.default.liftRequest(req)).then(_shuttle2.default.liftFunction(_todo.fetchTodos)).then((0, _tael.SendSuccess)(res)).catch((0, _tael.SendError)(res));
}

function patchTodo(req, res) {
  return _promise2.default.resolve(_shuttle2.default.liftRequest(req)).then(_shuttle2.default.liftFunction(_todo.updateTodo, 'params.id', 'data')).then((0, _tael.SendSuccess)(res)).catch((0, _tael.SendError)(res));
}

function postTodo(req, res) {
  return _promise2.default.resolve(_shuttle2.default.liftRequest(req)).then(_shuttle2.default.liftFunction(_todo.createTodo, 'data')).then((0, _tael.SendSuccess)(res)).catch((0, _tael.SendError)(res));
}

// export function putTodo(req, res) {
//   return Promise.resolve(Shuttle.liftRequest(req))
//     .then(Shuttle.liftFunction(replaceTodo, 'params.id', 'data'))
//     .then(SendSuccess(res))
//     .catch(SendError(res));
// }