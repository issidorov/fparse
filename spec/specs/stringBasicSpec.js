describe('String basic feature', function () {
    var Fparser;
    beforeEach(function () {
        if (typeof require !== 'undefined') {
            Fparser = require('../../dist/fparser-dev');
        } else {
            Fparser = window.Formula;
        }
    });

    it('support parsing with double quotes', function () {
        expect(Fparser.calc('"foo"')).toEqual('foo');
    });

    it('support usage by variable', function () {
        expect(Fparser.calc('x', { x: 'foo' })).toEqual('foo');
        expect(Fparser.calc('[myVar]', { myVar: 'foo' })).toEqual('foo');
    });
});
