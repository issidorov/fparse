describe('String functions', function () {
    var Formula;
    beforeEach(function () {
        if (typeof require !== 'undefined') {
            Formula = require('../../dist/fparser-dev');
        } else {
            Formula = window.Formula;
        }
    });

    it('concat', function () {
        expect(Formula.calc('concat("foo", "bar")')).toEqual('foobar');
        expect(Formula.calc('concat("foo", " ", "bar")')).toEqual('foo bar');
    });
});
