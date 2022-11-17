import calculate from '../logic/calculate';

describe('calculate', () => {
    it('should return an object', () => {
        expect(typeof calculate({ total: null, next: null, operation
: null }, 'AC')).toBe('object');
    });
});


describe('When button is a number', () => {
    test('If button and obj.next == 0 return {}', () => {
      obj.next = '0';
      expect(calculate(obj, '0')).toEqual({});
    });
});


