import express from 'express';

import {
  deleteTodo,
  getTodos,
  getTodo,
  patchTodo,
  postTodo,
  putTodo
} from '../controller/todo.controller';

const router = express.Router();

router.delete('/:id', deleteTodo);
router.get('/:id', getTodo);
router.get('/', getTodos);
router.patch('/:id', patchTodo);
router.post('/', postTodo);
router.put('/:id', putTodo);

module.exports = router;
