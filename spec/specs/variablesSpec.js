describe('Variable tests', function() {
    var Fparser;
    beforeEach(function() {
        if (typeof require !== 'undefined') {
            Fparser = require('../../dist/fparser-dev');
        } else {
            Fparser = window.Formula;
        }
    });

    it('parses 3*x correctly', function() {
        expect(Fparser.calc('3*x', { x: 5 })).toEqual(15);
    });

    it('parses -3*x correctly', function() {
        expect(Fparser.calc('-3*x', { x: 5 })).toEqual(-15);
    });
    it('parses 3*-x correctly', function() {
        expect(Fparser.calc('3*-x', { x: 5 })).toEqual(-15);
    });
    it('parses -3x correctly', function() {
        expect(Fparser.calc('-3x', { x: 5 })).toEqual(-15);
    });
    it('parses -3x^2 correctly', function() {
        expect(Fparser.calc('-3x^2', { x: 5 })).toEqual(-75);
    });
    it('parses -3x^2 correctly', function() {
        expect(Fparser.calc('-3x^2', { x: 5 })).toEqual(-75);
    });
    it('parses -z+t correctly (Issue #22)', function() {
        expect(Fparser.calc('-z+t', { z: 5, t: 3 })).toEqual(-2);
    });
});
