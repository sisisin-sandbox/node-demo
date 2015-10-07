var expect = require('chai').expect;
var hello = require('../hello');

describe('testデモ', function () {
	it('テストOK', function () {
		expect(true).to.be.ok;
	});
	
	it('Hello OK', function () {
		expect(hello()).to.equal('hello,world');
	});
});
