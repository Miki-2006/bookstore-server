'use strict';


/**
 * Signing up a new user
 *
 * body User 
 * no response value expected for this operation
 **/
exports.createUser = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Delete a user by ID
 *
 * userId String 
 * no response value expected for this operation
 **/
exports.deleteUser = function(userId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Delete all users (use with caution)
 *
 * no response value expected for this operation
 **/
exports.deleteUsers = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Retrieve a user by ID
 *
 * userId String 
 * returns User
 **/
exports.getUserById = function(userId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "createdAt" : "2023-02-15T10:00:00Z",
  "password" : "sjjkkkIIIh8",
  "phone" : "+82 10 87623982",
  "last_name" : "doe",
  "id" : 23,
  "first_name" : "john"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get list of users
 *
 * returns List
 **/
exports.getUsers = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "createdAt" : "2023-02-15T10:00:00Z",
  "password" : "sjjkkkIIIh8",
  "phone" : "+82 10 87623982",
  "last_name" : "doe",
  "id" : 23,
  "first_name" : "john"
}, {
  "createdAt" : "2023-02-15T10:00:00Z",
  "password" : "sjjkkkIIIh8",
  "phone" : "+82 10 87623982",
  "last_name" : "doe",
  "id" : 23,
  "first_name" : "john"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Partially update a user by ID
 *
 * body Object 
 * userId String 
 * no response value expected for this operation
 **/
exports.patchUser = function(body,userId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Partially update users (not typical, but added as per request)
 *
 * body Object 
 * no response value expected for this operation
 **/
exports.patchUsers = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Replace all users (not typical, but added as per request)
 *
 * body List 
 * no response value expected for this operation
 **/
exports.replaceUsers = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Update a user by ID
 *
 * body User 
 * userId String 
 * no response value expected for this operation
 **/
exports.updateUser = function(body,userId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

