// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * 
 * Counter 1 has a nested-function and uses closure to return a function. 
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * 
 * Counter 1 uses closure to implement the count function, since count is defined in the function counterMaker, it doesn't reset to 0 everytime it is called and returns an ever-growing number. 
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 * 
 *  Counter 1 will be preferable if you have multiple count variables and you don't want to rename them everytime. 
 * Counter 2 would be fine if you just have the one and want it at the top of your program.
 * 
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
    return count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(){
  return Math.floor(Math.random() * 3);
}
/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(numInning, cb){
  let homeScore = 0;
  let awayScore = 0;

  for (let i = 0; i < numInning; i++) {
    homeScore += cb();
    awayScore += cb();
  }

  return {
    "Home": homeScore,
    "Away": awayScore
  }
}
console.log(finalScore(8, inning));

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(2) A number of innings

and returns the score at each pont in the game, like so:

1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam

Final Score: awayTeam - homeTeam */

function scoreboard(numInning, cb) {
  let homeScore = 0;
  let awayScore = 0;
  let message = [];

  for (let i = 1; i <= numInning; i++) {
    if (i === 1){
      message.push(`${[i]}st inning: ${awayScore += cb()} - ${homeScore += cb()}`);
        } else if (i === 2) {
           message.push(`${[i]}nd inning: ${awayScore += cb()} - ${homeScore += cb()}`);
          } else if (i === 3) {
            message.push(`${[i]}rd inning: ${awayScore += cb()} - ${homeScore += cb()}`);
            } else {
              message.push(`${[i]}th inning: ${awayScore += cb()} - ${homeScore += cb()}`);
      };
  }

  message.push(`Final Score: ${awayScore} - ${homeScore}`);
  return message;
}

// console.log(scoreboard(9, inning));

const scoreBoardV2 = (numInning, cb) => {
  let message = [];
  let home = 0;
  let away = 0;
  const homeArr = [];
  const awayArr = [];


  for (let i = 1; i <= numInning; i++) {
    home = cb();
    away = cb();

    homeArr.push(home);
    awayArr.push(away);

      if (i === 1){
        message.push(`${[i]}st inning: ${away} - ${home}`);
         } else if (i === 2) {
              message.push(`${[i]}nd inning: ${away} - ${home}`);
            } else if (i === 3) {
                message.push(`${[i]}rd inning: ${away} - ${home}`);
               } else {
                  message.push(`${[i]}th inning: ${away} - ${home}`);
      };
  }


  const finalScoreHome = homeArr.reduce((sum, score) => {
    return sum + score
  },0);
  const finalScoreAway = awayArr.reduce((sum, score) => {
    return sum + score
  },0)


  message.push(`Final Score: ${finalScoreAway} - ${finalScoreHome}`);
  return (message);
}

console.log(scoreBoardV2(9,inning));