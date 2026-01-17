let daysHTML = "";

export function clearDots() {
    daysHTML = ``;
    const el = document.getElementById('days-container');
    if (el) el.innerHTML = '';
}

export function displayDots(daysElasped, year_length) {

    // For all days in the year, create a dot 
    for (let i = 0; i < year_length; i++) {
        // if the dot is before the current date it is red
        if (i < daysElasped) {
            daysHTML += `<span class="day elapsed"></span>`
        } else {
            // else make it gray 
            daysHTML += `<span class="day"></span>`;
        }
    }

    // Insert the HTML there 
    document.getElementById("days-container").innerHTML = daysHTML;
}
