'use strict';


/**
 * Create a new review
 *
 * body Review 
 * no response value expected for this operation
 **/
exports.createReview = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Delete a review by ID
 *
 * reviewId String 
 * no response value expected for this operation
 **/
exports.deleteReview = function(reviewId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Delete all reviews (use with caution)
 *
 * no response value expected for this operation
 **/
exports.deleteReviews = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Retrieve a review by ID
 *
 * reviewId String 
 * returns Review
 **/
exports.getReviewById = function(reviewId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "createdAt" : "2023-02-15T10:00:00Z",
  "rank" : 4,
  "id" : 32,
  "text" : "Great read, highly recommend!",
  "userId" : 12,
  "bookId" : 22
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieve all reviews
 *
 * returns List
 **/
exports.getReviews = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "createdAt" : "2023-02-15T10:00:00Z",
  "rank" : 4,
  "id" : 32,
  "text" : "Great read, highly recommend!",
  "userId" : 12,
  "bookId" : 22
}, {
  "createdAt" : "2023-02-15T10:00:00Z",
  "rank" : 4,
  "id" : 32,
  "text" : "Great read, highly recommend!",
  "userId" : 12,
  "bookId" : 22
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Partially update a review by ID
 *
 * body Object 
 * reviewId String 
 * no response value expected for this operation
 **/
exports.patchReview = function(body,reviewId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Partially update reviews (not typical, but added as per request)
 *
 * body Object 
 * no response value expected for this operation
 **/
exports.patchReviews = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Replace all reviews (not typical, but added as per request)
 *
 * body List 
 * no response value expected for this operation
 **/
exports.replaceReviews = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Update a review by ID
 *
 * body Review 
 * reviewId String 
 * no response value expected for this operation
 **/
exports.updateReview = function(body,reviewId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

