let daysHTML = "";

export function clearDots() {
    daysHTML = ``;
    const el = document.getElementById('days-container');
    if (el) el.innerHTML = '';
}

export function displayDots(daysElasped, year_length) {
    const container = document.getElementById("days-container");
    const progressBar = document.getElementById("progress");

    // For all days in the year, create a dot 
    for (let i = 0; i < year_length; i++) {


        // if the dot is before the current date it is red
        const day = document.createElement('span');

        if (i < daysElasped) {
            // daysHTML += `<span class="day elapsed"></span>`
            day.setAttribute("class", "day elapsed");
        } else {
            // else make it gray 
            day.setAttribute("class", "day");
            // daysHTML += `<span class="day"></span>`;
        }

        // Add to DOM
        if (container) {
            container.appendChild(day);
        }
    }

    
    // Insert the HTML there 
    // document.getElementById("days-container").innerHTML = daysHTML;

}


// export function displayTimePeriod(today, periodLength) {
//     today.getFullYear() % 
//     document.getElementById("year").innerHTML = (today.getFullYear());

// }


export function fitDotsToScreen() {
    const container = document.getElementById('days-container');
    const dotCount = container.children.length;
    if (dotCount === 0) return;

    // Calculate available area
    const area = container.clientWidth * container.clientHeight;

    // Math: Side length = sqrt(Area / N)
    const pxPerDot = Math.floor(Math.sqrt(area / dotCount));

    // Dynamic gap: If dots are tiny (<5px), remove gap to save space
    const gap = pxPerDot < 5 ? 0.5 : 7;
    const size = Math.max(0.01, pxPerDot - gap); // Protect against 0px dots

    // Apply to CSS variables
    document.documentElement.style.setProperty('--dot-size', size + 'px');
    document.documentElement.style.setProperty('--dot-margin', (gap / 2) + 'px');
}


export function displayYearAndMonth(daysElasped, year_length) {
    // Clear existing dots so month/year views do not stack
    clearDots();

    // Use fixed sizing for month/year view
    document.documentElement.style.setProperty('--dot-size', '15px');
    document.documentElement.style.setProperty('--dot-margin', '5px');

    // Render dots fresh
    displayDots(daysElasped, year_length);
}