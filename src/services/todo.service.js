import Todo from '../models/todo.model';
import { NotFoundError } from 'tael';

export async function destroyTodo(id) {
  let todo;

  try {
    todo = await Todo.findByIdAndRemove(id);
  } catch (err) {
    return Promise.reject(err);
  }

  if (!todo) return Promise.reject(new NotFoundError(`No todo with id ${id} found`));

  return Promise.resolve(todo);
}

export async function fetchTodo(id) {
  let todo;

  try {
    todo = await Todo.findById(id);
  } catch (err) {
    return Promise.reject(err);
  }

  if (!todo) return Promise.reject(new NotFoundError(`No todo with id ${id} found`));

  return Promise.resolve(todo);
}

export async function fetchTodos() {
  let todos;

  try {
    todos = await Todo.find();
  } catch (err) {
    return Promise.reject(err);
  }

  if (!todos.length) return Promise.reject(new NotFoundError(`No todos found`));

  return Promise.resolve(todos);
}

export async function updateTodo(id, data) {
  let todo;

  try {
    await User.findByIdAndUpdate(id, data);

    user = await User.findById(id);
  } catch (err) {
    return Promise.reject(err);
  }

  if (!todo) return Promise.reject(new NotFoundError(`No todo with id ${id} found`));

  return Promise.resolve(todo);
}

export async function createTodo(data) {
  let newTodo;

  try {
    newTodo = await Todo.create(data);
  } catch (err) {
    return Promise.reject(err);
  }

  return Promise.resolve(newTodo);
}
