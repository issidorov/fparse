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

    it('concat example from README', function () {
        const fObj = new Formula('concat("Size: ", x * 1000, " mm")');
        let result = fObj.evaluate({ x: 1.5 });
        expect(result).toEqual('Size: 1500 mm');
    });
});
