let daysHTML = "";

export function clearDots() {
    daysHTML = ``;
    const el = document.getElementById('days-container');
    if (el) el.innerHTML = '';
}

export function displayDots(daysElapsed, year_length) {
    const container = document.getElementById("days-container");
    if (!container) return;

    // 1. Create a DocumentFragment (an off-screen container)
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < year_length; i++) {
        const day = document.createElement('span');

        // 2. Use .className instead of setAttribute (slightly faster)
        // 3. Ternary operator for cleaner logic
        day.className = i < daysElapsed ? "day elapsed" : "day";

        // 4. Append to the fragment, NOT the actual DOM
        fragment.appendChild(day);
    }

    // 5. Append the fragment to the DOM (This triggers only ONE reflow)
    container.appendChild(fragment);
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
    
    document.documentElement.style.setProperty('--dot-size', '15px');
    document.documentElement.style.setProperty('--dot-margin', '5px');

    
    displayDots(daysElasped, year_length)

}