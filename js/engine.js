import { checkYear, calculateDaysElasped, calculatePercentage, getStartOfPeriod } from './helpers.js';
import { displayDots, clearDots, fitDotsToScreen, displayYearAndMonth } from './ui.js';

const today = new Date();

window.addEventListener('DOMContentLoaded', () => {
    document.getElementById("year").innerHTML = today.getFullYear();
    document.getElementById("interval-name").innerHTML = "Year"

    year(today);

    // expose handlers for inline `onclick` attributes
    window.monthButton = monthButton;
    window.yearButton = yearButton;
    window.decade = decade;
    window.century = century;
    window.millennium = millennium;

});

function year(today) {

    const janFirst = new Date(`${today.getFullYear()}-1-1`);
    let year_length = checkYear(today.getFullYear()) ? 366 : 365;

    // Check the length of the year (leap year or not)
    let daysElasped = calculateDaysElasped(today, janFirst);

    // Display the year progress 
    document.getElementById("year-progress").innerHTML = calculatePercentage(daysElasped, year_length).toFixed(2) + "%";
    displayYearAndMonth(daysElasped, year_length);

    return daysElasped;
}

function decade() {
    clearDots()
    // current year, start of decade, length of decade (years)
    decadePlus(10)
    document.getElementById("interval-name").innerHTML = "Decade"
    fitDotsToScreen();


}






function decadePlus(yearsInPeriod) {

    let periodLength = 0;
    const currentYear = today.getFullYear();

    // Get the start of the time period
    let startOfTimePeriod = getStartOfPeriod(currentYear, yearsInPeriod);

    let daysElasped = 0;


    for (let yearInProgress = startOfTimePeriod; yearInProgress < startOfTimePeriod + yearsInPeriod; yearInProgress++) {

        // get year at start of decade 
        let yearLength = checkYear(yearInProgress) ? 366 : 365;
        periodLength += yearLength;
        // If the year in progress is equal to the current year 
        if (yearInProgress < currentYear) {
            displayDots(yearLength, yearLength);
            daysElasped += yearLength;
        } else if (yearInProgress == currentYear) {
            daysElasped += year(today);
        }
        else {
            displayDots(0, yearLength)
        }


    }


    document.getElementById("year-progress").innerHTML = calculatePercentage(daysElasped, periodLength).toFixed(2) + "%";
    document.getElementById("year").innerHTML = startOfTimePeriod + 's';

}


function century() {

    clearDots()
    // current year, start of decade, length of decade (years)
    decadePlus(100)
    document.getElementById("interval-name").innerHTML = "Century"
    fitDotsToScreen();

}

function yearButton() {
    clearDots();
    document.getElementById("year").innerHTML = today.getFullYear();
    document.getElementById("interval-name").innerHTML = "Year"

    year(today);
    

}

function monthButton() {
    clearDots();
    const janFirst = new Date(`${today.getFullYear()}-${today.getMonth() + 1}-1`);
    const monthLength = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
    const daysInMonthElapsed = today.getDate() - 1;


    document.getElementById("year").innerHTML = `${today.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}`;
    document.getElementById("year-progress").innerHTML = calculatePercentage(daysInMonthElapsed, monthLength).toFixed(2) + "%";

    document.getElementById("interval-name").innerHTML = "Month"
    displayYearAndMonth(daysInMonthElapsed, monthLength);
}

function millennium() {
    clearDots()
    // current year, start of decade, length of decade (years)

    document.getElementById("interval-name").innerHTML = "Millennium"
    decadePlus(1000)
    fitDotsToScreen();

}