// /********* create variables *********/
// // useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// // Do any of these variables need to be initialized when the page is loaded? 
// // When do they need to be reset or updated?

// Define important variables
let costPerDay = 35; // Default cost per day
let dayCounter = 0; // Count of selected days
const calculatedCost = document.getElementById('calculated-cost'); // Element showing total cost
const clearButton = document.getElementById('clear-button'); // Button to clear selected days
const fullButton = document.getElementById('full'); // Button for full-day selection
const halfButton = document.getElementById('half'); // Button for half-day selection
const daysOfWeek = document.querySelectorAll('.day-selector li'); // Days of the week

// /********* colour change days of week *********/
// // when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// // added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

// Update total cost when a day is clicked
daysOfWeek.forEach(function(day) {
    day.addEventListener('click', function() {
        if (!day.classList.contains('clicked')) {
            day.classList.add('clicked'); // Mark the day as clicked
            dayCounter++; // Increase the count of selected days
            calculateCost(); // Recalculate the total cost
        }
    });
});

// /********* clear days *********/
// // when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

// Clear all selected days when the clear button is clicked
clearButton.addEventListener('click', function() {
    daysOfWeek.forEach(function(day) {
        day.classList.remove('clicked'); // Clear the 'clicked' class
    });
    dayCounter = 0; // Reset the count of selected days
    calculateCost(); // Recalculate the total cost
});

// /********* change rate *********/
// // when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

// Change the rate to half-day when the half-day button is clicked
halfButton.addEventListener('click', function() {
    costPerDay = 20; // Update the daily rate
    halfButton.classList.add('clicked'); // Mark half-day as selected
    fullButton.classList.remove('clicked'); // Unselect full-day
    calculateCost(); // Recalculate the total cost
});

// // when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

// Change the rate to full-day when the full-day button is clicked
fullButton.addEventListener('click', function() {
    costPerDay = 35; // Restore default daily rate
    fullButton.classList.add('clicked'); // Mark full-day as selected
    halfButton.classList.remove('clicked'); // Unselect half-day
    calculateCost(); // Recalculate the total cost
});

// /********* calculate *********/
// // when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

// Update the total cost displayed on the page
function calculateCost() {
    const totalCost = costPerDay * dayCounter; // Calculate the total cost
    calculatedCost.innerHTML = totalCost; // Update the total cost on the page
}
