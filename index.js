function distanceFromHqInBlocks(distanceLocation){
    return Math.abs(42 - distanceLocation);
}

function  distanceFromHqInFeet(distanceLocation){
    return (264 *  distanceFromHqInBlocks(distanceLocation));
}

function distanceTravelledInFeet (startLocation, endLocation){
    return (264 * (Math.abs(startLocation - endLocation)));
}

function calculatesFarePrice(startLocation, endLocation){
    const distanceTravelled = distanceTravelledInFeet(startLocation, endLocation);
    if (distanceTravelled > 2500){
        return 'cannot travel that far';
    }
    else if (distanceTravelled > 2000){
        return 25;
    }
    else if (distanceTravelled > 400){
        return ((.02 * (distanceTravelled - 400)));
    }
    else {
        return 0;
    }
}