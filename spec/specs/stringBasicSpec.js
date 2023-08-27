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
});
