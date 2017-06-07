'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _todo = require('../controllers/todo.controller');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.delete('/:id', _todo.deleteTodo);
router.get('/:id', _todo.getTodo);
router.get('/', _todo.getTodos);
router.patch('/:id', _todo.patchTodo);
router.post('/', _todo.postTodo);
// router.put('/:id', putTodo);

module.exports = router;
