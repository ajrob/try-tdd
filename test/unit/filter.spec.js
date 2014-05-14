var should = require('should')
var filter = require('../../app/filter')

describe('filter', function(){
	it('exists', function(){
		should.exist(filter)
	})

	it('is a function', function(){
		(typeof filter).should.equal('function')
	})

	it('returns an array', function(){
		var actual = filter();
		Array.isArray(actual).should.equal.true;
	})

	it('takes a list and a condition', function(){
		filter.length.should.equal(2);
	})

	// it('returns an empty array when given an array', function(){
	// 	var actual = filter([], function(){});
	// 	actual.should.equal([]);
	// })

})

/*
Description:

filter(list, condition){
	//Implement
}

*/