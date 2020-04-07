const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// let inputEntries = [];

rl.question("What's your name? Nicknames are also acceptable :)", (answer1) => {
  // inputEntries.push(answer1);
  // console.log(`Thank you for your valuable feedback: ${answer1}`);

  rl.question("What's an activity you like doing?", (answer2) => {
    // inputEntries.push(answer2);
    // console.log(`Thank you for your valuable feedback: ${answer2}`);

    rl.question("What do you listen to while doing that?", (answer3) => {

      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)", (answer4) => {

        rl.question("What's your favourite thing to eat for that meal?", (answer5) => {

          rl.question("Which sport is your absolute favourite?", (answer6) => {

            rl.question("What is your superpower? In a few words, tell us what you are amazing at!", (answer7) => {

  console.log(`${answer1} likes ${answer2} while listening to ${answer3}. Their favourite meal is ${answer4} and at ${answer4} their favourite thing to eat is ${answer5}. ${answer1}'s favourite sport is ${answer6}! Their super power is ${answer7}!`)

  rl.close();
            });
          });
        });
      });
    });
  });
});