const getSleepHours = day => {
    switch(day) {
        case 'monday':
            return 8
            break;
        case 'tuesday':
            return 8
            break;
        case 'wednesday':
            return 8
            break;
        case 'thursday':
            return 8
            break;
        case 'friday':
            return 8
            break;
        case 'saturday':
            return 8
            break;
        case 'sunday':
            return 8
            break;
            default:
            return 'Error!'
    }
}

/*const getActualSleepHours = () => {
    return getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday')
};*/

const getActualSleepHours = () => 8 + 8 + 8 + 8 + 8 + 8 + 8;

/*const getIdealSleepHours = () => {
    let idealHours = 8;
    return idealHours * 7;
};*/

const getIdealSleepHours = idealHours => idealHours * 7;

const calculateSleepDebt = () => {
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours(8);
    if (actualSleepHours === idealSleepHours) {
        console.log("Perfect amount of sleep!" )
    } else if (actualSleepHours > idealSleepHours) {
        console.log("You got extra " + (actualSleepHours - idealSleepHours) + " hours of sleep!")
    } else if (actualSleepHours < idealSleepHours) {
        console.log("You should get an extra " + (idealSleepHours - actualSleepHours) + " hours of sleep this week!")
    } else {
        console.log("Error! Check your code!")
    }
};

calculateSleepDebt();