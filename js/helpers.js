// From Geeks For Geeks. Check if year is a leap year 
export function checkYear(n) {
    // Check if n is divisible by 4
    if (n % 4 === 0) {

        // If it's divisible by 100, it should also be 
        // divisible by 400 to be a leap year
        if (n % 100 === 0) {
            return n % 400 === 0;
        }
        return true;
    }
    return false;
}


export function calculateDaysElasped(today, janFirst) {
    // daysElasped = today - janFirst;
    const milisecondsInADay = 86400000;
    return Math.floor((today - janFirst) / milisecondsInADay);
}


export function calculatePercentage(daysElasped, timeLength) {
    // Calculate 
    return parseFloat((parseFloat(daysElasped) / parseFloat(timeLength)) * 100)

}


export function getStartOfPeriod(currentYear, periodLength) {
    return Math.floor(currentYear / periodLength) * periodLength;
}