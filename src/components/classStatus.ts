
export function getClassStatus(threshold: number, times: number[]): string {
    const onTimeOrEarly = times.filter((time) => time <= 0);

    return onTimeOrEarly.length >= threshold ? 'NO' : 'YES';
}
