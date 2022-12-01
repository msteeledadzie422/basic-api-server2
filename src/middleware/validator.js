'use strict';

const validator = (req, res, next) => {
  req.query.name ? next() : next('Name is required for this search.');
};

module.exports = validator;