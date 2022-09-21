// run the file on command line and follow the instructions to get output
const readline = require("readline");
const rl =
 readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// create empty user input
let userInput = 0;

// question user to enter input
rl.question("Input:", function (int) {
  userInput = parseInt(int);

  console.log(findAps(userInput));

  // close input stream
  rl.close();
});

// aps refers to arithmetic progressions
function findAps(d){
    var cycles = Math.floor(d/(12*60));
    var remainingMins = d % (12 * 60);
    const apsInOneCycle = apsInMins(12*60);
    var apsInRemainingMins = apsInMins(remainingMins);
    return (cycles * apsInOneCycle) + (apsInRemainingMins);
};

function apsInMins(mins){
    var time = 1200;
    var cd = 0;
    var ap = 0;
    var aps = 0;
    while (mins > 0) {
        if (Math.floor(time/1000) != 0) {
            cd = (Math.floor(time/100) % 10) - Math.floor(time/1000);
            if (cd >= 0) {
                ap = Math.floor(time/1000) * 1000 +
                (Math.floor(time/100) % 10) * 100 +
                ((Math.floor(time/100) % 10) + cd) * 10 +
                ((Math.floor(time/100) % 10) + 2*cd);
                if ((ap % 100) < 60 && ap - time <= mins) {
                    aps++;
                }
            }
            time = (Math.floor(time/100) % 12 + 1) * 100;
            mins -= 60;
        }
        else {
            cd = (Math.floor(time/10) % 10) - Math.floor(time/100);
            if (((Math.floor(time/10) % 10) + cd) >= 0) {
                ap = Math.floor(time/100) * 100 + (Math.floor(time/10) % 10) * 10 + ((Math.floor(time/10) % 10) + cd);
                if ((ap % 100) < 60 && ap - time <= mins) {
                    aps++;
                }
            }

            if (time % 100 <= 59) {
                time += 10;
                mins -= 10;
            }
            else {
                time = (Math.floor(time/100) % 12 + 1) * 100;
            }
        }
    }
    return aps;
}
