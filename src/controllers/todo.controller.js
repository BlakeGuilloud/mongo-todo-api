import { SendSuccess, SendError } from 'tael';
import Shuttle from './shuttle';
import {
  destroyTodo,
  fetchTodo,
  fetchTodos,
  updateTodo,
  createTodo,
  replaceTodo,
} from '../services/todo.service';

export function deleteTodo(req, res) {
  return Promise.resolve(Shuttle.liftRequest(req))
    .then(Shuttle.liftFunction(destroyTodo, 'params.id'))
    .then(SendSuccess(res))
    .catch(SendError(res));
}

export function getTodo(req, res) {
  return Promise.resolve(Shuttle.liftRequest(req))
    .then(Shuttle.liftFunction(fetchTodo, 'params.id'))
    .then(SendSuccess(res))
    .catch(SendError(res));
}

export function getTodos(req, res) {
  return Promise.resolve(Shuttle.liftRequest(req))
    .then(Shuttle.liftFunction(fetchTodos))
    .then(SendSuccess(res))
    .catch(SendError(res));
}

export function patchTodo(req, res) {
  return Promise.resolve(Shuttle.liftRequest(req))
    .then(Shuttle.liftFunction(updateTodo, 'params.id', 'data'))
    .then(SendSuccess(res))
    .catch(SendError(res));
}

export function postTodo(req, res) {
  return Promise.resolve(Shuttle.liftRequest(req))
    .then(Shuttle.liftFunction(createTodo, 'data'))
    .then(SendSuccess(res))
    .catch(SendError(res));
}

export function putTodo(req, res) {
  return Promise.resolve(Shuttle.liftRequest(req))
    .then(Shuttle.liftFunction(replaceTodo, 'params.id', 'data'))
    .then(SendSuccess(res))
    .catch(SendError(res));
}
