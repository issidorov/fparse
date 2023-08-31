describe('String functions', function () {
    var Fparser;
    beforeEach(function () {
        if (typeof require !== 'undefined') {
            Fparser = require('../../dist/fparser-dev');
        } else {
            Fparser = window.Formula;
        }
    });

    it('concat', function () {
        expect(Fparser.calc('concat("foo", "bar")')).toEqual('foobar');
        expect(Fparser.calc('concat("foo", " ", "bar")')).toEqual('foo bar');
    });
});
