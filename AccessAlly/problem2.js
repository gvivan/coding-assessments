// example to show how to pass input using command line: node problem_2.js 5 5 3 1 2 11 5 12 2 4 9 2 3 9 7 3
// example output on command line: 33
var arguments = process.argv;

// please pass in all 16 arguments through command line when running this file
if (arguments.length != 18) {
    console.log("Invalid number of arguments!");
}
else {
    var data = [];
    for (var i = 0; i < 16; i++) {
        data.push(parseInt(arguments[i+2]));
    }
    var numPatients = 0;
    while (data[8] != 0 && data[0] != 0) {
        data[0]--;
        data[8]--;
        numPatients++;
    }
    while ((data[9] != 0 && data[1] != 0) || (data[9] != 0 && data[0] != 0)) {
        if ((data[9] != 0 && data[1] != 0)) {
            data[9]--;
            data[1]--;
        }
        else {
            data[9]--;
            data[0]--;
        }
        numPatients++;
    }
    while ((data[10] != 0 && data[2] != 0) || (data[10] != 0 && data[0] != 0)) {
        if ((data[10] != 0 && data[2] != 0)) {
            data[2]--;
            data[10]--;
        }
        else {
            data[0]--;
            data[10]--;
        }
        numPatients++;
    }
    while ((data[11] != 0 && data[3] != 0) ||
    (data[11] != 0 && data[1] != 0) ||
    (data[11] != 0 && data[2] != 0) ||
    (data[11] != 0 && data[0] != 0)) {
        if ((data[11] != 0 && data[3] != 0)) {
            data[3]--;
            data[11]--;
        }
        else if (data[11] != 0 && data[1] != 0){
            data[1]--;
            data[11]--;
        }
        else if (data[11] != 0 && data[2] != 0){
            data[2]--;
            data[11]--;
        }
        else {
            data[11]--;
            data[0]--;
        }
        numPatients++;
    }
    while ((data[12] != 0 && data[4] != 0) || (data[12] != 0 && data[0] != 0)) {
        if ((data[12] != 0 && data[4] != 0)) {
            data[4]--;
            data[12]--;
        }
        else {
            data[0]--;
            data[12]--;
        }
        numPatients++;
    }
    while ((data[13] != 0 && data[5] != 0) ||
    (data[13] != 0 && data[1] != 0) ||
    (data[13] != 0 && data[4] != 0) ||
    (data[13] != 0 && data[0] != 0)) {
        if ((data[13] != 0 && data[5] != 0)) {
            data[5]--;
            data[13]--;
        }
        else if (data[13] != 0 && data[1] != 0){
            data[1]--;
            data[13]--;
        }
        else if (data[13] != 0 && data[4] != 0){
            data[4]--;
            data[13]--;
        }
        else {
            data[13]--;
            data[0]--;
        }
        numPatients++;
    }
    var remainingNegUnits = 0;
    var remainingPosUnits = 0;

    for (var i = 0; i < 8; i++) {
        if (i % 2 === 0) {
            remainingNegUnits += data[i];
        }
        else {
            remainingPosUnits += data[i];
        }
    }

    while ((data[14] != 0 && remainingNegUnits != 0) || (data[15] != 0 && (remainingPosUnits != 0 || remainingNegUnits != 0))) {
        if ((data[14] != 0 && remainingNegUnits != 0)) {
            remainingNegUnits--;
            data[14]--;
        } 
        else {
            if (remainingPosUnits != 0) {
                remainingPosUnits--;
            }
            else {
                remainingNegUnits--;
            }
            data[15]--;
        }
        numPatients++;
    }
    console.log(numPatients);
}
