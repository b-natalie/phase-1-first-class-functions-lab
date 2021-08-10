// Code your solution in this file!
const returnFirstTwoDrivers = function(array) {
    let firstTwoDrivers = [array[0], array[1]];
    return firstTwoDrivers;
}

const returnLastTwoDrivers = function(array) {
    let lastTwoDrivers = [array[array.length - 2], array[array.length - 1]];
    return lastTwoDrivers;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(num) {
    let fare = 2;
    function multiplyByNum(fare) {
        return fare * num;
    }
    return multiplyByNum;
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, selectFunction) {
    return selectFunction(drivers);
}