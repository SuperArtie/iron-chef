'use strict';

var Recipe = require('../models/recipe');
var moment  = require('moment');
var _       = require('lodash');

exports.index = function(req, res){
  Recipe.all(function(err, recipes){
      res.render('recipes/index', {recipes:recipes});
  });
};
