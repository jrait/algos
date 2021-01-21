function RollOne() {
    var rand = Math.ceil(Math.random() * 6)
    return rand
}

// Create a new function named playStatistics(), which should call rollOne() eight
// times (but not print anything after each call). After the last of these eight calls, it should print out
// the lowest and highest values that it received from rollOne, among those eight calls.

// Roll 8 dice
// Write down the result of each roll
// Compare all the numbers together and find the smallest and largest

function playStatistics() {
    var roll_arr = []
    for (var i = 1; i <= 8; i++) {
        roll_arr.push(RollOne())
    }
    console.log(roll_arr)

    var min = roll_arr[0]
    var max = roll_arr[0]
    for (var i = 0; i < roll_arr.length; i++) {
        if (roll_arr[i] > max) {
            max = roll_arr[i]
        }
        else if (roll_arr[i] < min) {
            min = roll_arr[i]
        }
    }
    console.log(max)
    console.log(min)
}

// Make a copy of playStatistics and add code to make playStatistics2(), so
// that at the end (in addition to printing high/low rolls), it also prints the total sum of all eight rolls.


function playStatistics2() {
    var roll_arr = []
    for (var i = 1; i <= 8; i++) {
        roll_arr.push(RollOne())
    }
    console.log(roll_arr)

    var min = roll_arr[0]
    var max = roll_arr[0]
    var sum = 0

    for (var i = 0; i < roll_arr.length; i++) {
        sum += roll_arr[i]
        if (roll_arr[i] > max) {
            max = roll_arr[i]
        }
        else if (roll_arr[i] < min) {
            min = roll_arr[i]
        }
    }
    console.log(max)
    console.log(min)
    console.log(sum)
}


// Copy playStatistics2 and add code to it to make playStatistics3(num), so that
// it will roll as many times as you want, instead of always doing this eight times.


function playStatistics3(num_of_rolls) {
    var roll_arr = []
    for (var i = 1; i <= num_of_rolls; i++) {
        roll_arr.push(RollOne())
    }
    console.log(roll_arr)

    var min = roll_arr[0]
    var max = roll_arr[0]
    var sum = 0

    for (var i = 0; i < roll_arr.length; i++) {
        sum += roll_arr[i]
        if (roll_arr[i] > max) {
            max = roll_arr[i]
        }
        else if (roll_arr[i] < min) {
            min = roll_arr[i]
        }
    }
    console.log(max)
    console.log(min)
    console.log(sum)
}



// Make a copy of playStatistics3 and change it to create playStatistics4(num),
// so that at the end instead of the total sum, it prints the average roll.

function playStatistics4(num_of_rolls) {
    var roll_arr = []
    for (var i = 1; i <= num_of_rolls; i++) {
        roll_arr.push(RollOne())
    }
    console.log(roll_arr)

    var min = roll_arr[0]
    var max = roll_arr[0]
    var sum = 0

    for (var i = 0; i < roll_arr.length; i++) {
        sum += roll_arr[i]
        if (roll_arr[i] > max) {
            max = roll_arr[i]
        }
        else if (roll_arr[i] < min) {
            min = roll_arr[i]
        }
    }
    var avg = sum / num_of_rolls
    console.log(max)
    console.log(min)
    console.log(sum)
    console.log(avg)
}




//  Statistics Until Doubles
// Here’s another game for our New Year’s Eve party. Implement a ’20-sided die’ that randomly returns
// integers between 1 and 20 inclusive. Roll these, tracking statistics until you get a value twice in a row.
// Display number of rolls, min, max, and average

function Rolld20() {
    var rand = Math.ceil(Math.random() * 20)
    return rand
}


function playStatisticsDoubles() {
    var roll_arr = []

    var last_roll = 0

    var current_roll = Rolld20()
    roll_arr.push(current_roll)

    while (last_roll != current_roll) {
        last_roll = current_roll
        current_roll = Rolld20()
        roll_arr.push(current_roll)

    }

    console.log(roll_arr)

    var min = roll_arr[0]
    var max = roll_arr[0]
    var sum = 0

    for (var i = 0; i < roll_arr.length; i++) {
        sum += roll_arr[i]
        if (roll_arr[i] > max) {
            max = roll_arr[i]
        }
        else if (roll_arr[i] < min) {
            min = roll_arr[i]
        }
    }
    var avg = sum / roll_arr.length
    console.log(max)
    console.log(min)
    console.log(sum)
    console.log(avg)
    console.log(roll_arr.length)
}
playStatisticsDoubles()