/* eslint-disable no-undef */
import operate from '../../logic/operate';
describe('operate', () => {
    it('should return a number', () => {
        expect(typeof operate(1, 2, '+')).toBe('number');
    });
});

test('2+2 return 4', () => {
    expect(operate ('2', '2', '+')).toBe('4')
})

test('2 x 2 returns 4', () => {
    expect(operate('2', '2', 'x')).toBe('4');
  });
