'use strict';

var Mongo       = require('mongodb');
var _           = require('lodash');

/*******************
 * CONSTRUCTOR     *
 *******************/
function Recipe(o){
  this.name        = o.name;
  this.photo       = o.photo;
  this.ingredients = o.ingredients;
  this.steps       = o.steps;
}

/*******************
 * GETTER          *
 *******************/
Object.defineProperty(Recipe, 'collection', {
  get: function(){return global.mongodb.collection('recipes');}
});

/*******************
 * FIND ALL        *
 *******************/
Recipe.all = function(cb){
  Recipe.collection.find().toArray(cb);
};

module.exports = Recipe;
