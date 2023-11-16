import { getClassStatus } from '../src/components/classStatus';

// Test cases for getClassStatus method
describe('getClassStatus', () => {
    test('should return NO when enough students are on time or early', () => {
        const times = [-2, -1, 0, 1, 2];
        const result = getClassStatus(3, times);
        expect(result).toBe('NO');
    });

    test('should return YES when not enough students are on time or early', () => {
        const times = [-2, -1, 0, 1, 2];
        const result = getClassStatus(4, times);
        expect(result).toBe('YES');
    });
});
