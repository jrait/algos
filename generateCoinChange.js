// Generate Coin Change
// Change is inevitable (especially when breaking a twenty). Make generateCoinChange(cents).
// Accept a number of American cents, computer and print how to represent that amount with smallest number of coins. Common American coins are pennies (1 cent), nickels (5 cents), dimes (10 cents), and quarters (25 cents).

// Example output, given (94):
// 94 cents can be represented by:
// quarters: 3
// dimes: 1
// nickels: 1
// pennies: 4


//Our SOlution
function change(cents) {
    var coins = [{
        name: 'Quarters',
        amount: 0,
        value: 25
    },
    {
        name: 'Dimes',
        amount: 0,
        value: 10
    },
    {
        name: 'Nickels',
        amount: 0,
        value: 5
    },
    {
        name: 'Pennies',
        amount: 0,
        value: 1
    }]

    var remainder = cents



    for (i = 0; i < coins.length; i++) {
        coins[i].amount = Math.floor(remainder / coins[i].value)
        remainder = remainder % coins[i].value
    }

    return coins
}

console.log(change(100))


//Anne's solution:
// Think about it as if you're at a register and you're grabbing change from it
// Can do it one step at a time
// Think about it from small to big

var change_needed = 50;
var quarters_in_hand = 0;
var dimes_in_hand = 0;
var nickels_in_hand = 0;
var pennies_in_hand = 0;

while (change_needed >= 25) {
    quarters_in_hand++;
    change_needed -= 25;
}
while (change_needed >= 10) {
    dimes_in_hand++;
    change_needed -= 10;
}
while (change_needed >= 5) {
    nickels_in_hand++;
    change_needed -= 5;
}
pennies_in_hand = change_needed


console.log("quarters: " + quarters_in_hand);
console.log("dimes: " + dimes_in_hand);
console.log("nickes: " + nickels_in_hand);
console.log("pennies: " + pennies_in_hand);

//Anne proceeded to say that the Math.floor way works too!

// Second: can you simplify/shorten your code?

// Third: add half-dollar (50 cents) and dollar (100 cents) coins with 40 additional characters or less.


function change(cents) {
    var coins = [
        {
            name: 'Dollar',
            amount: 0,
            value: 100,
        },
        {
            name: 'half-dollar',
            amount: 0,
            value: 50
        },
        {
            name: 'Quarters',
            amount: 0,
            value: 25
        },
        {
            name: 'Dimes',
            amount: 0,
            value: 10
        },
        {
            name: 'Nickels',
            amount: 0,
            value: 5
        },
        {
            name: 'Pennies',
            amount: 0,
            value: 1
        }]

    var remainder = cents



    for (i = 0; i < coins.length; i++) {
        coins[i].amount = Math.floor(remainder / coins[i].value)
        remainder = remainder % coins[i].value
    }

    return coins
}

console.log(change(100))


