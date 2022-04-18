const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


rl.question("What's your name? ", (answer0) => {
  console.log(`Your name is: ${answer0}`);

  rl.question("What's an activity you like doing? ", (answer1) => {
    console.log(`This is the activity you like doing: ${answer1}`);

    rl.question("What do you listen to while doing that? ", (answer2) => {
      console.log(`You like to listen to: ${answer2}`);

      rl.question("Which meal is your favourite? (eg: dinner, brunch, etc) ", (answer3) => {
        console.log(`Your favourite meal is: ${answer3}`);

        rl.question("what's your favourite thing to eat for the meal? ", (answer4) => {
          console.log(`Your favourite thing to eat for ${answer3} is: ${answer4}`);

          rl.question("Which sport is your absolute favourite? ", (answer5) => {
            console.log(`Your favourite sport is: ${answer5}`);

            rl.question("What is your superpower? In a few words, tell us what you're amazing at! ", (answer6) => {
              console.log(`Your super power is: ${answer6}`);

              console.log(
                `${answer0} loves ${answer1}. She loves listening to ${answer2}, devouring ${answer4} for ${answer3}, prefers ${answer5} over any other sport, and is amazing at ${answer6}. `
              );

              rl.close();
            });
          });
        });
      });
    });
  });
});

/* Note to self:
Had rl.close() code between line 40 and 41 before. Doing this will exit the code.
Therefore, the nested callbacks Line 16 onwards will not run. They will be placed in the Event Loop,
awaiting to be run. But rl.close() method is run first. Therefore, the nested callbacks in the Event Loop
do not get a chance to run AT ALL. To resolve this, place rl.close() method after printing
the profile paragraph that incorporates user's answers. Anything you place BEFORE the rl.close()
in its current position (after all the nested callbacks) will run. */
