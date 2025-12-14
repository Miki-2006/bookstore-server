'use strict';


/**
 * Create a new book
 *
 * body Book 
 * no response value expected for this operation
 **/
exports.createBook = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Delete a book by ID
 *
 * bookId String 
 * no response value expected for this operation
 **/
exports.deleteBook = function(bookId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Delete all books (use with caution)
 *
 * no response value expected for this operation
 **/
exports.deleteBooks = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Retrieve a book by ID
 *
 * bookId String 
 * returns Book
 **/
exports.getBookById = function(bookId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "createdAt" : "2023-02-15T10:00:00Z",
  "quantity" : 1,
  "author" : "Jane Smith",
  "price" : 15.0,
  "description" : "The Great Book about adventure of bookworm.",
  "id" : 21,
  "title" : "The Great Book",
  "category" : "fiction"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieve all books
 *
 * returns List
 **/
exports.getBooks = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "createdAt" : "2023-02-15T10:00:00Z",
  "quantity" : 1,
  "author" : "Jane Smith",
  "price" : 15.0,
  "description" : "The Great Book about adventure of bookworm.",
  "id" : 21,
  "title" : "The Great Book",
  "category" : "fiction"
}, {
  "createdAt" : "2023-02-15T10:00:00Z",
  "quantity" : 1,
  "author" : "Jane Smith",
  "price" : 15.0,
  "description" : "The Great Book about adventure of bookworm.",
  "id" : 21,
  "title" : "The Great Book",
  "category" : "fiction"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Partially update a book by ID
 *
 * body Object 
 * bookId String 
 * no response value expected for this operation
 **/
exports.patchBook = function(body,bookId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Partially update books (not typical, but added as per request)
 *
 * body Object 
 * no response value expected for this operation
 **/
exports.patchBooks = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Replace all books (not typical, but added as per request)
 *
 * body List 
 * no response value expected for this operation
 **/
exports.replaceBooks = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Update a book by ID
 *
 * body Book 
 * bookId String 
 * no response value expected for this operation
 **/
exports.updateBook = function(body,bookId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

