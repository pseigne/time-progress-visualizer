let daysHTML = "";

export function clearDots() {
    daysHTML = ``;
    const el = document.getElementById('days-container');
    if (el) el.innerHTML = '';
}

export function displayDots(daysElasped, year_length) {
    const container = document.getElementById("days-container");

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