import { getWeekStatus } from '../src/components/weekStatus';

// Test cases for getWeekStatus method
describe('getWeekStatus', () => {
    test('should calculate the percentage of cancelled classes in the week', () => {
        const weekTimes = [
            [-2, -1, 0, 1, 2],
            [-2, -2, 0, 1, 2],
            [1, 2, 3, 4, 5],
        ];
        const result = getWeekStatus(3, weekTimes);
        expect(result).toBe("33.33%");
    });

    test('should handle an empty week schedule', () => {
        const result = getWeekStatus(3, []);
        expect(result).toBe("0.00%");
    });
});