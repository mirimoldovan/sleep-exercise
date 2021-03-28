const getSleepHours = day => {
 if (day === 'Monday') { 
 return 8;
} else if (day === 'Tuesday') {
    return 7;
} else if (day === 'Wednesday') {
    return 6;
} else if ( day === 'Thursday') {
    return 5;
} else if (day === 'Friday') {
    return 8;
} else if (day === 'Saturday') {
    return 6;
} else if ( day === 'Sunday') {
    return 8;
} else {
    return 'error'
}
}
console.log(getSleepHours('Wednesday'.toLowerCase()));

const getActualSleepHours = () => 
getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday');
console.log(getActualSleepHours());

constGetIdealSleepHours = idealHours =>
idealHours *7;
console.log(getIdealSleepHours(8));

const calculateSleepDebt =() => {
    let actualSleepHours = getActualSleepHours();
    let idealHours = get IdealSleepHours(8);
    if (actualSleepHours === idealHours) {
        console.log(`You are getting the perfect amount of sleep (${actualSleepHours} hours)`);

    }else if (actualSleepHours < idealHours) {
        console.log(`You are not getting enough sleep(${actualSleepHours} hours), you are getting ${idealHours - actualSleepHours} less hours than you should. `);

    }else if (actualSleepHours > idealHours) {
        console.log(`You are getting too much sleep (${actualSleepHours}hours), you are sleeping ${actualSleepHours - idealHours}more than you should.`);

    }else {
        console.log(`error`)
    }
}
calculateSleepDebt();
