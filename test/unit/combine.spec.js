var should = require('should')
var combine = require('../../app/combine')

describe('combine', function () {

  it('exists', function () {
    should.exist(combine)
  })

  it('is a function', function(){
  	(typeof combine).should.equal('function');
  })

  it('returns an object', function(){
  	var actual = combine([]);
  	(typeof actual).should.equal('object');
  })

  it('accepts an array input', function(){
  	(function(){ combine([]) }).should.not.throw();
  })

  it('throws an error when the input is not an array', function(){
  	(function(){ combine('a string') }).should.throw();
  	(function(){ combine(2) }).should.throw();
  	(function(){ combine({}) }).should.throw();
  })

  it('returns an object when given an array', function(){
  	var actual = combine([]);
  	actual.should.eql({});
  })

  it('doesnt accept arrays of anything other than objects', function(){
  	(combine([2, {}, 'a string', []])).should.throw();
  })

	it('returns an object from a list of objects', function(){
		var actual = combine([
				{ 'course-id': 123 }, 
		 		{ title: 'Dev Mountain' },
		 		{ start_date: new Date(2014, 2, 14) }
			]);
		actual.should.eql({
			'course-id': 123,
	    title: 'Dev Mountain',
	    start_date: new Date(2014, 2, 14)
		});
	})

})