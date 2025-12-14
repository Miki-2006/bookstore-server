'use strict';


/**
 * Add item to cart
 *
 * no response value expected for this operation
 **/
exports.addItemToCart = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Clear the cart
 *
 * no response value expected for this operation
 **/
exports.clearCart = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Retrieve current user's cart
 *
 * returns Cart
 **/
exports.getCart = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "quantity" : 2,
  "id" : 42,
  "userId" : 123,
  "bookId" : 223
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Partially update cart items
 *
 * body Object 
 * no response value expected for this operation
 **/
exports.patchCartItems = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Replace cart items
 *
 * body List 
 * no response value expected for this operation
 **/
exports.replaceCartItems = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

