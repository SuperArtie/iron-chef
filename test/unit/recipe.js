/* jshint expr:true */
/* global describe, it, before, beforeEach */

'use strict';

var expect    = require('chai').expect;
var Recipe    = require('../../app/models/recipe');
var dbConnect = require('../../app/lib/mongodb');
var Mongo     = require('mongodb');
var cp        = require('child_process');
var db        = 'iron-chef-test';

describe('Recipe', function(){
  before(function(done){
    dbConnect(db, function(){
      done();
    });
  });
  beforeEach(function(done){
    cp.execFile(__dirname + '/../scripts/clean-db.sh', [db], {cwd:__dirname + '/../scripts'}, function(){
      done();
    });
  });
  describe('constructor', function(){
    it('should make a recipe object', function(){
      var o = {name: 'BBQ', photo:'bbq.com/bbq.png', ingredients:['ketchup', 'onions', 'brown sugar'], steps:['step 1', 'step 2', 'step 3']};
      var rec = new Recipe(o);
      expect(rec).to.be.instanceof(Recipe);
      expect(rec.name).to.equal('BBQ');
      expect(rec.photo).to.equal('bbq.com/bbq.png');
      expect(rec.ingredients.length).to.equal(3);
      expect(rec.steps.length).to.equal(3);
    });
  });
  describe('.all', function(){
    it('should find all recipes', function(done){
      Recipe.all(function(err, recipes){
        expect(recipes.length).to.equal(3);
        done();
      });
    });
  });
});
