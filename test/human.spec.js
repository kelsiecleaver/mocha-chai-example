var chai = require("chai");

var expect = chai.expect;
var should = chai.should();
var Human = require('../human.js');

describe('Human Class', function(){

  var human = Human;
  var nakaz;
  beforeEach(function(){
    var nakaz = new Human('Nakaz');
  });
  it('should be a function', function(){
    expect(human).to.be.a('function');
  });
  it('should have a property name', function(){
   var nakaz = new Human('Nakaz');
    expect(nakaz.name).to.equal('Nakaz');
  });

  it('should have a method sayName()', function(){
    var nakaz = new Human('Nakaz');
    expect(nakaz.sayName()).to.equal('Nakaz');
  });

});