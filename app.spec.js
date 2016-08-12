var push_pop = require('./app');

describe('push pop functions', function() {
    it('nothing, something, no pop', function() {
        expect(push_pop([], [2])).toEqual([ 2 ]);
    });

    it('intial array has something, nothing, no pop', function() {
        expect(push_pop([1, 2])).toEqual([1, 2]);
    });

    it('intial array has something, push array has nothing, nothing to pop', function() {
        expect(push_pop([1, 'c'])).toEqual([1, 'c']);
    });

    it('something, something, pop 1', function() {
        expect(push_pop([1, 2], ['a', 'b', 'c'], 1)).toEqual([1, 2, 'a', 'b']);
    });

    it('something, something, pop 2', function() {
        expect(push_pop([1, 2], ['a', 'b', 'c'], 1)).toEqual([1, 2, 'a']);
    });

    it('something, nothing, pop 2', function() {
        expect(push_pop([1, 2], [], 2)).toEqual([]);
    });

    it('nothing, nothing, pop 99', function() {
        expect(push_pop([], [], 99)).toEqual([]);
    });

    it('nothing, something, pop 99', function() {
        expect(push_pop([], [1, 2, 3], 99)).toEqual([]);
    });

    it('something, nothing, pop 99', function() {
        expect(push_pop([1, 2, 3], [], 99)).toEqual([]);
    });

    it('something, something, float', function() {
        expect(push_pop([1, 2], ['a', 'b', 'c'], 1.5)).toEqual([1, 2, 'a', 'b', 'c']);
    });

    it('nothing, something, negative integer', function() {
        expect(push_pop([], ['a', 'b'], -99)).toEqual(['a', 'b']);
    });

    it('something, something, negative integer', function() {
        expect(push_pop(['z', 'y'], ['a', 'b'], -99)).toEqual(['z', 'y', 'a', 'b']);
    });

    it('something, something, non-integer', function() {
        expect(push_pop(['z', 'y'], ['a', 'b'], true)).toEqual(['z', 'y', 'a', 'b']);
    });

    it('nothing, nothing, non-integer', function() {
        expect(push_pop([], [], 'sadfs')).toEqual([]);
    });

    it('non-array, non-array, integer', function() {
        expect(push_pop('haha', 'sdfs', 1)).toEqual([]);
    });

    it('non-array, array, integer', function() {
        expect(push_pop('haha', [1, 2, 3], 1)).toEqual([1, 2]);
    });

    it('array, non-array, integer', function() {
        expect(push_pop([1, 2, 3], 'dfgasdg', 1)).toEqual([1, 2]);
    });

    it('non-array, non-array, integer', function() {
        expect(push_pop(2342, 'dfgasdg', 1)).toEqual([]);
    });

    it('non-array, array, non-integer', function() {
        expect(push_pop(2342, [1, 2, 3], 'nope')).toEqual([1, 2, 3]);
    });

    it('array, nested-array, integer', function() {
        expect(push_pop([1, 2], [
            [1, 2]
        ], 1)).toEqual([1, 2]);
    });

    it('array, nested-array, integer', function() {
        expect(push_pop([1, 2], [
            [1, 2], 'a', 'b'
        ], 1)).toEqual([1, 2, [1, 2], 'a']);
    });

});
