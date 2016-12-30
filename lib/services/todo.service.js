'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createTodo = exports.updateTodo = exports.fetchTodos = exports.fetchTodo = exports.destroyTodo = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var destroyTodo = exports.destroyTodo = function () {
  var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(id) {
    var todo;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            todo = void 0;
            _context.prev = 1;
            _context.next = 4;
            return _todo2.default.findByIdAndRemove(id);

          case 4:
            todo = _context.sent;
            _context.next = 10;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context['catch'](1);
            return _context.abrupt('return', _promise2.default.reject(_context.t0));

          case 10:
            if (todo) {
              _context.next = 12;
              break;
            }

            return _context.abrupt('return', _promise2.default.reject(new _tael.NotFoundError('No todo with id ' + id + ' found')));

          case 12:
            return _context.abrupt('return', _promise2.default.resolve(todo));

          case 13:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[1, 7]]);
  }));

  return function destroyTodo(_x) {
    return _ref.apply(this, arguments);
  };
}();

var fetchTodo = exports.fetchTodo = function () {
  var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(id) {
    var todo;
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            todo = void 0;
            _context2.prev = 1;
            _context2.next = 4;
            return _todo2.default.findById(id);

          case 4:
            todo = _context2.sent;
            _context2.next = 10;
            break;

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2['catch'](1);
            return _context2.abrupt('return', _promise2.default.reject(_context2.t0));

          case 10:
            if (todo) {
              _context2.next = 12;
              break;
            }

            return _context2.abrupt('return', _promise2.default.reject(new _tael.NotFoundError('No todo with id ' + id + ' found')));

          case 12:
            return _context2.abrupt('return', _promise2.default.resolve(todo));

          case 13:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this, [[1, 7]]);
  }));

  return function fetchTodo(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

var fetchTodos = exports.fetchTodos = function () {
  var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
    var todos;
    return _regenerator2.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            todos = void 0;
            _context3.prev = 1;
            _context3.next = 4;
            return _todo2.default.find();

          case 4:
            todos = _context3.sent;
            _context3.next = 10;
            break;

          case 7:
            _context3.prev = 7;
            _context3.t0 = _context3['catch'](1);
            return _context3.abrupt('return', _promise2.default.reject(_context3.t0));

          case 10:
            if (todos.length) {
              _context3.next = 12;
              break;
            }

            return _context3.abrupt('return', _promise2.default.reject(new _tael.NotFoundError('No todos found')));

          case 12:
            return _context3.abrupt('return', _promise2.default.resolve(todos));

          case 13:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, this, [[1, 7]]);
  }));

  return function fetchTodos() {
    return _ref3.apply(this, arguments);
  };
}();

var updateTodo = exports.updateTodo = function () {
  var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4(id, data) {
    var todo;
    return _regenerator2.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            todo = void 0;
            _context4.prev = 1;
            _context4.next = 4;
            return User.findByIdAndUpdate(id, data);

          case 4:
            _context4.next = 6;
            return User.findById(id);

          case 6:
            user = _context4.sent;
            _context4.next = 12;
            break;

          case 9:
            _context4.prev = 9;
            _context4.t0 = _context4['catch'](1);
            return _context4.abrupt('return', _promise2.default.reject(_context4.t0));

          case 12:
            if (todo) {
              _context4.next = 14;
              break;
            }

            return _context4.abrupt('return', _promise2.default.reject(new _tael.NotFoundError('No todo with id ' + id + ' found')));

          case 14:
            return _context4.abrupt('return', _promise2.default.resolve(todo));

          case 15:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, this, [[1, 9]]);
  }));

  return function updateTodo(_x3, _x4) {
    return _ref4.apply(this, arguments);
  };
}();

var createTodo = exports.createTodo = function () {
  var _ref5 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5(data) {
    var newTodo;
    return _regenerator2.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            newTodo = void 0;
            _context5.prev = 1;
            _context5.next = 4;
            return _todo2.default.create(data);

          case 4:
            newTodo = _context5.sent;
            _context5.next = 10;
            break;

          case 7:
            _context5.prev = 7;
            _context5.t0 = _context5['catch'](1);
            return _context5.abrupt('return', _promise2.default.reject(_context5.t0));

          case 10:
            return _context5.abrupt('return', _promise2.default.resolve(newTodo));

          case 11:
          case 'end':
            return _context5.stop();
        }
      }
    }, _callee5, this, [[1, 7]]);
  }));

  return function createTodo(_x5) {
    return _ref5.apply(this, arguments);
  };
}();

var _todo = require('../models/todo.model');

var _todo2 = _interopRequireDefault(_todo);

var _tael = require('tael');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }