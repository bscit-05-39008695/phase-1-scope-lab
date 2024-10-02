// Declare a variable in global scope called customerName using the var keyword
var customerName = 'bob'; // Global scope

// Function to uppercase the customerName variable
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase(); // Modify the global customerName
}

// Function to set a global variable bestCustomer
function setBestCustomer() {
    bestCustomer = 'not bob'; // Declare and assign bestCustomer in global scope
}

// Function to overwrite the bestCustomer variable
function overwriteBestCustomer() {
    bestCustomer = 'maybe bob'; // Change the value of bestCustomer
}

// Declare a constant in global scope
const leastFavoriteCustomer = 'Tom'; // Initial value for leastFavoriteCustomer

// Function that attempts to change the leastFavoriteCustomer constant
function changeLeastFavoriteCustomer() {
    // Attempting to change a constant will cause an error
    leastFavoriteCustomer = 'Jerry'; // This line will throw an error
}

// Exposing functions to the global scope if needed
if (typeof window !== 'undefined') {
    window.customerName = customerName;
    window.upperCaseCustomerName = upperCaseCustomerName;
    window.setBestCustomer = setBestCustomer;
    window.overwriteBestCustomer = overwriteBestCustomer;
    window.changeLeastFavoriteCustomer = changeLeastFavoriteCustomer;
}
