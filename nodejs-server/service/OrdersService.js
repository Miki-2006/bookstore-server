'use strict';


/**
 * Create a new order
 *
 * body Order 
 * no response value expected for this operation
 **/
exports.createOrder = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Delete an order by ID
 *
 * orderId String 
 * no response value expected for this operation
 **/
exports.deleteOrder = function(orderId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Delete all orders (use with caution)
 *
 * no response value expected for this operation
 **/
exports.deleteOrders = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Retrieve an order by ID
 *
 * orderId String 
 * returns Order
 **/
exports.getOrderById = function(orderId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "order_date" : "2023-04-01T14:00:00Z",
  "quantity" : 2,
  "id" : 42,
  "userId" : 123,
  "ordered_book_id" : 223,
  "status" : "pending"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieve all orders
 *
 * returns List
 **/
exports.getOrders = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "order_date" : "2023-04-01T14:00:00Z",
  "quantity" : 2,
  "id" : 42,
  "userId" : 123,
  "ordered_book_id" : 223,
  "status" : "pending"
}, {
  "order_date" : "2023-04-01T14:00:00Z",
  "quantity" : 2,
  "id" : 42,
  "userId" : 123,
  "ordered_book_id" : 223,
  "status" : "pending"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Partially update an order by ID
 *
 * body Object 
 * orderId String 
 * no response value expected for this operation
 **/
exports.patchOrder = function(body,orderId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Partially update orders (not typical, but added as per request)
 *
 * body Object 
 * no response value expected for this operation
 **/
exports.patchOrders = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Replace all orders (not typical, but added as per request)
 *
 * body List 
 * no response value expected for this operation
 **/
exports.replaceOrders = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Update an order by ID
 *
 * body Order 
 * orderId String 
 * no response value expected for this operation
 **/
exports.updateOrder = function(body,orderId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

