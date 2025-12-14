'use strict';

var utils = require('../utils/writer.js');
var Favorites = require('../service/FavoritesService');

module.exports.addFavorite = function addFavorite (req, res, next, body) {
  Favorites.addFavorite(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteFavorite = function deleteFavorite (req, res, next, favoriteId) {
  Favorites.deleteFavorite(favoriteId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteFavorites = function deleteFavorites (req, res, next) {
  Favorites.deleteFavorites()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getFavoriteById = function getFavoriteById (req, res, next, favoriteId) {
  Favorites.getFavoriteById(favoriteId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getFavorites = function getFavorites (req, res, next) {
  Favorites.getFavorites()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.patchFavorite = function patchFavorite (req, res, next, body, favoriteId) {
  Favorites.patchFavorite(body, favoriteId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.patchFavorites = function patchFavorites (req, res, next, body) {
  Favorites.patchFavorites(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.replaceFavorites = function replaceFavorites (req, res, next, body) {
  Favorites.replaceFavorites(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateFavorite = function updateFavorite (req, res, next, body, favoriteId) {
  Favorites.updateFavorite(body, favoriteId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
