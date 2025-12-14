'use strict';

var utils = require('../utils/writer.js');
var Cart = require('../service/CartService');

module.exports.addItemToCart = function addItemToCart (req, res, next) {
  Cart.addItemToCart()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.clearCart = function clearCart (req, res, next) {
  Cart.clearCart()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getCart = function getCart (req, res, next) {
  Cart.getCart()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.patchCartItems = function patchCartItems (req, res, next, body) {
  Cart.patchCartItems(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.replaceCartItems = function replaceCartItems (req, res, next, body) {
  Cart.replaceCartItems(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
