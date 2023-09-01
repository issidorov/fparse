describe('String basic feature', function () {
    var Formula;
    beforeEach(function () {
        if (typeof require !== 'undefined') {
            Formula = require('../../dist/fparser-dev');
        } else {
            Formula = window.Formula;
        }
    });

    it('support parsing with double quotes', function () {
        expect(Formula.calc('"foo"')).toEqual('foo');
    });

    it('allow spaces', function () {
        expect(Formula.calc('" "')).toEqual(' ');
        expect(Formula.calc('"   "')).toEqual('   ');
    });

    it('allow special chars', function () {
        expect(Formula.calc('"["')).toEqual('[');
        expect(Formula.calc('"]"')).toEqual(']');
        expect(Formula.calc('"("')).toEqual('(');
        expect(Formula.calc('")"')).toEqual(')');
        expect(Formula.calc('"*+-/^"')).toEqual('*+-/^');
    });

    it('correct in parentheses', function () {
        expect(Formula.calc('(")")')).toEqual(')');
    });

    it('support usage by variable', function () {
        expect(Formula.calc('x', { x: 'foo' })).toEqual('foo');
        expect(Formula.calc('[myVar]', { myVar: 'foo' })).toEqual('foo');
    });

    it('support usage by custom function', function () {
        const myFnFoo = (x) => 'foo' + x;
        expect(Formula.calc('myFnFoo("bar")', { myFnFoo: myFnFoo })).toEqual('foobar');
        expect(Formula.calc('myFnFoo(x)', { myFnFoo: myFnFoo, x: 'bar' })).toEqual('foobar');
        expect(Formula.calc('myFnFoo([myVar])', { myFnFoo: myFnFoo, myVar: 'bar' })).toEqual('foobar');
    });

    it('blocking math operator "*" of number and variable', function () {
        const expectedError = 'Math operators required type of number: given is string';
        expect(() => Formula.calc('2x', { x: 'foo' })).toThrowError(expectedError);
    });

    it('blocking math operator "+"', function () {
        const provider = ['"foo" + 123', '123 + "foo"', '"foo" + "bar"', '("foo") + 123', '123 + ("foo")'];

        provider.forEach(function (formula) {
            expect(() => Formula.calc(formula)).toThrowError('Math operators required type of number: given is string');
        });
    });

    it('blocking math operator "-"', function () {
        const provider = ['"foo" - 123', '123 - "foo"', '"foo" - "bar"', '("foo") - 123', '123 - ("foo")'];

        provider.forEach(function (formula) {
            expect(() => Formula.calc(formula)).toThrowError('Math operators required type of number: given is string');
        });
    });

    it('blocking math operator "*"', function () {
        const provider = ['"foo" * 123', '123 * "foo"', '"foo" * "bar"', '("foo") * 123', '123 * ("foo")'];

        provider.forEach(function (formula) {
            expect(() => Formula.calc(formula)).toThrowError('Math operators required type of number: given is string');
        });
    });

    it('blocking math operator "/"', function () {
        const provider = ['"foo" / 123', '123 / "foo"', '"foo" / "bar"', '("foo") / 123', '123 / ("foo")'];

        provider.forEach(function (formula) {
            expect(() => Formula.calc(formula)).toThrowError('Math operators required type of number: given is string');
        });
    });

    it('blocking math operator "^"', function () {
        const provider = ['"foo" ^ 123', '123 ^ "foo"', '"foo" ^ "bar"', '("foo") ^ 123', '123 ^ ("foo")'];

        provider.forEach(function (formula) {
            expect(() => Formula.calc(formula)).toThrowError('Math operators required type of number: given is string');
        });
    });

    it('blocking math functions', function () {
        const provider = ['sin("foo")', 'sin(("foo"))'];

        provider.forEach(function (formula) {
            expect(() => Formula.calc(formula)).toThrowError('Math functions required type of number: given is string');
        });
    });
});
