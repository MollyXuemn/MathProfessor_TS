import { getClassStatus } from './classStatus';

export function getWeekStatus(threshold: number, weekTimes: number[][]): string {
    const totalClasses = weekTimes.length;
    const cancelledClasses = weekTimes.filter((times) => getClassStatus(threshold, times) === 'YES').length;

    const percentageCancelled = (cancelledClasses / totalClasses) * 100;
    return `${percentageCancelled.toFixed(2)}%`;
}
